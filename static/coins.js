import btcLogo from '../assets/btc.png'
import maticLogo from '../assets/matic.png'
import dogeLogo from '../assets/doge.png'
import ethLogo from '../assets/eth.png'
import lunaLogo from '../assets/luna.png'
import solLogo from '../assets/sol.png'

export const coins = [
  {
    name: 'Bitcoin',
    sign: 'BTC',
    logo: btcLogo,
    balanceUsd: 509745.45,
    balanceCoin: 25.8739053,
    priceUsd: 200381.89,
    change: -70.89,
    allocation: 83.04,
  },
  {
    name: 'Ethereum',
    sign: 'ETH',
    logo: ethLogo,
    balanceUsd: 17604.53,
    balanceCoin: 3.35664236,
    priceUsd: 1009.38,
    change: -75.24,
    allocation: 16.96,
  },
  {
    name: 'Solana',
    sign: 'CRV',
    logo: solLogo,
    balanceUsd: 0.00,
    balanceCoin: 0.00,
    priceUsd: 35.59,
    change: 4.74,
    allocation: 0.00,
  },
  {
    name: 'Polygon',
    sign: 'MATIC',
    logo: maticLogo,
    balanceUsd: 0.89,
    balanceCoin: 0.00,
    priceUsd: 0.83,
    change: -0.12,
    allocation: 0.00,
  },
  {
    name: 'Terra',
    sign: 'LUNA',
    logo: lunaLogo,
    balanceUsd: 0.000107,
    balanceCoin: 0.00,
    priceUsd: 0.000109,
    change: -0.00002,
    allocation: 0.00,
  },
  {
    name: 'Dogecoin 🌙',
    sign: 'DOGE',
    logo: dogeLogo,
    balanceUsd: 0.068,
    balanceCoin: 0.00,
    priceUsd: 0.070,
    change: 0.002,
    allocation: 0.00,
  },
]
