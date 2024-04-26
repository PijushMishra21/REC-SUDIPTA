import React from 'react'
import ServiceCard from '../Homepage/ServiceCard'
import '../NavPages/Services.css'
import Footer from '../Homepage/Footer'
import Slide from './../Homepage/Slide';
import SlideImage from '../Homepage/SlideImage';



    

function Services() {


  return (
    <div>
      

      <div className='SlideImage'> 
   <SlideImage  />
</div>
<section>
 <div className='service_heading_div'>
  <p className='service_sub_heading'>--Our Engineering Services-- </p>
  <h1 className='service_heading'>What Services We are Provide ?</h1>
  <p className='service_para'>With 23 years of experience and a dedicated professional and support staff, <b>Rajendra Engineering Consultancy</b> has a broad range of market sectors that we provide our civil engineering services to in the Greater Philadelphia and New Jersey areas.At Rajendra Engineering Consultancy, we specialize in civil engineering and infrastructure projects, including urban planning and design. While our primary focus is on larger-scale projects, we can offer insights and expertise to help you maximize space utilization and create attractive living or working environments.
  </p>
  <p><b>We offer engineering services in the following areas:</b></p>
  </div>
  
 <div className='sercice_card'>
 <ServiceCard 
  title="Master Plan making & plotting of a mass areas"
  imageUrl="/src/Images/images/civil image.jpg"
  para={<><p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
  </p>
 </>
  }
  />
  <ServiceCard
   title="Geo tagging of land" 
   imageUrl="/src/Images/images/geo taging of land.jpg"
   para={<>
   <p>
    A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
</p>
</>}
   />
  <ServiceCard
   title="Consultancy On Pollution Control"
   imageUrl="/src/Images/slideimages/polution control image.jpeg" 
   para={<>
    <p>
     A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
 </p>
 </>}

   />
<ServiceCard
      title="Consultancy On financial  Accounting"
      imageUrl="/src/Images/slideimages/Consultancy On financial Matters & Accounting.webp"
      para={
        <>
    <p>
     A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
 </p>
 </>
   }
    />


  </div>
  <div className='sercice_card'>
 
  <ServiceCard
   title="Firm/Company Registration"
   imageUrl="/src/Images/images/civil photo 2.jpg" 
   para={<>
    <p>
     A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
 </p>
 </>}
   />

<ServiceCard  
      title="Project Report  For New Project"
      imageUrl="/src/Images/images/civil photo 3.jpg" 
   para={<>
    <p>
     A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
 </p>
 </>}
   />
<ServiceCard 
  title="Consultancy On Quality Certification (ISI/ISO)  "
  imageUrl="/src/Images/images/civil image.jpg"
  para={<><p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
  </p>
 </>
  }
  />

<ServiceCard 
  title="Organisational Structure Development  "
  imageUrl="/src/Images/images/civil image.jpg"
  para={<><p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
  </p>
 </>
  }
  />
   
    </div> 
 <div className='service_heading_div'>
 <h2 className='survey_heading'>--Our Survey services--</h2>
 </div>
 <div className='sercice_card'>
<ServiceCard
      title="Gps Survey Services"
      imageUrl="/src/Images/images/gps-survey-service-.webp"
      para= {<>
      <p><b>Price:</b>  ₹10,000/km</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 km</p>
    </>}
    />

<ServiceCard
       title="layout-and-lineout-survey-service"
       imageUrl="/src/Images/images/land and-survey-service-.webp"
      para= {<>
      <p><b>Price:</b> ₹7000/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> Layout And Lineout</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
    
<ServiceCard
       title="Soil Investigation  and testing" 
       imageUrl="/src/Images/images/soil-land-survey-service-.webp"
      para= {<>
      <p><b>Price:</b> ₹5,000</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b>2-7 Days</p>
      <p><b>Type:</b> Soil</p>
      <p><b>GPS Accuracy:</b>0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
    
<ServiceCard
      title="Total station survey service"
      imageUrl="/src/Images/images/total-station-survey-service-250x250.webp"
      para= {<>
      <p><b>Price:</b> ₹7500/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-1 Days</p>
      <p><b>Type:</b> Station Survey</p>
      <p><b>GPS Accuracy:</b> 0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />


 </div>

 <div className='sercice_card'>
<ServiceCard
      title="DGPS-survey-service"
      imageUrl="/src/Images/images/dgps-survey-service-500x500.webp"
      para= {<>
      <p><b>Price:</b> 10,000</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 1-3 Days</p>
      <p><b>Type:</b> DGPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
<ServiceCard
      title="Land Survey Consultancy Service"
      imageUrl="/src/Images/images/total-station-survey-service-250x250.webp"
      para= {<>
      <p><b>Price:</b>₹7,500/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> Land</p>
      <p><b>GPS Accuracy:</b> 10 meter</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
<ServiceCard
      title="land and-survey-service"
      imageUrl="/src/Images/images/land and-survey-service-.webp"
      para= {<>
      <p><b>Price:</b> 10,000</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 km</p>
    </>}
    />

  <ServiceCard
      title="Topographical Land Survey "
      imageUrl="/src/Images/images/topographical-route-land-survey-service-500x500.jpeg"
      para= {<>
      <p><b>Price:</b> ₹300/acre</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 5 acre</p>
    </>}
    />



 </div>
 <div className='sercice_card'>
  <ServiceCard
      title="Geological Survey Service"
      imageUrl="/src/Images/images/geological-survey-service-500x500.webp"
      // para={paraData}
      para= {<>
      <p><b>Price:</b>  ₹5,200/Day </p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> Geological</p>
      <p><b>GPS Accuracy:</b>0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />

<ServiceCard
      title="Land Survey Survices"
      imageUrl="/src/Images/images/landsurveying-services-.webp"
      para={
        <>
        <p><b>Price:</b> ₹7500/Day</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-1 Days</p>
    <p><b>Type:</b> Land Survey</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </> }
 />
<ServiceCard
     title="laser alignment"
     imageUrl="/src/Images/images/machine-alignment-services-.webp"
      para= {<>
      <p><b>Price:</b>₹8,500/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> machine alignment</p>
      <p><b>GPS Accuracy:</b> 0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
<ServiceCard
      title="GIS Survey Service"
      imageUrl="/src/Images/images/gis-survey-service-1000x1000.webp"
      para= {<>
      <p><b>Price:</b> ₹450 /acre </p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GIS</p>
      <p><b>GPS Accuracy:</b> 0</p>
      <p><b>Minimum order quantity:</b> 5 acre</p>
    </>}
    />


</div> 





 <Slide />
 <Footer />
</section>
    </div>
  )
}

export default Services