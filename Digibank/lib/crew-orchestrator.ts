// Generic agent response
export interface AgentResponse {
  agentName: string;
  success: boolean;
  details: string;
  data?: any;
}

// Response for linking accounts workflow
export interface LinkAccountsResponse {
  steps: AgentResponse[];
  finalDecision: {
    success: boolean;
    rationale: string;
  };
}

// Response for transfer workflow
export interface TransferAgentResponse {
  steps: AgentResponse[];
  finalDecision: {
    approved: boolean;
    rationale: string;
  };
}

// TransferDetails moved from ai-agent.ts; inline here
interface TransferDetails {
  userId: string;
  fromAccount: { id: number; name: string; accountType: string; accountNumber: string };
  toAccount:   { id: number; name: string; accountType: string; accountNumber: string };
  amount: string;
  memo: string;
}

// Utility delay
function delay(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}

// Mock agents for linking accounts
async function fenicityAgent(userId: string): Promise<AgentResponse> {
  await delay(200);
  return { agentName: 'Fenicity', success: true, details: 'Fenicity mock check passed' };
}

async function ewsAgent(userId: string): Promise<AgentResponse> {
  await delay(200);
  return { agentName: 'EWS', success: true, details: 'EWS mock check passed' };
}

async function trialDepositAgent(userId: string): Promise<AgentResponse> {
  await delay(200);
  return { agentName: 'TrialDeposit', success: true, details: 'Trial deposit mock check passed' };
}

// Main linking accounts orchestrator
export async function linkAccountsAgent(userId: string, onStep?: (step: AgentResponse) => void): Promise<LinkAccountsResponse> {
  const steps: AgentResponse[] = [];

  // 1. Fenicity check
  const fenStep = await fenicityAgent(userId);
  onStep?.(fenStep);
  steps.push(fenStep);

  // 2. EWS check
  const ewsStep = await ewsAgent(userId);
  onStep?.(ewsStep);
  steps.push(ewsStep);

  // 3. Trial deposit check
  const trialStep = await trialDepositAgent(userId);
  onStep?.(trialStep);
  steps.push(trialStep);

  // Final decision
  const success = steps.every(step => step.success);
  const rationale = success
    ? 'All checks passed, accounts can be linked.'
    : 'One or more checks failed, please review.';

  return { steps, finalDecision: { success, rationale } };
}

// Mock agents for transfer workflow
async function riskAnalysisAgent(data: TransferDetails): Promise<AgentResponse> {
  await delay(200);
  // Simulate risk levels
  const risk = Math.random() < 0.8 ? 'low' : 'high';
  const details = `Risk analysis mock: ${risk}`;
  return { agentName: 'RiskAnalysis', success: risk === 'low', details, data: { risk } };
}

async function manualVerificationAgent(data: any, forceResult?: boolean): Promise<AgentResponse> {
  await delay(200);
  // If forceResult is specified, use it; otherwise randomize
  const verified = typeof forceResult === 'boolean' ? forceResult : Math.random() < 0.5;
  const details = verified
    ? 'Manual verification passed'
    : 'Manual verification flagged issues';
  return { agentName: 'ManualVerification', success: verified, details, data: { verified } };
}

async function bankerReviewAgent(data: any): Promise<AgentResponse> {
  await delay(200);
  // Simulate banker decision
  const approved = Math.random() < 0.7;
  const details = approved
    ? 'Banker review approved transfer'
    : 'Banker review denied transfer';
  return { agentName: 'BankerReview', success: approved, details, data: { approved } };
}

