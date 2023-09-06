// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, changePhoto, isActive, changeTabid} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem

  const changeImage = () => {
    changePhoto(id)
  }

  const onClickImage = () => {
    changeTabid(id)
  }

  const styling = isActive ? '' : 'image_'

  return (
    <li>
      <button type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={changeImage}
          className={`image ${styling}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
