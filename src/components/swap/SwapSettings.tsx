import React from 'react';
import { Settings } from 'lucide-react';

interface SwapSettingsProps {
  slippageTolerance: number;
  onSlippageChange: (value: number) => void;
}

export function SwapSettings({ slippageTolerance, onSlippageChange }: SwapSettingsProps) {
  return (
    <div className="relative group">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <Settings className="w-5 h-5 text-gray-600" />
      </button>
      <div className="hidden group-hover:block absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl p-4 z-10">
        <h3 className="text-sm font-semibold mb-2">Slippage Tolerance</h3>
        <div className="flex gap-2">
          {[0.1, 0.5, 1.0].map((value) => (
            <button
              key={value}
              onClick={() => onSlippageChange(value)}
              className={`px-3 py-1 rounded ${
                slippageTolerance === value
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {value}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}