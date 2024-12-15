import React from 'react';
import { Pool } from '../../types';
import { formatCurrency, formatPercentage } from '../../utils/format';

interface PoolRowProps {
  pool: Pool;
}

export function PoolRow({ pool }: PoolRowProps) {
  return (
    <tr className="border-t">
      <td className="py-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img src={pool.token0.logoUrl} alt={pool.token0.symbol} className="w-6 h-6" />
            <img src={pool.token1.logoUrl} alt={pool.token1.symbol} className="w-6 h-6" />
          </div>
          <span>{pool.token0.symbol}/{pool.token1.symbol}</span>
        </div>
      </td>
      <td className="py-4">{formatCurrency(pool.tvl)}</td>
      <td className="py-4">{formatCurrency(pool.volume24h)}</td>
      <td className="py-4 text-green-600">{formatPercentage(pool.apr)}</td>
    </tr>
  );
}