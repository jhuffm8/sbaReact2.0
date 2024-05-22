import { useState, useEffect } from 'react'
import '../styles/gallery.css'
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'

const images = [
    {src: image1, alt: 'Image 1'},
    {src: image2, alt: 'Image 2'},
    {src: image3, alt: 'Image 3'},
]



export function Gallery(){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);
  
    return (
      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    );
}