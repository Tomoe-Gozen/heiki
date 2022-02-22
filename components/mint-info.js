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
      <div className="single-counter-up text-center mt--20 mb--20">
        <div className="number">
          {!loading ? (
            8000
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title">Max supply</div>
      </div>
      <div className="single-counter-up text-center">
        <div className="number">
          {!loading ? (
            0
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title">Total minted</div>
      </div>
    </div>
  )
}
