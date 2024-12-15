import React from 'react';
import { WalletButton } from './WalletButton';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">DEX</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  );
}