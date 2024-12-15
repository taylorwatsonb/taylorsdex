export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  balance?: string;
  logoUrl: string;
}

export interface Pool {
  token0: Token;
  token1: Token;
  tvl: number;
  volume24h: number;
  apr: number;
}

export interface Trade {
  timestamp: number;
  type: 'swap' | 'addLiquidity' | 'removeLiquidity';
  token0Amount: string;
  token0Symbol: string;
  token1Amount: string;
  token1Symbol: string;
  account: string;
}