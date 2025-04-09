"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle, Info, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { AOAResponse, AccountDetails } from "@/lib/aoa-agent";
import { useRouter } from "next/navigation";

export default function AOAAgentPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(false);
  const [aoaAnalysis, setAOAAnalysis] = useState<AOAResponse | null>(null);
  const [accountHistory, setAccountHistory] = useState<any[]>([]);
  const [currentAccount, setCurrentAccount] = useState<AccountDetails | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Load account history and check for pending verification
  useEffect(() => {
    if (!user?.id) return;
    
    const loadData = async () => {
      try {
        // Load account history
        const storedLogs = localStorage.getItem(`aoa-logs-${user.id}`);
        if (storedLogs) {
          setAccountHistory(JSON.parse(storedLogs));
        }

        // Check for pending account in sessionStorage
        const pendingAccount = sessionStorage.getItem('pending-account');
        if (pendingAccount) {
          const accountData = JSON.parse(pendingAccount);
          setCurrentAccount(accountData);
          sessionStorage.removeItem('pending-account'); // Clear the pending account
          await verifyAccount(accountData); // Start verification immediately
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsInitialLoad(false);
      }
    };

    loadData();
  }, [user?.id]);

  // Verify account
  const verifyAccount = async (accountData: AccountDetails) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/aoa-agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          ...accountData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify account');
      }

      const result = await response.json();
      setAOAAnalysis(result);

      // If verification is successful, add the account to linked accounts
      if (result.status === 'verified') {
        // Get existing accounts from localStorage
        const existingAccounts = JSON.parse(localStorage.getItem(`accounts-${user.id}`) || '[]');
        
        // Create new account object
        const newAccount = {
          id: Math.max(0, ...existingAccounts.map((a: any) => a.id)) + 1,
          name: accountData.bankName,
          accountType: accountData.accountType,
          accountNumber: '****' + accountData.accountNumber.slice(-4),
          status: 'active',
          balance: 0 // Add initial balance
        };

        // Add new account to the list
        const updatedAccounts = [...existingAccounts, newAccount];
        
        // Update localStorage
        localStorage.setItem(`accounts-${user.id}`, JSON.stringify(updatedAccounts));
        
        // Update sessionStorage to trigger a refresh on other pages
        sessionStorage.setItem('accounts-updated', Date.now().toString());

        // Update verification history
        const newHistory = [{
          timestamp: new Date().toISOString(),
          accountData,
          agentResponse: result
        }, ...accountHistory];
        
        setAccountHistory(newHistory);
        localStorage.setItem(`aoa-logs-${user.id}`, JSON.stringify(newHistory));

        // Show success message
        toast({
          title: "Account Linked Successfully",
          description: `${accountData.bankName} has been added to your linked accounts.`,
          variant: "default"
        });
      }
    } catch (error) {
      console.error('Error verifying account:', error);
      toast({
        title: "Error",
        description: "Failed to verify account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Get verification status styling
  const getStatusStyle = (status: 'verified' | 'pending' | 'rejected') => {
    switch (status) {
      case 'verified':
        return {
          border: 'border-green-200',
          bg: 'bg-green-50',
          text: 'text-green-800',
          icon: <CheckCircle className="h-5 w-5" />
        };
      case 'rejected':
        return {
          border: 'border-red-200',
          bg: 'bg-red-50',
          text: 'text-red-800',
          icon: <AlertTriangle className="h-5 w-5" />
        };
      default:
        return {
          border: 'border-amber-200',
          bg: 'bg-amber-50',
          text: 'text-amber-800',
          icon: <AlertTriangle className="h-5 w-5" />
        };
    }
  };

  // Get confidence score styling
  const getConfidenceStyle = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  // Show loading state during initial load
  if (isInitialLoad) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-600">Loading Account Verification Interface...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-full py-8">
      <div className="w-full max-w-4xl p-4">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="mr-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Account Verification Assistant</h1>
        </div>

        {/* Current Account Verification Section */}
        {currentAccount && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Account Verification
              </CardTitle>
              <CardDescription>
                Verifying your new account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Account Details:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">Bank:</span>
                    <p className="font-medium">{currentAccount.bankName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Account Type:</span>
                    <p className="font-medium">{currentAccount.accountType.charAt(0).toUpperCase() + currentAccount.accountType.slice(1)}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Account Number:</span>
                    <p className="font-medium">****{currentAccount.accountNumber.slice(-4)}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Routing Number:</span>
                    <p className="font-medium">****{currentAccount.routingNumber.slice(-4)}</p>
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
                  <p className="text-gray-600">Verifying account details...</p>
                </div>
              ) : aoaAnalysis ? (
                <div className={`p-4 rounded-lg ${getStatusStyle(aoaAnalysis.status).bg} ${getStatusStyle(aoaAnalysis.status).border}`}>
                  <div className="flex items-center gap-2 mb-4">
                    {getStatusStyle(aoaAnalysis.status).icon}
                    <h3 className={`text-lg font-semibold ${getStatusStyle(aoaAnalysis.status).text}`}>
                      {aoaAnalysis.status.charAt(0).toUpperCase() + aoaAnalysis.status.slice(1)}
                    </h3>
                    <div className="ml-auto">
                      <span className="text-sm text-gray-500">Confidence:</span>
                      <span className={`ml-2 font-medium ${getConfidenceStyle(aoaAnalysis.confidence_score)}`}>
                        {aoaAnalysis.confidence_score}%
                      </span>
                    </div>
                  </div>
                  <p className="mb-4">{aoaAnalysis.message}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Verification Steps:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {aoaAnalysis.verification_steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Next Steps:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {aoaAnalysis.next_actions.map((action, index) => (
                        <li key={index}>{action}</li>
                      ))}
                    </ul>
                  </div>

                  {aoaAnalysis.risk_factors.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2 text-red-600">Risk Factors:</h4>
                      <ul className="list-disc list-inside space-y-1 text-red-600">
                        {aoaAnalysis.risk_factors.map((risk, index) => (
                          <li key={index}>{risk}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {aoaAnalysis.status === 'verified' && (
                    <div className="mt-6 flex justify-end gap-4">
                      <Button 
                        variant="outline"
                        onClick={() => router.push('/link-accounts')}
                      >
                        View Linked Accounts
                      </Button>
                      <Button 
                        onClick={() => router.push('/ach-transfer')}
                      >
                        Start Transfer
                      </Button>
                    </div>
                  )}
                </div>
              ) : null}
            </CardContent>
          </Card>
        )}

        {/* Account History Section */}
        <Card>
          <CardHeader>
            <CardTitle>Verification History</CardTitle>
            <CardDescription>
              View past account verifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            {accountHistory.length > 0 ? (
              <div className="space-y-4">
                {accountHistory.map((log, index) => {
                  const style = getStatusStyle(log.agentResponse.status);
                  return (
                    <div key={index} className={`p-4 rounded-lg ${style.bg} ${style.border}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {style.icon}
                          <span className={style.text}>
                            {log.agentResponse.status.charAt(0).toUpperCase() + log.agentResponse.status.slice(1)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(log.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-sm">
                        <p><strong>Bank:</strong> {log.accountData.bankName}</p>
                        <p><strong>Type:</strong> {log.accountData.accountType.charAt(0).toUpperCase() + log.accountData.accountType.slice(1)}</p>
                        <p><strong>Account:</strong> ****{log.accountData.accountNumber.slice(-4)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>No Verification History</AlertTitle>
                <AlertDescription>
                  Your account verification history will appear here.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 