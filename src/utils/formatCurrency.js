export function formatCurrency(amount) {
    return `₦${new Intl.NumberFormat("en-US", {
      // style: "currency",
      // currency: "NGN",
      minimumFractionDigits: 0, // Adjust to show decimals if needed
    }).format(amount)}`;
  }
  