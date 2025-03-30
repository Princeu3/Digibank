import { useState } from 'react';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AgentResponse } from '@/lib/ai-agent';

interface AIAgentFeedbackProps {
  feedback: AgentResponse | null;
  isLoading: boolean;
  onClose: () => void;
}

export default function AIAgentFeedback({ feedback, isLoading, onClose }: AIAgentFeedbackProps) {
  if (isLoading) {
    return (
      <Card className="w-full mb-4 border-blue-200 bg-blue-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-blue-800 flex items-center">
            <Info className="mr-2 h-5 w-5 text-blue-600" />
            AI Analysis in Progress
          </CardTitle>
          <CardDescription className="text-blue-700">
            Our AI agent is analyzing your transfer...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-4">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!feedback) return null;

  // Determine card styling based on risk level
  const getCardStyle = () => {
    switch (feedback.risk_assessment) {
      case 'high':
        return {
          border: 'border-red-200',
          bg: 'bg-red-50',
          title: 'text-red-800',
          icon: <AlertTriangle className="mr-2 h-5 w-5 text-red-600" />,
          titleText: 'High Risk Detected'
        };
      case 'medium':
        return {
          border: 'border-amber-200',
          bg: 'bg-amber-50',
          title: 'text-amber-800',
          icon: <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />,
          titleText: 'Medium Risk Detected'
        };
      default:
        return {
          border: 'border-green-200',
          bg: 'bg-green-50',
          title: 'text-green-800',
          icon: <CheckCircle className="mr-2 h-5 w-5 text-green-600" />,
          titleText: 'Transfer Looks Good'
        };
    }
  };

  const style = getCardStyle();

  return (
    <Card className={`w-full mb-4 ${style.border} ${style.bg}`}>
      <CardHeader className="pb-2">
        <CardTitle className={`${style.title} flex items-center`}>
          {style.icon}
          {style.titleText}
        </CardTitle>
        <CardDescription className={style.title}>
          {feedback.recommendation}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">{feedback.reasoning}</p>
          
          {feedback.flags.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium">Potential Concerns:</p>
              <ul className="list-disc list-inside text-sm pl-2">
                {feedback.flags.map((flag, index) => (
                  <li key={index}>{flag}</li>
                ))}
              </ul>
            </div>
          )}
          
          {feedback.next_steps.length > 0 && (
            <div className="mt-2">
              <p className="text-sm font-medium">Recommended Actions:</p>
              <ul className="list-disc list-inside text-sm pl-2">
                {feedback.next_steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-3 flex justify-end">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClose}
              className={`${style.title} border-${style.title.split('-')[1]}-300`}
            >
              Dismiss
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 