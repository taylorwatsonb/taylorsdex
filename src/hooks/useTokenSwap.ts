import { useState, useCallback } from 'react';
import { Token } from '../types';
import { calculateSwapAmount } from '../utils/swap';

export function useTokenSwap(initialToken0: Token, initialToken1: Token) {
  const [token0, setToken0] = useState<Token>(initialToken0);
  const [token1, setToken1] = useState<Token>(initialToken1);
  const [amount0, setAmount0] = useState('');
  const [amount1, setAmount1] = useState('');
  const [slippageTolerance, setSlippageTolerance] = useState(0.5);

  const handleAmount0Change = useCallback((value: string) => {
    setAmount0(value);
    setAmount1(calculateSwapAmount(value, token0, token1));
  }, [token0, token1]);

  const handleAmount1Change = useCallback((value: string) => {
    setAmount1(value);
    setAmount0(calculateSwapAmount(value, token1, token0));
  }, [token0, token1]);

  const handleFlipTokens = useCallback(() => {
    setToken0(token1);
    setToken1(token0);
    setAmount0(amount1);
    setAmount1(amount0);
  }, [token0, token1, amount0, amount1]);

  return {
    token0,
    token1,
    amount0,
    amount1,
    slippageTolerance,
    setToken0,
    setToken1,
    handleAmount0Change,
    handleAmount1Change,
    handleFlipTokens,
    setSlippageTolerance,
  };
}