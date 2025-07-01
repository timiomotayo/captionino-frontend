export function formatCurrency(amount) {
    return `${new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // Adjust to show decimals if needed
    }).format(amount)}`;
  }
  