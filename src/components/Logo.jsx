import { useState } from 'react';
import fotoUrl from '../assets/foto.jpg'

function Logo() {
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
      {!isImageLoaded && !hasError && <p className="loading">Cargando imagen...</p>}
      {hasError && <p>Error al cargar la imagen.</p>}
      <img
        className="foto__img"
        src={fotoUrl} // Ruta de la imagen local
        alt="Descripción de la imagen"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{ display: isImageLoaded && !hasError ? 'block' : 'none' }}
      />
    </div>
  );
}

export default Logo;