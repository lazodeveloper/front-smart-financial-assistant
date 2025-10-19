export interface FinancialStrategyModel {
  customer: string;
  disposableCashFlow: number;
  creditScore: number;
  scenarios: Scenario[];
  recommendedStrategy: string;
}

export interface Scenario {
  scenarioName: string;
  scenarioDescription: string;
  totalDebtAmount: number | null;
  totalMinPayment: number | null;
  totalTermMonths: number | null;
  totalAverageRate: number | null;
  totalInterestPaid: number | null;
  totalExtraPayment: number | null;
  totalRecommendedPayment: number | null;
  totalEstimatedInterestSavings: number | null;
  totalPointreduction: number | null;
  totalIncreaseQuota: number | null;
  savingsVsBaseline: number | null;
  termSavingsVsBaseline: number | null;
  debtDetails: DebtDetail[] | null;
}

export interface DebtDetail {
  productId: string;
  productType: string;
  currentBalance: number | null;
  annualRatePct: number | null;
  minimumPayment: number | null;
  finalTermMonths: number | null;
  totalInterest: number | null;
  daysPastDue: number | null;
  paymentPriority: number | null;
  extraPaymentFromFCD: number | null;
  totalRecommendedPayment: number | null;
  estimatedLiquidationMonth: string | null;
  interestSavingsOnDebt: number | null;
  consolidatedAmount: number | null;
  newRatePct: number | null;
  newTermMonths: number | null;
  originalDebtsConsolidated: string | null;
  eligibilityConditionsMet: boolean | null;
}