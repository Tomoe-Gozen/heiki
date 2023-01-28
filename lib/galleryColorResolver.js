export default function galleryColorResolver(backgroundName) {
  // Edit this function to match the gallery background color
  // from your NFT collection's background attributes
  switch (backgroundName) {
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
