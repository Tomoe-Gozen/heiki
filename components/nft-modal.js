import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'

export default function NftModal({ setSelectedNft, selectedNft }) {
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setSelectedNft(null)
    setIsOpen(false)
  }

  const getBackground = () => {
    const background = selectedNft?.attributes.find(
      (nft) => nft.trait_type === 'Background'
    )
    switch (background?.value) {
      case 'Red':
        return '#B13743'
      case 'Red':
        return '#B13743'

      default:
        break
    }
  }

  useEffect(() => {
    setIsOpen(selectedNft ? true : false)
  }, [selectedNft])

  return (
    <Dialog
      open={isOpen}
      onClose={() => closeModal()}
      className="d-block rn-popup-modal placebid-modal-wrapper modal fade show"
    >
      <Dialog.Overlay className="modal-overlay" />
      <button type="button" className="btn-close" onClick={() => closeModal()}>
        <i className="fa fa-times text-white"></i>
      </button>

      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div
          className="modal-content p-0"
          style={{ backgroundColor: getBackground() }}
        >
          <div className="d-flex">
            <div>
              <div className="w-50 h-50">
                <img
                  src={`https://tomoegozen.ams3.cdn.digitaloceanspaces.com/${selectedNft?.edition}.png`}
                  className="w-100 h-100"
                />
              </div>
            </div>
            <div className="p-3">
              <h3>{selectedNft?.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
