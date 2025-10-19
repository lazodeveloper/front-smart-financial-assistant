export interface Loan {
  loanId: number;
  productType: string;
  principal: number;
  annualRatePct: number;
  remainingTermMonths: number;
  collateral: boolean;
  daysPastDue: number;
}

export interface Card {
  loanId: number;
  balance: number;
  annualRatePct: number;
  minPaymentPct: number;
  paymentDueDay: number;
  daysPastDue: number;
}

export interface CustomerCashflow {
  cashflowId: number;
  monthlyIncomeAvg: number;
  incomeVariabilityPct: number;
  essentialExpensesAvg: number;
}

export interface CustomerDataModel {
  customerId: number;
  fullName: string;
  loans: Loan[];
  cards: Card[];
  customerCashflow: CustomerCashflow[];
}