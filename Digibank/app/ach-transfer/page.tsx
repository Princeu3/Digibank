// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, ArrowRightLeft, AlertCircle, ExternalLink, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { AgentResponse } from "@/lib/ai-agent";
import { useRouter } from "next/navigation";

// Account service for fetching linked accounts
const accountService = {
  // Fetch all linked accounts for a user
  async getAccounts(userId: string) {
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/accounts?userId=${userId}`);
      // if (!response.ok) throw new Error('Failed to fetch accounts');
      // return await response.json();
      
      // For demo, return mock data
      const defaultAccounts = [
        { id: 1, name: "Chase Bank", accountType: "Checking", accountNumber: "****4567", status: "active" },
        { id: 2, name: "Wells Fargo", accountType: "Savings", accountNumber: "****8901", status: "active" },
      ];
      
      return defaultAccounts;
    } catch (err) {
      console.error("Error fetching accounts:", err);
      return [];
    }
  },
  
  // Save a transfer record
  async saveTransfer(userId: string, transferData: any) {
    try {
      // In a real app, this would be an API call
      // const response = await fetch('/api/transfers', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userId, ...transferData })
      // });
      // if (!response.ok) throw new Error('Failed to save transfer');
      // return await response.json();
      
      // For demo, return mock data
      return {
        id: 1,
        ...transferData,
        status: "pending",
        createdAt: new Date().toISOString()
      };
    } catch (error) {
      console.error("Error saving transfer:", error);
      throw error;
    }
  }
};

export default function ACHTransfer() {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  
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

  // State for AI agent
  const [isAiAnalyzing, setIsAiAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<AgentResponse | null>(null);

  const hasLinkedAccounts = linkedAccounts.length > 0;

  // Load accounts and listen for updates
  useEffect(() => {
    if (!user?.id) return;

    const loadAccounts = () => {
      try {
        const accounts = JSON.parse(localStorage.getItem(`accounts-${user.id}`) || '[]');
        setLinkedAccounts(accounts);
      } catch (error) {
        console.error('Error loading accounts:', error);
        toast({
          title: "Error",
          description: "Failed to load your accounts. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    // Initial load
    loadAccounts();

    // Listen for account updates
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `accounts-${user.id}` || e.key === 'accounts-updated') {
        loadAccounts();
      }
    };

    // Listen for storage events from other tabs
    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [user?.id, toast]);

  // Function to analyze transfer with AI agent
  const analyzeTransferWithAI = async (transferData) => {
    setIsAiAnalyzing(true);
    
    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user!.id,
          ...transferData
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze transfer');
      }
      
      const analysisResult = await response.json();
      setAiAnalysis(analysisResult);
      
      // If high risk, show a toast alert
      if (analysisResult.risk_assessment === 'high') {
        toast({
          title: "High risk transfer detected",
          description: analysisResult.recommendation,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("AI agent analysis failed:", error);
      toast({
        title: "AI analysis failed",
        description: "We couldn't analyze this transfer for security concerns. Please review carefully.",
        variant: "destructive"
      });
    } finally {
      setIsAiAnalyzing(false);
    }
  };

  // Handle transfer submission
  const handleTransfer = async (e) => {
    e.preventDefault();
    if (!user) return;
    
    setIsSubmitting(true);
    
    try {
      // Validate amount
      const amountNum = parseFloat(amount);
      if (isNaN(amountNum) || amountNum <= 0) {
        toast({
          title: "Invalid amount",
          description: "Please enter a valid amount greater than zero.",
          variant: "destructive"
        });
        return;
      }
      
      // Get account details for the record
      const fromAccountDetails = linkedAccounts.find(acc => `account-${acc.id}` === fromAccount);
      const toAccountDetails = linkedAccounts.find(acc => `account-${acc.id}` === toAccount);
      
      const transferData = {
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
      };
      
      // Save the transfer record
      await accountService.saveTransfer(user.id, transferData);
      
      // Store transfer data in sessionStorage instead of localStorage
      sessionStorage.setItem('pending-transfer', JSON.stringify(transferData));
      
      // Use router.push for smoother transition
      router.push('/ai-agent');
      
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
    <div className="flex flex-col items-center min-h-full py-8">
      <div className="w-full max-w-4xl p-4">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="mr-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">ACH Transfer</h1>
        </div>

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
        
        {hasLinkedAccounts && (
          <Card>
            <CardHeader>
              <CardTitle>Transfer Details</CardTitle>
              <CardDescription>
                Enter the details for your ACH transfer
              </CardDescription>
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
        )}
      </div>
    </div>
  );
} 