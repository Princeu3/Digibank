"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, Building2, Plus, ExternalLink, ArrowRightLeft, CheckCircle, Trash2, X, CreditCard, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// API service for account operations
const accountService = {
  // Fetch all linked accounts for a user
  async getAccounts(userId) {
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/accounts?userId=${userId}`);
      // if (!response.ok) throw new Error('Failed to fetch accounts');
      // return await response.json();
      
      // For demo, return mock data from localStorage or default
      const storedAccounts = localStorage.getItem(`accounts-${userId}`);
      if (storedAccounts) {
        return JSON.parse(storedAccounts);
      }
      
      // Default accounts
      const defaultAccounts = [
        { id: 1, name: "Chase Bank", accountType: "Checking", accountNumber: "****4567", status: "active" },
        { id: 2, name: "Wells Fargo", accountType: "Savings", accountNumber: "****8901", status: "active" },
      ];
      
      // Store defaults in localStorage
      localStorage.setItem(`accounts-${userId}`, JSON.stringify(defaultAccounts));
      return defaultAccounts;
    } catch (error) {
      console.error("Error fetching accounts:", error);
      return [];
    }
  },
  
  // Add a new account
  async addAccount(userId, accountData) {
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/accounts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userId, ...accountData })
      // });
      // if (!response.ok) throw new Error('Failed to add account');
      // return await response.json();
      
      // For demo, add to localStorage
      const accounts = await this.getAccounts(userId);
      const newId = Math.max(0, ...accounts.map(a => a.id)) + 1;
      
      const newAccount = {
        id: newId,
        ...accountData,
        status: "active"
      };
      
      const updatedAccounts = [...accounts, newAccount];
      localStorage.setItem(`accounts-${userId}`, JSON.stringify(updatedAccounts));
      
      return newAccount;
    } catch (error) {
      console.error("Error adding account:", error);
      throw error;
    }
  },
  
  // Remove an account
  async removeAccount(userId, accountId) {
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/accounts/${accountId}`, {
      //   method: 'DELETE',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userId })
      // });
      // if (!response.ok) throw new Error('Failed to remove account');
      // return await response.json();
      
      // For demo, remove from localStorage
      const accounts = await this.getAccounts(userId);
      const updatedAccounts = accounts.filter(acc => acc.id !== accountId);
      localStorage.setItem(`accounts-${userId}`, JSON.stringify(updatedAccounts));
      
      return { success: true, accountId };
    } catch (error) {
      console.error("Error removing account:", error);
      throw error;
    }
  }
};

