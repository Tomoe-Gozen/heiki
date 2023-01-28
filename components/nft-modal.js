import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import config from '../config.json'
import galleryColorResolver from '../lib/galleryColorResolver'

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
    return galleryColorResolver(background?.value)
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
          <div className="d-flex flex-md-row flex-column">
            <div>
              <div className="nft-image mx-auto">
                <img
                  src={`${config.s3}/${selectedNft?.name.split('#')[1]}.png`}
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
                    <div
                      key={index}
                      className="pd-property-inner cursor-default"
                    >
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
