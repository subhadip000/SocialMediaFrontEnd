import React, { useState } from 'react';
import './imageSwiper.css'

function ImageSwiper({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function handleNextClick() {
    setCurrentImageIndex(currentImageIndex + 1);
  }

  function handlePrevClick() {
    setCurrentImageIndex(currentImageIndex - 1);
  }

  return (
    <div className="image-swiper">
      <button onClick={handlePrevClick} disabled={currentImageIndex === 0}>
        &lt;
      </button>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <button onClick={handleNextClick} disabled={currentImageIndex === images.length - 1}>
        &gt;
      </button>
    </div>
  );
}

export default ImageSwiper;
