"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft, Brain, AlertTriangle, CheckCircle, Info, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { AgentResponse } from "@/lib/ai-agent";
import { useAgentLogging } from "@/lib/ai-agent-client";

export default function AIAgentPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const { logAgentActivity } = useAgentLogging(user?.id || '');
  
  const [isLoading, setIsLoading] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<AgentResponse | null>(null);
  const [transferHistory, setTransferHistory] = useState<any[]>([]);
  const [currentTransfer, setCurrentTransfer] = useState<any>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Load transfer history and check for pending transfer
  useEffect(() => {
    if (!user?.id) return;
    
    const loadData = async () => {
      try {
        // Load transfer history
        const storedLogs = localStorage.getItem(`agent-logs-${user.id}`);
        if (storedLogs) {
          setTransferHistory(JSON.parse(storedLogs));
        }

        // Check for pending transfer in sessionStorage
        const pendingTransfer = sessionStorage.getItem('pending-transfer');
        if (pendingTransfer) {
          const transferData = JSON.parse(pendingTransfer);
          setCurrentTransfer(transferData);
          sessionStorage.removeItem('pending-transfer'); // Clear the pending transfer
          await analyzeTransfer(transferData); // Start analysis immediately
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsInitialLoad(false);
      }
    };

    loadData();
  }, [user?.id]);

  // Function to analyze a transfer with AI
  const analyzeTransfer = async (transferData: any) => {
    setIsLoading(true);
    
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
      
      // Log the AI agent activity
      logAgentActivity(transferData, analysisResult);
      
      // Update transfer history
      setTransferHistory(prev => [{
        timestamp: new Date().toISOString(),
        transferData,
        agentResponse: analysisResult
      }, ...prev]);
      
      // Show toast for high risk transfers
      if (analysisResult.risk_assessment === 'high') {
        toast({
          title: "High Risk Transfer Detected",
          description: analysisResult.recommendation,
          variant: "destructive"
        });
      }
      
    } catch (error) {
      console.error("AI agent analysis failed:", error);
      toast({
        title: "AI analysis failed",
        description: "We couldn't analyze this transfer. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Get risk level styling
  const getRiskStyle = (risk: 'low' | 'medium' | 'high') => {
    switch (risk) {
      case 'high':
        return {
          border: 'border-red-200',
          bg: 'bg-red-50',
          text: 'text-red-800',
          icon: <AlertTriangle className="h-5 w-5" />
        };
      case 'medium':
        return {
          border: 'border-amber-200',
          bg: 'bg-amber-50',
          text: 'text-amber-800',
          icon: <AlertTriangle className="h-5 w-5" />
        };
      default:
        return {
          border: 'border-green-200',
          bg: 'bg-green-50',
          text: 'text-green-800',
          icon: <CheckCircle className="h-5 w-5" />
        };
    }
  };

  // Show loading state during initial load
  if (isInitialLoad) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-600">Loading AI Agent Interface...</p>
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
          <h1 className="text-3xl font-bold">AI Agent Interface</h1>
        </div>

        {/* Current Transfer Analysis Section */}
        {currentTransfer && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Current Transfer Analysis
              </CardTitle>
              <CardDescription>
                Analyzing your recent transfer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Transfer Details:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">From:</span>
                    <p className="font-medium">{currentTransfer.fromAccount.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">To:</span>
                    <p className="font-medium">{currentTransfer.toAccount.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Amount:</span>
                    <p className="font-medium">${currentTransfer.amount}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Memo:</span>
                    <p className="font-medium">{currentTransfer.memo}</p>
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
                  <p className="text-gray-600">Analyzing transfer for potential risks...</p>
                </div>
              ) : aiAnalysis ? (
                <div className={`p-4 rounded-lg ${getRiskStyle(aiAnalysis.risk_assessment).bg} ${getRiskStyle(aiAnalysis.risk_assessment).border}`}>
                  <div className="flex items-center gap-2 mb-4">
                    {getRiskStyle(aiAnalysis.risk_assessment).icon}
                    <h3 className={`text-lg font-semibold ${getRiskStyle(aiAnalysis.risk_assessment).text}`}>
                      {aiAnalysis.risk_assessment.charAt(0).toUpperCase() + aiAnalysis.risk_assessment.slice(1)} Risk Assessment
                    </h3>
                  </div>
                  <p className="mb-4">{aiAnalysis.reasoning}</p>
                  
                  {aiAnalysis.flags.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Potential Concerns:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {aiAnalysis.flags.map((flag, index) => (
                          <li key={index}>{flag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium mb-2">Recommended Actions:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {aiAnalysis.next_steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        )}

        {/* Transfer History Section */}
        <Card>
          <CardHeader>
            <CardTitle>Transfer History</CardTitle>
            <CardDescription>
              View past transfers and their AI analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            {transferHistory.length > 0 ? (
              <div className="space-y-4">
                {transferHistory.map((log, index) => {
                  const style = getRiskStyle(log.agentResponse.risk_assessment);
                  return (
                    <div key={index} className={`p-4 rounded-lg ${style.bg} ${style.border}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {style.icon}
                          <span className={style.text}>
                            {log.agentResponse.risk_assessment.charAt(0).toUpperCase() + log.agentResponse.risk_assessment.slice(1)} Risk
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(log.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-sm">
                        <p><strong>From:</strong> {log.transferData.fromAccount.name}</p>
                        <p><strong>To:</strong> {log.transferData.toAccount.name}</p>
                        <p><strong>Amount:</strong> ${log.transferData.amount}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>No Transfer History</AlertTitle>
                <AlertDescription>
                  Your transfer history will appear here after making transfers.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 