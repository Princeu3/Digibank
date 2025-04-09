import { NextResponse } from 'next/server';
import { AgentResponse } from '@/lib/ai-agent';
import { unstable_noStore as noStore } from 'next/cache';

// This would typically come from a database, but for demo purposes we'll simulate it
const mockAnalysisResults: Record<string, AgentResponse> = {
  // You can add more mock results with different IDs as needed
  'default': {
    risk_assessment: 'low',
    reasoning: 'This transfer appears to be a routine transaction between known accounts with no unusual patterns.',
    flags: [],
    recommendation: 'Transfer can proceed normally.',
    next_steps: ['Complete the transfer as requested.']
  },
  'medium-risk': {
    risk_assessment: 'medium',
    reasoning: 'This transfer is to a new recipient and is larger than typical transactions for this account.',
    flags: ['New recipient account', 'Amount exceeds typical transaction size'],
    recommendation: 'Proceed with caution and verify recipient details.',
    next_steps: ['Verify recipient identity', 'Confirm transaction details with account holder']
  },
  'high-risk': {
    risk_assessment: 'high',
    reasoning: 'This transfer shows multiple high-risk indicators including unusual timing, amount, and destination.',
    flags: ['Unusual transaction time', 'Amount significantly exceeds typical patterns', 'International transfer to high-risk region'],
    recommendation: 'Additional verification required before proceeding.',
    next_steps: ['Contact account holder to confirm transaction', 'Apply enhanced due diligence', 'Consider delaying transfer pending verification']
  }
};

export async function GET(request: Request) {
  // Ensure this isn't cached
  noStore();
  
  // Get the URL and extract the transferId parameter
  const { searchParams } = new URL(request.url);
  const transferId = searchParams.get('transferId');
  
  try {
    // In a real application, you would fetch the analysis result from a database
    // For demo purposes, we'll return a mock result based on the transferId
    
    // Add a small delay to simulate database lookup
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Get the result based on transferId or use default
    let result: AgentResponse;
    
    if (transferId && mockAnalysisResults[transferId]) {
      result = mockAnalysisResults[transferId];
    } else {
      // Randomly select a risk level for demo purposes if no specific ID is provided
      const riskLevels = ['default', 'medium-risk', 'high-risk'];
      const randomIndex = Math.floor(Math.random() * riskLevels.length);
      result = mockAnalysisResults[riskLevels[randomIndex]];
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching AI analysis result:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve analysis result.' },
      { status: 500 }
    );
  }
}
