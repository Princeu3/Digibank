import { NextResponse } from 'next/server';
import { analyzeTransfer, TransferDetails, AgentResponse, logAgentActivity } from '@/lib/ai-agent';
import { unstable_noStore as noStore } from 'next/cache';
import { getServerEnv } from '@/lib/env';

export async function POST(request: Request) {
  // Ensure environment variables are accessed at runtime
  noStore();
  
  try {
    // Check API key availability
    const { GROQ_API_KEY } = await getServerEnv();
    if (!GROQ_API_KEY) {
      console.error("GROQ_API_KEY not found in environment variables");
      return NextResponse.json(
        { 
          error: 'AI service is currently unavailable.',
          details: 'GROQ API key is missing. Please check your environment configuration.'
        },
        { status: 503 }
      );
    }
    
    // Extract transfer data from request
    const transferData: TransferDetails = await request.json();
    
    // Validate required fields
    if (!transferData.userId) {
      return NextResponse.json(
        { error: 'User ID is required.' },
        { status: 400 }
      );
    }
    
    if (!transferData.fromAccount || !transferData.toAccount) {
      return NextResponse.json(
        { error: 'Both source and destination accounts are required.' },
        { status: 400 }
      );
    }
    
    if (!transferData.amount) {
      return NextResponse.json(
        { error: 'Transfer amount is required.' },
        { status: 400 }
      );
    }
    
    // Analyze the transfer with the AI agent
    const analysisResult: AgentResponse = await analyzeTransfer(transferData);
    
    // Log the server-side activity
    await logAgentActivity(transferData.userId, transferData, analysisResult);
    
    // Return the analysis result
    return NextResponse.json(analysisResult);
  } catch (error) {
    console.error('Error in AI agent API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process transfer with AI agent.',
        details: error.message || 'An unexpected error occurred'
      },
      { status: 500 }
    );
  }
} 