export default function LinkAccounts() {
  const { user } = useUser();
  const { toast } = useToast();
  
  // State for linked accounts
  const [linkedAccounts, setLinkedAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const hasLinkedAccounts = linkedAccounts.length > 0;
  
  // State for dialog controls
  const [isAddAccountOpen, setIsAddAccountOpen] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  
  // State for form inputs
  const [bankName, setBankName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [accountToRemove, setAccountToRemove] = useState(null);

  // Fetch linked accounts when component mounts
  useEffect(() => {
    async function fetchAccounts() {
      if (!user) return;
      
      try {
        setIsLoading(true);
        const accounts = await accountService.getAccounts(user.id);
        setLinkedAccounts(accounts);
        setLoadError("");
      } catch (error) {
        console.error("Failed to load accounts:", error);
        setLoadError("Failed to load your linked accounts. Please try again.");
        toast({
          title: "Error loading accounts",
          description: "We couldn't load your linked accounts. Please refresh and try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchAccounts();
  }, [user, toast]);

  // Reset form fields
  const resetForm = () => {
    setBankName("");
    setAccountType("");
    setAccountNumber("");
    setRoutingNumber("");
    setFormError("");
  };

  // Add account manually
  const handleManualAdd = async (e) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSubmitting(true);
    setFormError("");
    
    // Validate inputs
    if (!bankName.trim() || !accountType || !accountNumber.trim() || !routingNumber.trim()) {
      setFormError("All fields are required");
      setIsSubmitting(false);
      return;
    }
    
    // Simple validation for account number and routing number
    if (!/^\d+$/.test(accountNumber) || accountNumber.length < 8) {
      setFormError("Please enter a valid account number (numbers only)");
      setIsSubmitting(false);
      return;
    }
    
    if (!/^\d{9}$/.test(routingNumber)) {
      setFormError("Routing number must be 9 digits");
      setIsSubmitting(false);
      return;
    }
    
    try {
      const maskedNumber = "****" + accountNumber.slice(-4);
      
      // Save to backend
      const newAccount = await accountService.addAccount(user.id, {
        name: bankName,
        accountType: accountType,
        accountNumber: maskedNumber,
        routingNumber: routingNumber // In a real app, you'd encrypt this
      });
      
      // Update local state
      setLinkedAccounts([...linkedAccounts, newAccount]);
      
      // Show success message
      toast({
        title: "Account linked successfully",
        description: `${bankName} (${accountType}) has been added to your linked accounts.`,
        variant: "default"
      });
      
      // Reset form and close dialog
      resetForm();
      setIsAddAccountOpen(false);
    } catch (error) {
      setFormError("Failed to link account. Please try again.");
      toast({
        title: "Error linking account",
        description: "We couldn't link your account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle Plaid connection
  const handlePlaidConnect = async () => {
    if (!user) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would integrate with Plaid API
      // For demo, simulate adding an account
      const newAccount = await accountService.addAccount(user.id, {
        name: "Bank of America",
        accountType: "Checking",
        accountNumber: "****7890"
      });
      
      // Update local state
      setLinkedAccounts([...linkedAccounts, newAccount]);
      
      // Show success message
      toast({
        title: "Account linked via Plaid",
        description: "Bank of America (Checking) has been added to your linked accounts.",
        variant: "default"
      });
      
      // Close dialog
      setIsAddAccountOpen(false);
    } catch (error) {
      toast({
        title: "Error linking with Plaid",
        description: "We couldn't connect to your bank through Plaid. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Remove account
  const confirmRemoveAccount = (accountId) => {
    const account = linkedAccounts.find(acc => acc.id === accountId);
    setAccountToRemove(account);
    setShowRemoveConfirm(true);
  };
  
  const handleRemoveAccount = async () => {
    if (!user || !accountToRemove) return;
    
    setIsSubmitting(true);
    
    try {
      // Remove from backend
      await accountService.removeAccount(user.id, accountToRemove.id);
      
      // Update local state
      setLinkedAccounts(linkedAccounts.filter(acc => acc.id !== accountToRemove.id));
      
      // Show success message
      toast({
        title: "Account removed",
        description: `${accountToRemove.name} has been removed from your linked accounts.`,
        variant: "default"
      });
      
      // Close dialog
      setShowRemoveConfirm(false);
      setAccountToRemove(null);
    } catch (error) {
      toast({
        title: "Error removing account",
        description: "We couldn't remove your account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-full py-8">
      <div className="w-full max-w-4xl p-4">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="mr-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Link Accounts</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="mr-3 h-6 w-6 text-blue-600" />
              Your Linked Accounts
            </CardTitle>
            <CardDescription>Manage your external bank connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-current border-r-transparent" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p className="mt-2 text-gray-600">Loading your accounts...</p>
                </div>
              ) : loadError ? (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{loadError}</AlertDescription>
                </Alert>
              ) : linkedAccounts.length > 0 ? (
                linkedAccounts.map((account) => (
                  <Card key={account.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Building2 className="h-8 w-8 mr-3 text-gray-700" />
                          <div>
                            <h3 className="font-medium">{account.name}</h3>
                            <p className="text-sm text-gray-500">
                              {account.accountType} • {account.accountNumber}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Connected
                          </Badge>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-gray-500 hover:text-red-600"
                            onClick={() => confirmRemoveAccount(account.id)}
                            disabled={isSubmitting}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  <p className="text-gray-500 mb-4">You haven't linked any accounts yet</p>
                </div>
              )}

              {/* Link Account Button and Dialog */}
              <Button 
                className="w-full flex items-center justify-center mt-4" 
                variant="outline"
                onClick={() => setIsAddAccountOpen(true)}
                disabled={isSubmitting}
              >
                <Plus className="mr-2 h-4 w-4" />
                Link a New Account
              </Button>

              <Dialog open={isAddAccountOpen} onOpenChange={setIsAddAccountOpen}>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Link a Bank Account</DialogTitle>
                    <DialogDescription>
                      Connect a new external bank account to enable transfers.
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="plaid" className="mt-2">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="plaid">Connect with Plaid</TabsTrigger>
                      <TabsTrigger value="manual">Enter Manually</TabsTrigger>
                    </TabsList>
                    
                    {/* Plaid tab content */}
                    <TabsContent value="plaid" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-start">
                            <ExternalLink className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-blue-800">Secure connection with Plaid</h4>
                              <p className="text-sm text-blue-700 mt-1">
                                We use Plaid to securely connect to over 9,000 banks and credit unions without storing your credentials.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="rounded-lg border border-gray-200 p-4 text-center">
                          <Building2 className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                          <h4 className="font-medium">How it works:</h4>
                          <ol className="text-sm text-gray-600 text-left mt-2 space-y-2 list-decimal list-inside">
                            <li>Click "Connect with Plaid" below</li>
                            <li>Select your bank from the list</li>
                            <li>Log in with your bank credentials</li>
                            <li>Select which accounts to link</li>
                          </ol>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        onClick={handlePlaidConnect}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Connecting..." : "Connect with Plaid"}
                      </Button>
                    </TabsContent>
                    
                    {/* Manual entry tab content */}
                    <TabsContent value="manual" className="space-y-4 mt-4">
                      <form onSubmit={handleManualAdd}>
                        {formError && (
                          <Alert variant="destructive" className="mb-4">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{formError}</AlertDescription>
                          </Alert>
                        )}
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="bank-name">Bank Name</Label>
                            <Input 
                              id="bank-name" 
                              placeholder="Enter bank name"
                              value={bankName}
                              onChange={(e) => setBankName(e.target.value)}
                              disabled={isSubmitting}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="account-type">Account Type</Label>
                            <Select value={accountType} onValueChange={setAccountType} disabled={isSubmitting}>
                              <SelectTrigger id="account-type">
                                <SelectValue placeholder="Select account type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Checking">Checking</SelectItem>
                                <SelectItem value="Savings">Savings</SelectItem>
                                <SelectItem value="Investment">Investment</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="account-number">Account Number</Label>
                            <Input 
                              id="account-number" 
                              placeholder="Enter account number"
                              value={accountNumber}
                              onChange={(e) => setAccountNumber(e.target.value)}
                              disabled={isSubmitting}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="routing-number">Routing Number</Label>
                            <Input 
                              id="routing-number" 
                              placeholder="9-digit routing number"
                              value={routingNumber}
                              onChange={(e) => setRoutingNumber(e.target.value)}
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                        
                        <DialogFooter className="mt-4">
                          <Button 
                            variant="outline" 
                            type="button"
                            onClick={() => setIsAddAccountOpen(false)}
                            disabled={isSubmitting}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Linking..." : "Link Account"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
              
              {/* Confirm Remove Account Dialog */}
              <Dialog open={showRemoveConfirm} onOpenChange={setShowRemoveConfirm}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-red-600">Remove Account</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to remove this account?
                    </DialogDescription>
                  </DialogHeader>
                  
                  {accountToRemove && (
                    <div className="py-4">
                      <Card className="border border-gray-200 bg-gray-50">
                        <CardContent className="p-4">
                          <div className="flex items-center">
                            <Building2 className="h-6 w-6 mr-3 text-gray-700" />
                            <div>
                              <h3 className="font-medium">{accountToRemove.name}</h3>
                              <p className="text-sm text-gray-500">
                                {accountToRemove.accountType} • {accountToRemove.accountNumber}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        This will remove the account connection. Any scheduled transfers to this account will be cancelled.
                      </p>
                    </div>
                  )}
                  
                  <DialogFooter>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowRemoveConfirm(false)}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="destructive" 
                      onClick={handleRemoveAccount}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Removing..." : "Remove Account"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start text-sm text-gray-500">
            <p className="flex items-center mb-2">
              <ExternalLink className="h-4 w-4 mr-2" />
              Your bank credentials are securely handled by our trusted partner, Plaid.
            </p>
            <p>We never store your banking username or password.</p>
          </CardFooter>
        </Card>

        {/* New section to link to ACH transfers */}
        <Card className={hasLinkedAccounts ? "" : "opacity-60"}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRightLeft className="mr-3 h-6 w-6 text-green-600" />
              Ready to Transfer Money?
            </CardTitle>
            <CardDescription>
              You can now move money between your linked accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-800">Accounts Linked Successfully</h4>
                    <p className="text-sm text-green-700 mt-1">
                      You've linked {linkedAccounts.length} account{linkedAccounts.length !== 1 ? 's' : ''}, which means you're all set to make ACH transfers between them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-3">
                <h4 className="font-medium">What you can do now:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mr-2 flex-shrink-0">1</div>
                    <span>Transfer money from your external banks to your DigiBank account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mr-2 flex-shrink-0">2</div>
                    <span>Send money from your DigiBank account to your external accounts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mr-2 flex-shrink-0">3</div>
                    <span>Set up recurring transfers for regular savings or payments</span>
                  </li>
                </ul>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-center">
                <Link href="/ach-transfer">
                  <Button size="lg" className={hasLinkedAccounts ? "" : "opacity-50 cursor-not-allowed"} disabled={!hasLinkedAccounts}>
                    <ArrowRightLeft className="mr-2 h-4 w-4" />
                    Start an ACH Transfer
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
          {!hasLinkedAccounts && (
            <CardFooter className="bg-gray-50 border-t border-gray-100 text-sm text-gray-500 italic">
              Link at least one account to enable transfers
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
} 