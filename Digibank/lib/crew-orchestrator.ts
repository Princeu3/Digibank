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

async function manualVerificationAgent(data: any): Promise<AgentResponse> {
  await delay(200);
  // Simulate manual verification outcome
  const verified = Math.random() < 0.5;
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

  // 1. Risk analysis
  const riskStep = await riskAnalysisAgent(transferData);
  onStep?.(riskStep);
  steps.push(riskStep);

  let finalApproved = riskStep.success;
  let rationale = '';

  if (!riskStep.success) {
    // 2. Manual verification if risk high
    const manualStep = await manualVerificationAgent(riskStep.data);
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
