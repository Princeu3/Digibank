import { TransferDetails, AgentResponse } from './ai-agent';
import { useEffect, useState } from 'react';

/**
 * Client-side logging function for AI agent activity
 */
export function useAgentLogging(userId: string) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logAgentActivity = (transferData: TransferDetails, agentResponse: AgentResponse) => {
    if (!isClient) return;

    try {
      const agentLogs = JSON.parse(localStorage.getItem(`agent-logs-${userId}`) || '[]');
      agentLogs.push({
        timestamp: new Date().toISOString(),
        transferData,
        agentResponse
      });
      localStorage.setItem(`agent-logs-${userId}`, JSON.stringify(agentLogs));
    } catch (error) {
      console.error('Error storing agent logs in localStorage:', error);
    }
  };

  return { logAgentActivity };
} 