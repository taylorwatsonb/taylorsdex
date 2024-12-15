import React from 'react';
import { recentTrades } from '../data/mockData';
import { TradeItem } from './trades/TradeItem';

export default function RecentTrades() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Recent Trades</h2>
      <div className="space-y-4">
        {recentTrades.map((trade, index) => (
          <TradeItem key={index} trade={trade} />
        ))}
      </div>
    </div>
  );
}