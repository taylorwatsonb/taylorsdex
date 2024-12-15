export function formatBalance(balance?: string, decimals: number = 18): string {
  if (!balance) return '0';
  const value = parseFloat(balance);
  return value.toLocaleString(undefined, { 
    minimumFractionDigits: 0,
    maximumFractionDigits: 4
  });
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString();
}