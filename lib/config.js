import { ChainId } from '@thirdweb-dev/react'

const config = {
  twitter: 'https://twitter.com/HeikiNFT',
  discord: 'https://discord.gg/heikinft',
  opensea: 'https://opensea.io/collection/official-heiki-nft',
  s3: 'https://heiki.ams3.digitaloceanspaces.com',
  mintStatus: 0, // 0 - Mint not started yet, 1- Whitelist sale, 2 - Public Sale
  chainId:
    process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'
      ? ChainId.Mainnet
      : ChainId.Goerli
}

export default config
