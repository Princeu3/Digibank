"use client";

import { useState, useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, ArrowRightLeft, AlertCircle, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

// Account service for fetching linked accounts
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
  
  // Save a transfer record
  async saveTransfer(userId, transferData) {
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/transfers', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userId, ...transferData })
      // });
      // if (!response.ok) throw new Error('Failed to save transfer');
      // return await response.json();
      
      // For demo, just save to localStorage
      const transfers = JSON.parse(localStorage.getItem(`transfers-${userId}`) || '[]');
      const newTransfer = {
        id: transfers.length + 1,
        ...transferData,
        status: "pending",
        createdAt: new Date().toISOString()
      };
      
      transfers.push(newTransfer);
      localStorage.setItem(`transfers-${userId}`, JSON.stringify(transfers));
      
      return newTransfer;
    } catch (error) {
      console.error("Error saving transfer:", error);
      throw error;
    }
  }
};

export default function ACHTransfer() {
  const { user } = useUser();
  const { toast } = useToast();
  
  // State for linked accounts and loading
  const [linkedAccounts, setLinkedAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  
  // State for form values
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasLinkedAccounts = linkedAccounts.length > 0;

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

  // Handle transfer submission
  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!user || !hasLinkedAccounts || !fromAccount || !toAccount || !amount) return;
    
    // Validate amount
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid transfer amount greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    // Prevent transferring to the same account
    if (fromAccount === toAccount) {
      toast({
        title: "Invalid transfer",
        description: "You cannot transfer funds to the same account.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Get account details for the record
      const fromAccountDetails = linkedAccounts.find(acc => `account-${acc.id}` === fromAccount);
      const toAccountDetails = linkedAccounts.find(acc => `account-${acc.id}` === toAccount);
      
      // Save the transfer record
      await accountService.saveTransfer(user.id, {
        fromAccount: {
          id: fromAccountDetails.id,
          name: fromAccountDetails.name,
          accountType: fromAccountDetails.accountType,
          accountNumber: fromAccountDetails.accountNumber
        },
        toAccount: {
          id: toAccountDetails.id,
          name: toAccountDetails.name,
          accountType: toAccountDetails.accountType,
          accountNumber: toAccountDetails.accountNumber
        },
        amount: amountNum.toFixed(2),
        memo: memo || "Transfer"
      });
      
      // Show success message
      toast({
        title: "Transfer initiated",
        description: `$${amountNum.toFixed(2)} is being transferred from ${fromAccountDetails.name} to ${toAccountDetails.name}. This may take 1-3 business days to complete.`,
      });
      
      // Reset form
      setFromAccount("");
      setToAccount("");
      setAmount("");
      setMemo("");
    } catch (error) {
      toast({
        title: "Transfer failed",
        description: "We couldn't process your transfer. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full max-w-4xl p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">ACH Transfer</h1>
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
              elements: {
                avatarBox: {
                  width: '70px',
                  height: '70px'
                }
              }
            }}
          />
        </div>

        <Link href="/dashboard" className="flex items-center text-blue-600 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>

        {!hasLinkedAccounts && !isLoading && (
          <Alert className="mb-6 border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">You need linked accounts to make transfers</AlertTitle>
            <AlertDescription className="text-amber-700">
              Please link at least one external bank account before initiating a transfer.
              <div className="mt-2">
                <Link href="/link-accounts">
                  <Button variant="outline" className="bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200">
                    Link an Account Now
                  </Button>
                </Link>
              </div>
            </AlertDescription>
          </Alert>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRightLeft className="mr-3 h-6 w-6 text-green-600" />
              Transfer Funds
            </CardTitle>
            <CardDescription>Move money between your linked accounts</CardDescription>
          </CardHeader>
          <CardContent>
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
            ) : (
              <form className="space-y-6" onSubmit={handleTransfer}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-account">From Account</Label>
                    <Select 
                      disabled={!hasLinkedAccounts || isSubmitting}
                      value={fromAccount}
                      onValueChange={setFromAccount}
                    >
                      <SelectTrigger id="from-account">
                        <SelectValue placeholder="Select source account" />
                      </SelectTrigger>
                      <SelectContent>
                        {linkedAccounts.map(account => (
                          <SelectItem key={account.id} value={`account-${account.id}`}>
                            {account.name} - {account.accountType} ({account.accountNumber})
                          </SelectItem>
                        ))}
                        <div className="py-2 px-2 border-t border-gray-100 mt-1">
                          <Link href="/link-accounts" className="flex items-center text-blue-600 text-sm hover:underline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Manage linked accounts
                          </Link>
                        </div>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="to-account">To Account</Label>
                    <Select 
                      disabled={!hasLinkedAccounts || isSubmitting}
                      value={toAccount}
                      onValueChange={setToAccount}
                    >
                      <SelectTrigger id="to-account">
                        <SelectValue placeholder="Select destination account" />
                      </SelectTrigger>
                      <SelectContent>
                        {linkedAccounts.map(account => (
                          <SelectItem key={account.id} value={`account-${account.id}`}>
                            {account.name} - {account.accountType} ({account.accountNumber})
                          </SelectItem>
                        ))}
                        <div className="py-2 px-2 border-t border-gray-100 mt-1">
                          <Link href="/link-accounts" className="flex items-center text-blue-600 text-sm hover:underline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Add another account
                          </Link>
                        </div>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <Input 
                        id="amount" 
                        type="number" 
                        placeholder="0.00" 
                        className="pl-8" 
                        disabled={!hasLinkedAccounts || isSubmitting}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        step="0.01"
                        min="0.01"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="memo">Memo (Optional)</Label>
                    <Input 
                      id="memo" 
                      placeholder="Add a note" 
                      disabled={!hasLinkedAccounts || isSubmitting}
                      value={memo}
                      onChange={(e) => setMemo(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => {
                      setFromAccount("");
                      setToAccount("");
                      setAmount("");
                      setMemo("");
                    }}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={!hasLinkedAccounts || !fromAccount || !toAccount || !amount || isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Transfer Funds"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 