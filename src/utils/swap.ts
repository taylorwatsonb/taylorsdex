import { Token } from '../types';

export function calculateSwapAmount(
  inputAmount: string,
  inputToken: Token,
  outputToken: Token
): string {
  // Mock price calculation - in production this would use actual pool data
  const mockPrice = inputToken.symbol === 'ETH' ? 2000 : 1/2000;
  if (!inputAmount) return '';
  
  const amount = parseFloat(inputAmount);
  if (isNaN(amount)) return '';
  
  return (amount * mockPrice).toFixed(outputToken.decimals);
}