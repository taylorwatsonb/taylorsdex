import React from 'react';
import { Trade } from '../../types';
import { formatTime } from '../../utils/format';

interface TradeItemProps {
  trade: Trade;
}

export function TradeItem({ trade }: TradeItemProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
      <div>
        <div className="text-sm text-gray-500">
          {formatTime(trade.timestamp)}
        </div>
        <div className="font-medium">
          {trade.token0Amount} {trade.token0Symbol} ⟷ {trade.token1Amount} {trade.token1Symbol}
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-medium text-blue-600">{trade.type}</div>
        <div className="text-sm text-gray-500">{trade.account}</div>
      </div>
    </div>
  );
}