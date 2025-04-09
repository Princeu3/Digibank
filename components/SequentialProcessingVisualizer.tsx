"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AgentResponse } from '@/lib/ai-agent';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Info, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Define the processing steps based on the AI agent's workflow
const DEFAULT_PROCESSING_STEPS = [
  "Initializing secure transfer protocol...",
  "Verifying account details...",
  "Checking available balance...",
  "Analyzing transaction patterns...",
  "Evaluating transfer risk factors...",
  "Applying fraud detection algorithms...",
  "Finalizing risk assessment...",
];

interface SequentialProcessingVisualizerProps {
  aiAnalysis: AgentResponse | null;
  transferDetails: {
    fromAccount: string;
    toAccount: string;
    amount: string;
  };
  onComplete?: () => void;
}

export default function SequentialProcessingVisualizer({
  aiAnalysis,
  transferDetails,
  onComplete
}: SequentialProcessingVisualizerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [processingSteps, setProcessingSteps] = useState(DEFAULT_PROCESSING_STEPS);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  // Initialize step refs
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, processingSteps.length);
  }, [processingSteps]);

  // Advance through steps with timing
  useEffect(() => {
    if (currentStepIndex >= processingSteps.length) {
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    if (currentStepIndex === -1) {
      // Start the sequence after a short delay
      const timer = setTimeout(() => {
        setCurrentStepIndex(0);
      }, 800);
      return () => clearTimeout(timer);
    }

    // Scroll to the current step
    if (stepRefs.current[currentStepIndex]) {
      stepRefs.current[currentStepIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }

    // Move to next step after delay
    const timer = setTimeout(() => {
      setCompletedSteps(prev => [...prev, currentStepIndex]);
      setCurrentStepIndex(prev => prev + 1);
    }, 1500 + Math.random() * 500); // Randomize timing slightly for more natural feel

    return () => clearTimeout(timer);
  }, [currentStepIndex, processingSteps.length, onComplete]);

  // Get appropriate icon based on risk assessment
  const getResultIcon = () => {
    if (!aiAnalysis) return <Info className="h-8 w-8 text-blue-500" />;

    switch (aiAnalysis.risk_assessment) {
      case 'high':
        return <AlertTriangle className="h-8 w-8 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="h-8 w-8 text-amber-500" />;
      default:
        return <CheckCircle className="h-8 w-8 text-green-500" />;
    }
  };

  // Get appropriate color class based on risk assessment
  const getResultColorClass = () => {
    if (!aiAnalysis) return "text-blue-700 bg-blue-50 border-blue-200";

    switch (aiAnalysis.risk_assessment) {
      case 'high':
        return "text-red-700 bg-red-50 border-red-200";
      case 'medium':
        return "text-amber-700 bg-amber-50 border-amber-200";
      default:
        return "text-green-700 bg-green-50 border-green-200";
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="border-blue-100 bg-gradient-to-b from-white to-blue-50/30">
        <CardContent className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Processing Transfer
            </h2>
            <p className="text-sm text-gray-600">
              ${transferDetails.amount} from {transferDetails.fromAccount} to {transferDetails.toAccount}
            </p>
          </div>

          <div className="relative border border-blue-100 rounded-lg p-4 bg-white/80 min-h-[300px] mb-6">
            <div className="space-y-4">
              {processingSteps.map((step, index) => (
                <div
                  key={index}
                  ref={el => stepRefs.current[index] = el}
                  className={`transition-all duration-500 flex items-start gap-3 p-2 rounded-md ${
                    currentStepIndex === index
                      ? 'bg-blue-50 border-l-4 border-blue-400 animate-pulse-blue'
                      : completedSteps.includes(index)
                        ? 'ghost-text animate-fadeUpAndOut'
                        : 'opacity-0'
                  }`}
                >
                  {completedSteps.includes(index) ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : currentStepIndex === index ? (
                    <div className="h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin mt-0.5" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border border-gray-300 mt-0.5" />
                  )}
                  <div>
                    <p className={`text-sm font-medium ${
                      completedSteps.includes(index) ? 'text-gray-500' : 'text-gray-800'
                    }`}>
                      {step}
                    </p>
                  </div>
                </div>
              ))}

              {/* Final result */}
              {isComplete && (
                <div className={`mt-8 p-4 rounded-lg border ${getResultColorClass()} transition-all duration-500 animate-fadeIn`}>
                  <div className="flex items-center gap-3">
                    {getResultIcon()}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {aiAnalysis ? (
                          aiAnalysis.risk_assessment === 'low'
                            ? 'Transfer Approved'
                            : aiAnalysis.risk_assessment === 'medium'
                              ? 'Transfer Approved with Caution'
                              : 'Transfer Requires Review'
                        ) : 'Analysis Complete'}
                      </h3>
                      <p className="text-sm">
                        {aiAnalysis?.recommendation || 'Transfer has been processed.'}
                      </p>
                    </div>
                  </div>

                  {aiAnalysis?.reasoning && (
                    <p className="mt-3 text-sm">
                      {aiAnalysis.reasoning}
                    </p>
                  )}

                  {aiAnalysis?.flags && aiAnalysis.flags.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-medium">Potential concerns:</p>
                      <ul className="list-disc list-inside text-sm pl-2">
                        {aiAnalysis.flags.map((flag, index) => (
                          <li key={index}>{flag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {isComplete && (
            <div className="flex justify-end">
              <Button
                onClick={() => router.push('/dashboard')}
                className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
              >
                Return to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
