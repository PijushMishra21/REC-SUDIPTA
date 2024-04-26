import React from 'react'
import './SlideImage.css'

function Slide( ) {
 const images =
  [
 '/public/Images/slideimages/IMG-20240404-WA0004.jpg',
 '/public/Images/slideimages/IMG-20240404-WA0013.jpg',
 '/public/Images/slideimages/IMG-20240404-WA0018.jpg',
 '/public/Images/slideimages/IMG-20240404-WA0016.jpg',
 '/public/Images/slideimages/IMG-20240404-WA0001.jpg',
 '/public/Images/slideimages/IMG-20240404-WA0008.jpg',
 '/public/Images/slideimages/IMG-20240404-WA0025.jpg',
]


  return (
    <div>
     <section>
     
     <div className="marquee-container">
      <div>
        
        <p className='marquee_heading'>
            --Some of our projects--
        </p>
      </div>
      <div className="marquee-content">
        {images.map((image, index) => (
          <img className='images' key={index} src={image} alt={` ${index} Image`} />
        ))}
      </div>
    </div>
    </section>
    
    </div>
   
  )
}

export default Slide;