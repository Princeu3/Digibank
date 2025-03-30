"use server";

import Groq from 'groq-sdk';
import { unstable_noStore as noStore } from 'next/cache';
import { getServerEnv } from './env';

// Ensure environment variables are accessed at runtime, not build time
noStore();

// Initialize the Groq client with environment variables
let groq: Groq;

// Function to initialize the Groq client
async function initGroqClient() {
  // Get API key from environment using our utility
  const { GROQ_API_KEY } = await getServerEnv();

  if (!GROQ_API_KEY) {
    console.error("GROQ_API_KEY is missing in environment variables");
  }

  // Log the API key state (for debugging only - remove in production)
  console.log("API Key Available:", !!GROQ_API_KEY);

  // Initialize the Groq client
  return new Groq({
    apiKey: GROQ_API_KEY || '' // API key must be provided via environment variables
  });
}

// System prompt for the financial AI agent
const SYSTEM_PROMPT = `You are a financial AI agent that analyzes bank transfers and takes appropriate actions.
Your job is to:
1. Verify the transfer details for potential fraud or unusual activity
2. Assess if this transfer matches the user's typical behavior
3. Check for any red flags based on the transfer details
4. Recommend next steps if any issues are detected

Respond in JSON format with the following structure:
{
  "risk_assessment": "low" | "medium" | "high",
  "reasoning": "Brief explanation of your assessment",
  "flags": ["List of any red flags detected"],
  "recommendation": "Recommended action",
  "next_steps": ["List of suggested next steps"]
}

Keep your reasoning concise and focused on financial safety and security.`;

export interface TransferDetails {
  userId: string;
  fromAccount: {
    id: number;
    name: string;
    accountType: string;
    accountNumber: string;
  };
  toAccount: {
    id: number;
    name: string;
    accountType: string;
    accountNumber: string;
  };
  amount: string;
  memo: string;
}

export interface AgentResponse {
  risk_assessment: 'low' | 'medium' | 'high';
  reasoning: string;
  flags: string[];
  recommendation: string;
  next_steps: string[];
}

/**
 * Analyzes a bank transfer for potential risks and provides recommendations
 */
export async function analyzeTransfer(transferData: TransferDetails): Promise<AgentResponse> {
  try {
    // Initialize the Groq client if not already initialized
    if (!groq) {
      groq = await initGroqClient();
    }
    
    // Convert the transfer details into a message format for the AI
    const userMessage = `Please analyze this bank transfer:
    
From Account: ${transferData.fromAccount.name} (${transferData.fromAccount.accountType})
Account Number: ${transferData.fromAccount.accountNumber}
To Account: ${transferData.toAccount.name} (${transferData.toAccount.accountType})
Account Number: ${transferData.toAccount.accountNumber}
Amount: $${transferData.amount}
Memo: ${transferData.memo || "No memo provided"}
`;

    // Make the API call to Groq
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage }
      ],
      model: "llama3-8b-8192", // Using LLAMA 3 8B model
      temperature: 0.5,
      max_tokens: 800,
      response_format: { type: "json_object" }
    });

    // Parse the response
    const responseContent = completion.choices[0]?.message?.content || '';
    const parsedResponse = JSON.parse(responseContent) as AgentResponse;
    
    return parsedResponse;
  } catch (error) {
    console.error('Error analyzing transfer with AI agent:', error);
    // Return a fallback response in case of error
    return {
      risk_assessment: 'low',
      reasoning: 'Unable to complete analysis due to service error.',
      flags: [],
      recommendation: 'Proceed with caution.',
      next_steps: ['Review transaction details manually.']
    };
  }
}

/**
 * Logs AI agent activity for auditing purposes
 */
export async function logAgentActivity(userId: string, transferData: TransferDetails, agentResponse: AgentResponse) {
  // In a real app, this would log to a database or monitoring service
  console.log(`[AI Agent] User ${userId} transfer analysis:`, {
    timestamp: new Date().toISOString(),
    transferData,
    agentResponse
  });
  
  // For demo purposes, store in localStorage (only available in browser)
  if (typeof window !== 'undefined') {
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
  }
} 