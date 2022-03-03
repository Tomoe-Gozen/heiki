import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'

export default function TeamModal({ setSelectedMember, selectedMember }) {
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setSelectedMember(null)
    setIsOpen(false)
  }

  const getBackground = () => {
    /* return '#E5E5E5' */
    /* switch (background?.value) {
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
    } */
  }

  useEffect(() => {
    setIsOpen(selectedMember ? true : false)
  }, [selectedMember])

  return (
    <Dialog
      open={isOpen}
      onClose={() => closeModal()}
      className="d-block rn-popup-modal modal fade show"
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
                <Image
                  quality="100"
                  src={selectedMember?.src}
                  alt=""
                  width="512"
                  height="512"
                />
              </div>
            </div>
            <div className="px-5 py-2">
              <h3 className="font-tomoe text-lg mb-0">
                {selectedMember?.name}
              </h3>
              <h6>aka {selectedMember?.pseudo}</h6>
              <div className="text-xs">{selectedMember?.description}</div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
