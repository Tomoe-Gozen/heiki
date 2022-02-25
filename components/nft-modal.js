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
      case 'Red Sakura':
        return '#B23643'
      case 'White':
        return '#EFEFEF'
      case 'White Sakura':
        return '#B5B4B4'
      case 'Yellow':
        return '#FFDC64'
      case 'Yellow Sakura':
        return '#E1D072'
      case 'Army':
        return '#5C6F60'
      case 'Dark Green':
        return '#35513A'
      case 'Grey':
        return '#6D6D6D'
      case 'Dark Grey Arrow':
        return '#4E4E4E'
      case 'Blue Kunai':
        return '#596C8E'
      case 'Red Fire':
      case 'Blue Fire':
        return '#4E4E4E'
      case 'White Arrow':
        return '#E5E5E5'
      default:
        return ''
    }
  }

  const getColor = () => {
    const background = selectedNft?.attributes.find(
      (nft) => nft.trait_type === 'Background'
    )
    switch (background?.value) {
      case 'White':
      case 'Yellow':
      case 'White Arrow':
      case 'White Sakura':
      case 'Yellow Sakura':
        return 'var(--color-subtitle)'
      default:
        return '#EFEFEF'
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
              <div className="nft-image">
                <Image
                  quality="100"
                  src={`https://tomoegozen.ams3.cdn.digitaloceanspaces.com/${selectedNft?.edition}.png`}
                  alt=""
                  width="512"
                  height="512"
                />
              </div>
            </div>
            <div className="p-3">
              <h3
                className="m-3 font-tomoe text-lg"
                style={{ color: getColor() }}
              >
                {selectedNft?.name}
              </h3>
              <div className="rn-pd-sm-property-wrapper w-100">
                <div className="property-wrapper property-wrapper-no-wrap">
                  {selectedNft?.attributes.map((n, index) => (
                    <div key={index} className="pd-property-inner">
                      <span className="color-white type">{n.trait_type}</span>
                      <span className="color-white value">
                        <strong>{n.value}</strong>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