// Main transfer orchestrator with per-step callback
export async function transferAgent(
  transferData: TransferDetails,
  onStep?: (step: AgentResponse) => void
): Promise<TransferAgentResponse> {
  const steps: AgentResponse[] = [];

  // Helper to normalize bank names (remove spaces, lowercase)
  const normalize = (name: string) => name?.replace(/\s+/g, '').toLowerCase();

  // Special case: Chase to Wells Fargo manual verification override
  const isChaseToWellsFargo =
    normalize(transferData.fromAccount?.name) === 'chase' &&
    normalize(transferData.toAccount?.name) === 'wellsfargo';

  if (isChaseToWellsFargo) {
    // Always show all steps for demo/mock
    const amountNum = parseFloat(transferData.amount);
    let approved = false;
    let rationale = '';
    if (amountNum <= 500) {
      approved = true;
      rationale = 'All verification steps passed. Transaction approved.';
    } else if (amountNum > 1000) {
      approved = false;
      rationale = 'Verification steps flagged issues. Transaction requires review or was denied.';
    } else {
      // $500 < amount ≤ $1000 (default: approve, clarify if needed)
      approved = true;
      rationale = 'All verification steps passed. Transaction approved.';
    }

    // 1. Risk analysis
    const riskStep: AgentResponse = {
      agentName: 'RiskAnalysis',
      success: true,
      details: 'Risk analysis mock: low',
      data: { risk: 'low' }
    };
    onStep?.(riskStep);
    steps.push(riskStep);

    // 2. Manual verification with sub-steps
    let manualVerificationStep: AgentResponse;
    if (amountNum > 1000) {
      // For >$1000, user identity fails, others pass, manual verification fails
      manualVerificationStep = {
        agentName: 'ManualVerification',
        success: false,
        details: 'Manual verification failed',
        data: {
          verified: false,
          subSteps: [
            {
              agentName: 'VerifyUserIdentity',
              success: false,
              details: 'User identity verification failed'
            },
            {
              agentName: 'VerifyAccountNumber',
              success: true,
              details: 'Account number verified with system of record'
            },
            {
              agentName: 'ContactCustomer',
              success: false,
              details: 'Customer was not able to be contacted and failed'
            }
          ]
        }
      };
    } else {
      // For <=$1000, all sub-steps pass, manual verification passes
      manualVerificationStep = {
        agentName: 'ManualVerification',
        success: true,
        details: 'Manual verification passed',
        data: {
          verified: true,
          subSteps: [
            {
              agentName: 'VerifyUserIdentity',
              success: true,
              details: 'User identity verified against bank system of record'
            },
            {
              agentName: 'VerifyAccountNumber',
              success: true,
              details: 'Account number verified with system of record'
            },
            {
              agentName: 'ContactCustomer',
              success: true,
              details: 'Customer contacted and activity verified'
            }
          ]
        }
      };
    }
    onStep?.(manualVerificationStep);
    steps.push(manualVerificationStep);

    // 7. Banker review
    const bankerStep: AgentResponse = {
      agentName: 'BankerReview',
      success: amountNum > 1000 ? false : true,
      details: amountNum > 1000 ? 'Banker review denied transfer' : 'Banker review approved transfer',
      data: { approved: amountNum > 1000 ? false : true }
    };
    onStep?.(bankerStep);
    steps.push(bankerStep);

    // 8. Final approval
    const finalStep: AgentResponse = {
      agentName: 'FinalApproval',
      success: approved && amountNum <= 1000,
      details: (approved && amountNum <= 1000)
        ? 'All passed, approving the transaction.'
        : 'Issues found, transaction not approved.',
      data: {}
    };
    onStep?.(finalStep);
    steps.push(finalStep);

    return {
      steps,
      finalDecision: {
        approved: approved && amountNum <= 1000,
        rationale: (approved && amountNum <= 1000)
          ? 'All verification steps passed. Transaction approved.'
          : 'Verification steps flagged issues. Transaction requires review or was denied.'
      }
    };
  }

  // 1. Risk analysis
  const riskStep = await riskAnalysisAgent(transferData);
  onStep?.(riskStep);
  steps.push(riskStep);

  let finalApproved = riskStep.success;
  let rationale = '';

  if (!riskStep.success) {
    // 2. Manual verification if risk high
    // For non-Chase→WellsFargo, always pass manual verification (not random)
    const manualStep = await manualVerificationAgent(riskStep.data, true);
    onStep?.(manualStep);
    steps.push(manualStep);
    finalApproved = manualStep.success;

    // 3. Banker review sometimes (always if manual failed)
    const requireBankerReview = !manualStep.success || Math.random() < 0.5;
    if (requireBankerReview) {
      // 3a. Banker review step
      const bankerStep = await bankerReviewAgent(manualStep.data);
      onStep?.(bankerStep);
      steps.push(bankerStep);
      finalApproved = bankerStep.success;
    }
  }

  rationale = finalApproved
    ? 'Transfer approved by workflow.'
    : 'Transfer requires manual attention or was denied.';

  return { steps, finalDecision: { approved: finalApproved, rationale } };
}
