import React from 'react';
import './ServiceCard.css'
import { Link, } from 'react-router-dom';






function ServiceCard({title,imageUrl,para,price,duration,type,accuracy,quantity}) {




  return (
    <div>
      
      <div className="service_card">
  <div className="service_card_image_div">
    <img className="service_card_image" src={imageUrl} alt="Project Image" />
 
  </div>
  <div className="service_card_title">
    
       <h4>{title}</h4>
    
    </div>
  <div className="service_card_description">

      <p className='para'>{para}</p>
  </div>
  <Link>
  <button className='Quote_btn'>
    Get Quote
  </button>
  </Link>
  </div>

    </div>
  )
}

export default ServiceCard