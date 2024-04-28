import  { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header"
// import InfiniteScroll from './InfiniteScroll';
import './Header.css'
import './HomePage.css'
import {   } from "react-icons/fa";
// import SlideImage from "./SlideImage";
import Slide from "./Slide";
import ServiceCard from "./ServiceCard";
import ContactUs from '../NavPages/ContactUs'
import FAQ from './FAQ';
import { Link, NavLink, useNavigate,   } from 'react-router-dom';




const paraData = (
  <>
    <p><b>Price:</b>₹10,000/km</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-3 months</p>
    <p><b>Type:</b> GPS</p>
    <p><b>GPS Accuracy:</b> 15-meter</p>
    <p><b>Minimum order quantity:</b> 1 km</p>
  </>
);

const paraData2 = (
  <>
    <p><b>Price:</b> ₹7500/Day</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-1 Days</p>
    <p><b>Type:</b> Land Survey</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </>
);

const paraData3 = (
  <>
    <p> <b>Price:</b>₹5,000/Day</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 5-7 Days</p>
    <p><b>Type:</b> Soil Testing</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </>
);

function HomePage() {

  

  const para = (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum minima libero iusto architecto facere quae, illum laboriosam tenetur excepturi nisi temporibus reprehenderit ea, ipsa fugiat consequatur quod neque, aliquid maxime.
      </p>
    </>
  );

  const para2 = (
    <>
      <p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients. .      </p>
    </>
  );

  const para3 = (
    <>
      <p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients. .      </p>
    </>
  );

  const images = ['/public/Images/images/slideimages/IMG-20240404-WA0011.jpg',
  '/public/Images/images/slideimages/IMG-20240404-WA0020.jpg',
  '/public/Images/images/slideimages/IMG-20240404-WA0022.jpg',
  '/public/Images/images/slideimages/IMG-20240404-WA0023.jpg',
  '/public/Images/images/slideimages/IMG-20240404-WA0028.jpg',
 ]
 
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
 const [visible, setVisible] = useState(true);

 useEffect(() => {
   const handleScroll = () => {
     const currentScrollPos = window.scrollY;

     setVisible(prevScrollPos > currentScrollPos);
     setPrevScrollPos(currentScrollPos);
   };

   window.addEventListener('scroll', handleScroll);

   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, [prevScrollPos]);

  return (
    <div>
     <Header className={`top_bar ${visible ? 'visible' : 'hidden'}`} />
     
<main className="main_page1">
 <section className="image_section">
 <div className="image_section_div">
   <img className="business_image" type='image/png' src="public/home.PNG" alt="business-image" />
 </div>
</section> 
<section className="para_section">
 <aside>
 <div className="Servises_heading_div">
  <p className="Servises_sub_heading"> --Our Servises--</p>
  <h1 className="Servises_heading">What We are Doing ?</h1>
 </div>
<article>
 <div className="srvise_list_div">
  <p className="srvise_list_para"><b>Topographical Survey and Land Use Mapping:</b>Precise topographical surveys and land use mapping to facilitate informed decision-making and regulatory compliance.

<b>Litigation Land Demarcation and Partition Commission:</b> Expert assistance in resolving land disputes through precise demarcation and partition commission services.

<b>Preparation of Town Plans or City Plans:</b> Development of comprehensive town plans and city plans to guide sustainable urban development.

<b>Infrastructure Planning:</b> Design and planning services for sewerage, drainage, and water pipe networks to ensure efficient and reliable infrastructure systems..
  </p>
  <section className="service_card_section">
  <ServiceCard
      title="Master Plan making & plotting of a mass areas"
      imageUrl="/public/Images/images/civil image.jpg"
      para={para}
    />
<ServiceCard
      title="Geo tagging of land"
      imageUrl=""
      para={para}
    />
<ServiceCard
      title="Project Report  For New Project"
      imageUrl=""
      para={para2}
    />
    <ServiceCard
      title="Firm/Company  Registration"
      imageUrl=""
      para={para2}
    />
    <ServiceCard
      title="Consultancy On Pollution Control "
      imageUrl=""
      para={para2}
    />
    <ServiceCard
      title="Consultancy On financial  Accounting"
      imageUrl=""
      para={para2}
    />

    <ServiceCard
      title="Gps Survey Services"
      imageUrl=""
      para={paraData}
    />
    <ServiceCard
      title="Land Survey Survices"
      imageUrl=""
      para={paraData2}
    />
    <ServiceCard
      title="Soil Investigation"
      imageUrl=""
      para={paraData3}
    />
<div>
  <Link to="/Services">
  <button className="view_servises_btn" >View all Servises</button>

</Link>
</div>
  </section>
  
  <section className='work_sample_section'>
  <div className="work_sample_heading_div">
  <p className="work_sample_sub_heading"> --Our Work Sample--</p>
  <h1 className="work_sample_heading">Project Overview</h1>
 </div>
 <article>
 <p className="work_sample_para">The business plan is the foundation of your investor package. However, most entrepreneurs are too busy with other priorities – such as developing products, finding customers, and recruiting a team – to prepare a compelling business plan. <b>Since 2000</b>, we helped many <b>HUF</b> or <b>Industries Comprehensive Solutions</b> for Industrial and Municipal Development At <b>Rajendra Engineering Consultancy</b>, we offer a diverse range of services tailored to meet the needs of industrial and municipal projects.Our expertise encompasses.
 <b>Industrial or Municipal Planning:</b> Strategic planning services to optimize land usage and infrastructure development for industrial and municipal projects.
 <b>Drone Survey and GIS Imagery:</b> Cutting-edge aerial surveying and mapping solutions using drone technology and <b> Geographic Information Systems (GIS)</b> for accurate data collection and analysis.
  </p>
 </article>
  {/* <ServiceCard /> */}
  <Slide images={images}/>

  </section>
 </div>
 </article>
</aside>
</section>
</main>


 <section>
 <div className='faq_image_section'>
  <div>
  <img className='faq_side_image'  src="" alt="faq_side_image" />
  
</div>


 <FAQ />
 </div>

 </section>
 <Footer />
    </div>
  )
}

export default HomePage;