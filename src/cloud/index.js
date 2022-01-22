Moralis.Cloud.define("getCryptoInfo", async (req) => {
  const resolveLink = (url) => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };

  const getImageURL = async (nft) => {
    try {
      if (nft.metadata?.image || nft.metadata?.image_url) {
        nft.image = nft.metadata?.image
          ? resolveLink(nft.metadata.image)
          : resolveLink(nft.metadata.image_url);
      } else {
        const data = await (
          await fetch(nft.token_uri, {
            mode: "cors",
            headers: { Accept: "application/json" },
          })
        ).json();
        nft.image = resolveLink(data?.image ? data.image : "");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const logger = Moralis.Cloud.getLogger();
  const address = req.user.get("ethAddress");
  if (!address) return [];

  const chains = [
    {
      chain: "rinkeby",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      symbol: "ETH",
    },
    {
      chain: "bsc testnet",
      image:
        "https://assets.coingecko.com/coins/images/18711/large/Unknown.png?1633077622",
      symbol: "BNB",
    },
    {
      chain: "mumbai",
      image:
        "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
      symbol: "MATIC",
    },
    {
      chain: "avalanche testnet",
      image:
        "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818",
      symbol: "AVAX",
    },
  ];

  const nfts = [];
  const coins = [];

  // get user nft's and native balances on every chain
  for (const c of chains) {
    // get user nft's
    const options = { chain: c.chain };
    const { result } = await Moralis.Web3API.account.getNFTs({
      chain: c.chain,
      address: address,
    });
    const { balance } = await Moralis.Web3API.account.getNativeBalance({
      chain: c.chain,
      address: address,
    });

    result.forEach((nft) => {
      nft.metadata = JSON.parse(nft.metadata);
      nft.chain = c.chain;
      nft.chainImage = c.image;
      getImageURL(nft);
      nfts.push(nft);
    });

    // get user coins

    coins.push({
      balance,
      symbol: c.symbol,
      image: c.image,
      chain: c.chain,
    });
  }

  return { nfts, coins };
});
