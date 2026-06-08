export const SOLUTIONS = {
  "Payment Hub": [
    "SWIFT Payments",
    "ACH",
    "Remittance",
    "Cross-border payment",
  ],
  "Retail/ Consumer Loan Origination(RLOS)": [
    "Pre-approved Offers",
    "Instant Credit Eligibility",
    "Personalized Loan Offers",
    "Instant Personal Loans",
  ],
  "Commercial Loan Origination(CLOS)": [
    "Corporate Credit Structuring",
    "Group Exposure Limits",
    "Financial Covenant Tracking",
    "Syndicated Loan Processing",
  ],
  "Trade Finance": [
    "Bills for Collection",
    "Bank Guarantees",
    "Letters of Credit",
    "LC issuance",
  ],
};

export const SOLUTION_ORDER = [
  "Payment Hub",
  "Retail/ Consumer Loan Origination(RLOS)",
  "Commercial Loan Origination(CLOS)",
  "Trade Finance",
];

export const SOLUTION_URLS = {
  "Payment Hub": "https://newgensoft.com/solutions/industries/financial-institutions/transaction-banking/payment-hub/",
  "Retail/ Consumer Loan Origination(RLOS)": "https://newgensoft.com/solutions/industries/financial-institutions/retail-banking/consumer-retail-lending/",
  "Commercial Loan Origination(CLOS)": "https://newgensoft.com/solutions/industries/financial-institutions/commercial-banking/commercial-lending/",
  "Trade Finance": "https://newgensoft.com/solutions/industries/financial-institutions/transaction-banking/trade-finance/",
};


export const derangedShuffle = (arr) => {
  const original = [...arr];
  let shuffled = [];
  let isValid = false;

  while (!isValid) {
    shuffled = [...original];

    // Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Ensure no row is already correct
    isValid = true;

    for (let row = 0; row < 4; row++) {
      const rowItems = shuffled.slice(row * 4, row * 4 + 4);
      const solutionName = SOLUTION_ORDER[row];
      const correctItems = SOLUTIONS[solutionName];

      const rowIsCorrect = correctItems.every(item =>
        rowItems.includes(item)
      );

      if (rowIsCorrect) {
        isValid = false;
        break;
      }
    }
  }

  return shuffled;
};


export const derangedShuffle2 = {
  "Payment Hub": [
    "Financial Covenant Tracking",
    "Syndicated Loan Processing", 
    "Instant Credit Eligibility",
    "Bank Guarantees",
  ],
  "Retail/ Consumer Loan Origination(RLOS)": [
    "ACH",
    "Corporate Credit Structuring",
    "Letters of Credit",
    "Bills for Collection",
],
  "Commercial Loan Origination(CLOS)": [
    "Pre-approved Offers",
    "SWIFT Payments",
    "Cross-border payment",
    "LC issuance",
  ],
  "Trade Finance": [
    "Remittance",
    "Group Exposure Limits",
    "Instant Personal Loans",
    "Personalized Loan Offers",
  ],
};

