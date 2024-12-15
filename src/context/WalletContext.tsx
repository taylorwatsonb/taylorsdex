import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  error: string | null;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      setError(null);
      // In production, this would use actual Web3 wallet integration
      setIsConnected(true);
      setAddress('0x1234567890123456789012345678901234567890');
    } catch (err) {
      setError('Failed to connect wallet');
      console.error('Wallet connection error:', err);
    }
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    setAddress(null);
    setError(null);
  }, []);

  return (
    <WalletContext.Provider value={{ isConnected, address, connect, disconnect, error }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}