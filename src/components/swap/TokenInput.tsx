import React from 'react';
import { Token } from '../../types';
import { formatBalance } from '../../utils/format';

interface TokenInputProps {
  token: Token;
  amount: string;
  onChange: (value: string) => void;
  label: string;
  onSelectToken: () => void;
}

export function TokenInput({ token, amount, onChange, label, onSelectToken }: TokenInputProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-sm text-gray-500">
          Balance: {formatBalance(token.balance, token.decimals)}
        </span>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent text-2xl outline-none w-full"
          placeholder="0.0"
        />
        <button 
          onClick={onSelectToken}
          className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-xl"
        >
          <img src={token.logoUrl} alt={token.symbol} className="w-6 h-6" />
          <span className="font-semibold">{token.symbol}</span>
        </button>
      </div>
    </div>
  );
}