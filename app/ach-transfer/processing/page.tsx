"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SequentialProcessingVisualizer from "@/components/SequentialProcessingVisualizer";
import { AgentResponse } from "@/lib/ai-agent";

export default function TransferProcessingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [aiAnalysis, setAiAnalysis] = useState<AgentResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Extract transfer details from URL parameters
  const fromAccount = searchParams.get("fromAccount") || "";
  const toAccount = searchParams.get("toAccount") || "";
  const amount = searchParams.get("amount") || "";
  const transferId = searchParams.get("transferId") || "";

  // Fetch AI analysis result
  useEffect(() => {
    if (!fromAccount || !toAccount || !amount) {
      setError("Missing transfer information");
      setIsLoading(false);
      return;
    }

    const fetchAnalysis = async () => {
      try {
        // Simulate a delay to allow the visualization to show processing steps
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Fetch the actual analysis from the API
        const response = await fetch('/api/ai-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: 'user-123', // This would normally come from authentication
            fromAccount: {
              id: 1,
              name: fromAccount,
              accountType: 'Checking',
              accountNumber: '****1234'
            },
            toAccount: {
              id: 2,
              name: toAccount,
              accountType: 'Savings',
              accountNumber: '****5678'
            },
            amount: amount,
            memo: 'Transfer'
          })
        });
        
        if (!response.ok) {
          throw new Error("Failed to fetch analysis");
        }
        
        const data = await response.json();
        setAiAnalysis(data);
      } catch (err) {
        console.error("Error fetching analysis:", err);
        setError("Failed to load analysis results");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, [fromAccount, toAccount, amount]);

  return (
    <div className="flex flex-col items-center min-h-full py-8">
      <div className="w-full max-w-4xl p-4">
        <div className="flex items-center mb-8">
          <Link href="/ach-transfer" className="mr-4">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Transfer Processing</h1>
        </div>

        {error ? (
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
            <p>{error}</p>
            <Button 
              onClick={() => router.push('/ach-transfer')}
              variant="outline"
              className="mt-4 border-red-300 text-red-700 hover:bg-red-100"
            >
              Return to Transfers
            </Button>
          </div>
        ) : (
          <SequentialProcessingVisualizer
            aiAnalysis={aiAnalysis}
            transferDetails={{
              fromAccount,
              toAccount,
              amount
            }}
          />
        )}
      </div>
    </div>
  );
}
