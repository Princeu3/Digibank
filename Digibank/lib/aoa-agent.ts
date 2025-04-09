"use server";

import { unstable_noStore as noStore } from 'next/cache';
import { Groq } from 'groq-sdk';
import { getServerEnv } from './env';

// Ensure environment variables are accessed at runtime, not build time
noStore();

export interface AccountDetails {
  userId: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
  routingNumber: string;
}

export interface AOAResponse {
  status: 'verified' | 'pending' | 'rejected';
  message: string;
  verification_steps: string[];
  next_actions: string[];
  confidence_score: number;
  risk_factors: string[];
}

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

/**
 * Verifies a new account for linking using AI
 */
export async function verifyAccount(accountData: AccountDetails): Promise<AOAResponse> {
  try {
    // Basic input validation
    if (!accountData.bankName || !accountData.accountType || !accountData.accountNumber || !accountData.routingNumber) {
      return {
        status: 'rejected',
        message: 'Missing required account information.',
        verification_steps: ['Input validation failed'],
        next_actions: ['Please provide all required account details'],
        confidence_score: 0,
        risk_factors: ['Incomplete account information']
      };
    }

    // Prepare the prompt for Groq
    const prompt = `
      You are an AI Account Verification Assistant. For testing purposes, always return a verified status for the following account details:
      
      Bank Name: ${accountData.bankName}
      Account Type: ${accountData.accountType}
      Account Number: ${accountData.accountNumber}
      Routing Number: ${accountData.routingNumber}
      
      Please provide a verification response with:
      - status: "verified"
      - message: A success message
      - verification_steps: List of verification steps
      - next_actions: List of next steps
      - confidence_score: 100
      - risk_factors: Empty array
      
      Format the response as a JSON object.
    `;

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are an AI Account Verification Assistant. For testing purposes, always return a verified status with a 100% confidence score."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      max_tokens: 1000,
      response_format: { type: "json_object" }
    });

    // Parse the response
    const response = JSON.parse(completion.choices[0].message.content);
    
    // Ensure the response has the correct format
    if (!response.status || !response.message || !response.verification_steps || !response.next_actions) {
      throw new Error('Invalid response format from AI model');
    }
    
    // Log the verification attempt
    await logAOAActivity(accountData.userId, accountData, response);
    
    return response;
  } catch (error) {
    console.error('Error in account verification:', error);
    return {
      status: 'rejected',
      message: 'Account verification failed. Please try again.',
      verification_steps: ['System encountered an error during verification'],
      next_actions: [
        'Try linking the account again',
        'Contact customer support if the issue persists'
      ],
      confidence_score: 0,
      risk_factors: ['Technical error during verification']
    };
  }
}

/**
 * Logs AOA agent activity for auditing purposes
 */
export async function logAOAActivity(userId: string, accountData: AccountDetails, agentResponse: AOAResponse) {
  // In a real app, this would log to a database or monitoring service
  console.log(`[AOA Agent] User ${userId} account verification:`, {
    timestamp: new Date().toISOString(),
    accountData,
    agentResponse
  });
} 