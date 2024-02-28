export function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("en-NG", {
    currency: "NGN",
  });

  // Format the amount and remove the currency symbol
  const formattedAmount = formatter.format(amount).replace(/NGN/, "").trim();

  return `${formattedAmount} NGN`;
}
