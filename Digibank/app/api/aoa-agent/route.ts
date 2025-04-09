import { NextResponse } from 'next/server';
import { verifyAccount, AccountDetails, AOAResponse, logAOAActivity } from '@/lib/aoa-agent';
import { unstable_noStore as noStore } from 'next/cache';

export async function POST(request: Request) {
  // Ensure environment variables are accessed at runtime
  noStore();
  
  try {
    // Extract account data from request
    const accountData: AccountDetails = await request.json();
    
    // Make sure the required properties are present
    if (!accountData.userId || !accountData.bankName || !accountData.accountNumber || !accountData.routingNumber) {
      return NextResponse.json(
        { error: 'Invalid account data. Missing required fields.' },
        { status: 400 }
      );
    }
    
    // Verify the account with the AOA agent
    const verificationResult: AOAResponse = await verifyAccount(accountData);
    
    // Log the server-side activity
    await logAOAActivity(accountData.userId, accountData, verificationResult);
    
    // Return the verification result
    return NextResponse.json(verificationResult);
  } catch (error) {
    console.error('Error in AOA agent API:', error);
    return NextResponse.json(
      { error: 'Failed to process account verification.' },
      { status: 500 }
    );
  }
} 