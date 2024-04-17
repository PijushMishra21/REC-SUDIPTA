import React, { useState,useEffect } from 'react';
import  './SlideImage.css';

function SlideImage() {
  const Images = [
    '../src/assets/slideimages/engeneer.jpg',
    'src/assets/slideimages/medium-shot-engineer.jpg',
    'src/assets/slideimages/polution control image.jpeg',
    'src/assets/slideimages/Consultancy On financial Matters & Accounting.webp',
    'src/assets/civile image.jpg',
  ];


 const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
   const intervalId = setInterval(goToNext, 2000); 

   return () => clearInterval(intervalId); 
   
 }, [currentIndex]); 



  return (
    <div>
     
     <div className="image_slideshow_div">
      {/* <button onClick={goToPrev}>Previous</button> */}
      <img className='slide_images' src={Images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {/* <button onClick={goToNext}>next</button> */}

    </div>

    </div>
  )
}

export default SlideImage;



