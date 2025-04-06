import { NextResponse } from 'next/server';
import { analyzeTransfer, TransferDetails, AgentResponse, logAgentActivity } from '@/lib/ai-agent';
import { unstable_noStore as noStore } from 'next/cache';
import { getServerEnv } from '@/lib/env';

export async function POST(request: Request) {
  // Ensure environment variables are accessed at runtime
  noStore();
  
  // Check API key availability - properly await the async function call
  const { GROQ_API_KEY } = await getServerEnv();
  if (!GROQ_API_KEY) {
    console.warn("GROQ_API_KEY not found in environment variables when handling request");
    return NextResponse.json(
      { error: 'AI service is currently unavailable.' },
      { status: 503 }
    );
  }
  
  try {
    // Extract transfer data from request
    const transferData: TransferDetails = await request.json();
    
    // Make sure the required properties are present
    if (!transferData.userId || !transferData.fromAccount || !transferData.toAccount || !transferData.amount) {
      return NextResponse.json(
        { error: 'Invalid transfer data. Missing required fields.' },
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
      { error: 'Failed to process transfer with AI agent.' },
      { status: 500 }
    );
  }
} 