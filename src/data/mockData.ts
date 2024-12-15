import { Pool, Token, Trade } from '../types';

export const tokens: Token[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0x...',
    decimals: 18,
    balance: '1.5',
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0x...',
    decimals: 6,
    balance: '2500.00',
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/usdc.png'
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    address: '0x...',
    decimals: 8,
    balance: '0.05',
    logoUrl: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/wbtc.png'
  }
];

export const pools: Pool[] = [
  {
    token0: tokens[0],
    token1: tokens[1],
    tvl: 5000000,
    volume24h: 1200000,
    apr: 12.5
  },
  {
    token0: tokens[0],
    token1: tokens[2],
    tvl: 8000000,
    volume24h: 2500000,
    apr: 15.8
  }
];

export const recentTrades: Trade[] = [
  {
    timestamp: Date.now() - 1000 * 60 * 5,
    type: 'swap',
    token0Amount: '0.5',
    token0Symbol: 'ETH',
    token1Amount: '1000',
    token1Symbol: 'USDC',
    account: '0x1234...5678'
  },
  {
    timestamp: Date.now() - 1000 * 60 * 15,
    type: 'addLiquidity',
    token0Amount: '1',
    token0Symbol: 'ETH',
    token1Amount: '2000',
    token1Symbol: 'USDC',
    account: '0x8765...4321'
  }
];