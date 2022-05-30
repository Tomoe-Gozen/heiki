import { ChainId } from '@thirdweb-dev/react'

const config = {
  twitter: 'https://twitter.com/HeikiNFT',
  discord: 'https://discord.gg/heikinft',
  opensea: '',
  chainId: process.env.NEXT_PUBLIC_IS_PRODUCTION
    ? ChainId.Mainnet
    : ChainId.Rinkeby
}

export default config
