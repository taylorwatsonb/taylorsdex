import React from 'react';
import { pools } from '../data/mockData';
import { PoolRow } from './pools/PoolRow';

export default function PoolsList() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6">Liquidity Pools</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-4">Pool</th>
              <th className="pb-4">TVL</th>
              <th className="pb-4">24h Volume</th>
              <th className="pb-4">APR</th>
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, index) => (
              <PoolRow key={index} pool={pool} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}