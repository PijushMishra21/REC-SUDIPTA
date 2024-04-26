import React, { useState,useEffect } from 'react';
import  './SlideImage.css';

function SlideImage() {
  const Images = [
    '/public/Images/slideimages/engeneer.jpg',
    '/public/Images/slideimages/medium-shot-engineer.jpg',
    '/public/Images/slideimages/polution control image.jpeg',
    '/public/Images/slideimages/Consultancy On financial Matters & Accounting.webp',
    '/public/Images/images/civile image.jpg',
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



