import { useState } from 'react'
import {faSpinner} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Logo({url}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  const handleImageError = () => {
    setHasError(true)
  }

  return (
    <div className="foto">
      {!isImageLoaded && !hasError && <FontAwesomeIcon className="loading" icon={faSpinner}/>}
      {hasError && <p>Error al cargar la imagen.</p>}
      <img
        className="foto__img"
        src={url} // Ruta de la imagen local
        alt="Descripción de la imagen"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: isImageLoaded && !hasError ? 'block' : 'none' }}
      />
    </div>
  )
}

export default Logo