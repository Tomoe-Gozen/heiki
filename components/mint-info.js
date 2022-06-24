export default function MintInfo({
  saleFlag,
  loading,
  maxSupply,
  alreadyMinted,
  nMinted
}) {
  const displayMinted = () => {
    if (saleFlag === 0) {
      return
    } else if (saleFlag === 1) {
      return `${nMinted} / 2`
    } else {
      return nMinted
    }
  }

  return (
    <div className="container">
      {!loading && saleFlag !== 0 && (
        <div className="single-counter-up text-center mb--20">
          <div className="number">{displayMinted()}</div>
          <div className="botton-title font-tomoe text-xs">You minted</div>
          {saleFlag === 2 && `(2 per transactions)`}
        </div>
      )}
      <div className="single-counter-up text-center mt--20 mb--20">
        <div className="number">
          {!loading ? (
            maxSupply
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title font-tomoe text-xs">Max supply</div>
      </div>
      <div className="single-counter-up text-center">
        <div className="number">
          {!loading ? (
            alreadyMinted
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title font-tomoe text-xs">Total minted</div>
      </div>
    </div>
  )
}
