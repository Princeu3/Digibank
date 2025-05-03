"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle, ArrowRightLeft } from "lucide-react";
import { AgentResponse } from "@/lib/crew-orchestrator";
import { useState, useEffect } from "react";

interface AgentStepsDisplayProps {
  /** Label for the orchestrating agent */
  agentTitle?: string;
  steps: AgentResponse[];
  /** Decision result: either success or approved */
  finalDecision?: { success?: boolean; approved?: boolean; rationale: string };
  isLoading: boolean;
  loadingMessage?: string;
  resultTitle?: string;
  onDone?: () => void;
}

export default function AgentStepsDisplay({
  agentTitle = "AOA Agent",
  steps,
  finalDecision,
  isLoading,
  loadingMessage = "Processing...",
  resultTitle = "Results",
  onDone,
}: AgentStepsDisplayProps) {
  // Gradually reveal steps with 1s delay
  const [visibleSteps, setVisibleSteps] = useState<AgentResponse[]>([]);
  useEffect(() => {
    setVisibleSteps([]);
    const timers: NodeJS.Timeout[] = [];
    steps.forEach((step, idx) => {
      const timer = setTimeout(() => {
        setVisibleSteps(prev => [...prev, step]);
      }, (idx + 1) * 1000);
      timers.push(timer);
    });
    return () => timers.forEach(clearTimeout);
  }, [steps]);

  if (isLoading) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft className="h-5 w-5 text-blue-600" />
            {agentTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
          <p className="text-gray-600">{loadingMessage}</p>
        </CardContent>
      </Card>
    );
  }

  // Show agent steps and final decision inline
  if (!isLoading && steps.length > 0) {
    const completedCount = visibleSteps.length;
    const hasPending = completedCount < steps.length;
    const decisionSuccess = finalDecision ? (finalDecision.success ?? finalDecision.approved ?? false) : false;
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft className="h-5 w-5 text-gray-700" />
            {agentTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {/* Completed steps */}
          {visibleSteps.map(step => (
            <div key={step.agentName}>
              <div className="flex items-center gap-2">
                {step.success ? <CheckCircle className="text-green-600 h-5 w-5" /> : <AlertCircle className="text-red-600 h-5 w-5" />}
                <p><strong>{step.agentName}:</strong> {step.details}</p>
              </div>
              {/* Render subSteps if present */}
              {step.data?.subSteps && (
                <div className="ml-8 mt-1">
                  {step.data.subSteps.map((sub: any) => (
                    <div key={sub.agentName} className="flex items-center gap-2 text-gray-600 text-sm">
                      {sub.success ? <CheckCircle className="text-green-400 h-4 w-4" /> : <AlertCircle className="text-red-400 h-4 w-4" />}
                      <span><strong>{sub.agentName}:</strong> {sub.details}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Processing or Decision */}
          {hasPending ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
              <p><strong>Processing {steps[completedCount].agentName}...</strong></p>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-2">
              {decisionSuccess ? (
                <CheckCircle className="text-green-600 h-6 w-6 animate-pulse" />
              ) : (
                <AlertCircle className="text-red-600 h-6 w-6 animate-pulse" />
              )}
              <p className="font-semibold"><strong>Decision:</strong> {finalDecision?.rationale}</p>
            </div>
          )}
          {finalDecision && onDone && <Button className="mt-4" onClick={onDone}>Done</Button>}
        </CardContent>
      </Card>
    );
  }

  return null;
}
