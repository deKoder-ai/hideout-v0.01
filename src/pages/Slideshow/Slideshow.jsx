import { useState, useEffect, useRef } from 'react';
import images from './landscape.js';
import styles from './Slideshow.module.css';

const Slideshow = () => {
  const [slide, setSlide] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const slideshowRef = useRef(null);

  // Function to update height based on width
  const updateHeight = () => {
    if (slideshowRef.current) {
      const width = slideshowRef.current.clientWidth;
      setContainerHeight(width * 0.67); // Example: 16:9 ratio (adjust as needed)
      // setContainerHeight(width * 0.5625); // Example: 16:9 ratio (adjust as needed)
    }
  };

  useEffect(() => {
    updateHeight(); // Set initial height
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.slideshow}
          ref={slideshowRef}
          style={{ height: `${containerHeight}px` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=''
              className={`${styles.slide} ${index === slide ? styles.active : ''}`}
            />
          ))}
          <button
            className={`${styles.back} ${styles.ssButton}`}
            onClick={prevSlide}
          ></button>
          <button
            className={`${styles.forward} ${styles.ssButton}`}
            onClick={nextSlide}
          ></button>
          {/* Dot Navigation */}
          <div className={styles.dots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === slide ? styles.activeDot : ''}`}
                onClick={() => setSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
