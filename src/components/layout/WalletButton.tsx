import React from 'react';
import { useWallet } from '../../context/WalletContext';

export function WalletButton() {
  const { connect, disconnect, isConnected, address, error } = useWallet();

  return (
    <div className="relative">
      <button 
        onClick={isConnected ? disconnect : connect}
        className={`px-4 py-2 rounded-lg ${
          isConnected 
            ? 'bg-green-600 hover:bg-green-700' 
            : 'bg-blue-600 hover:bg-blue-700'
        } text-white transition-colors`}
      >
        {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : 'Connect Wallet'}
      </button>
      {error && (
        <div className="absolute top-full mt-2 right-0 bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm">
          {error}
        </div>
      )}
    </div>
  );
}