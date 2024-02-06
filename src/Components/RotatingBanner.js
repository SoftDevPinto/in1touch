import React, { useState, useEffect } from 'react';
import '../Components/RotatingBanner.css';
// import image1 from '../Images/image1.jpg';

const RotatingBanner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const rotateBanner = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Rotate every 30 seconds (adjust as needed)

    return () => {
      clearInterval(rotateBanner);
    };
  }, [images]);

  return (
    <div className="rotating-banner">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner Image ${index + 1}`}
          className={index === currentIndex ? 'active' : ''}
        //   style={{ width: '2000px', height: '300px' }}
        />
      ))}
    </div>
  );
};

export default RotatingBanner;
