import React from 'react';
import { SwapSettings } from './SwapSettings';

interface SwapHeaderProps {
  slippageTolerance: number;
  onSlippageChange: (value: number) => void;
}

export function SwapHeader({ slippageTolerance, onSlippageChange }: SwapHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Swap</h2>
      <SwapSettings 
        slippageTolerance={slippageTolerance} 
        onSlippageChange={onSlippageChange} 
      />
    </div>
  );
}