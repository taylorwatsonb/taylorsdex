import React from 'react';
import { Navbar } from './components/layout/Navbar';
import SwapCard from './components/SwapCard';
import PoolsList from './components/PoolsList';
import RecentTrades from './components/RecentTrades';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SwapCard />
          </div>
          <div className="space-y-8">
            <PoolsList />
            <RecentTrades />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;