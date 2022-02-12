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
      {saleFlag !== 0 && (
        <div className="single-counter-up text-center mb--20">
          <div className="number">
            {!loading ? (
              displayMinted()
            ) : (
              <i className="fa fa-solid fa-circle-notch fa-spin"></i>
            )}
          </div>
          <div className="botton-title">You minted</div>
          {!loading && saleFlag === 2 && '(5 per transactions)'}
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
        <div className="botton-title">Max supply</div>
      </div>
      <div className="single-counter-up text-center">
        <div className="number">
          {!loading ? (
            alreadyMinted
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title">Total minted</div>
      </div>
    </div>
  )
}