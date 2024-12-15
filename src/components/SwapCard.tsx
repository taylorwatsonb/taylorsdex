import React from 'react';
import { ArrowDownUp } from 'lucide-react';
import { tokens } from '../data/mockData';
import { TokenInput } from './swap/TokenInput';
import { SwapHeader } from './swap/SwapHeader';
import { useWallet } from '../context/WalletContext';
import { useTokenSwap } from '../hooks/useTokenSwap';

export default function SwapCard() {
  const { isConnected, connect } = useWallet();
  const {
    token0,
    token1,
    amount0,
    amount1,
    slippageTolerance,
    handleAmount0Change,
    handleAmount1Change,
    handleFlipTokens,
    setSlippageTolerance,
  } = useTokenSwap(tokens[0], tokens[1]);

  const handleSwap = () => {
    if (!isConnected) return;
    console.log('Swap initiated', {
      token0, token1, amount0, amount1, slippageTolerance
    });
  };

  const handleButtonClick = () => {
    if (!isConnected) {
      connect();
    } else {
      handleSwap();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-md">
      <SwapHeader 
        slippageTolerance={slippageTolerance}
        onSlippageChange={setSlippageTolerance}
      />

      <div className="space-y-4">
        <TokenInput
          token={token0}
          amount={amount0}
          onChange={handleAmount0Change}
          label="From"
          onSelectToken={() => {}}
        />

        <button 
          onClick={handleFlipTokens}
          className="mx-auto block p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <ArrowDownUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <TokenInput
          token={token1}
          amount={amount1}
          onChange={handleAmount1Change}
          label="To"
          onSelectToken={() => {}}
        />
      </div>

      <button
        onClick={handleButtonClick}
        disabled={isConnected && (!amount0 || !amount1)}
        className={`w-full ${
          (!isConnected || (amount0 && amount1))
            ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
            : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
        } text-white font-semibold py-4 px-6 rounded-xl mt-6 transition-colors`}
      >
        {!isConnected 
          ? 'Connect Wallet to Swap'
          : !amount0 || !amount1
          ? 'Enter an amount'
          : 'Swap'}
      </button>
    </div>
  );
}