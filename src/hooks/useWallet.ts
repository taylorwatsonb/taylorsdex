import { useState, useCallback } from 'react';

export function useWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');

  const connect = useCallback(async () => {
    // In production, this would use actual Web3 wallet integration
    setIsConnected(true);
    setAddress('0x1234567890123456789012345678901234567890');
  }, []);

  return {
    isConnected,
    address,
    connect
  };
}