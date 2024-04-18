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
import { Link, NavLink,useNavigate } from 'react-router-dom';




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

  const images = ['src/assets/slideimages/IMG-20240404-WA0011.jpg',
  'src/assets/slideimages/IMG-20240404-WA0020.jpg',
  'src/assets/slideimages/IMG-20240404-WA0022.jpg',
  'src/assets/slideimages/IMG-20240404-WA0023.jpg',
  'src/assets/slideimages/IMG-20240404-WA0028.jpg',
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
   <img className="business_image" src="src/assets/1.png" alt="business-image" />

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
      imageUrl="../src/assets/civil image.jpg"
      para={para}
    />
<ServiceCard
      title="Geo tagging of land"
      imageUrl="src/assets/geo taging of land.jpg"
      para={para}
    />
<ServiceCard
      title="Project Report  For New Project"
      imageUrl="../src/assets/civil photo 3.jpg"
      para={para2}
    />
    <ServiceCard
      title="Firm/Company  Registration"
      imageUrl="../src/assets/civil photo 2.jpg"
      para={para2}
    />
    <ServiceCard
      title="Consultancy On Pollution Control "
      imageUrl="src/assets/slideimages/polution control image.jpeg"
      para={para2}
    />
    <ServiceCard
      title="Consultancy On financial  Accounting"
      imageUrl="src/assets/slideimages/Consultancy On financial Matters & Accounting.webp"
      para={para2}
    />
  {/* <ServiceCard title="4.Project Report Preparation For New Project" imageUrl="../src/assets/civil photo 3.jpg"/>
  <ServiceCard title="5.Firm / Company Formation & Registration" imageUrl="../src/assets/civil photo 2.jpg"/>
  <ServiceCard title="6.Project Report Preparation For New Project" imageUrl="../src/assets/arrow-394142_640.webp"/> */}
  {/* <ServiceCard price='₹10,000/km' duration='0-3 mothns' type='GPS' accuracy='15 metre' quantity='1 km' title="Gps Survey Services" imageUrl="src/assets/gps-survey-service-.webp"/>
  <ServiceCard price='₹190/acre' duration='2-5 Days' type='Land' accuracy='5 acre' quantity='5 acre' title="Land Survey Survices" imageUrl="src/assets/landsurveying-services-.webp"/>
  <ServiceCard price='₹7000/Day' duration='0-3 months' type='Layout And Lineout' accuracy='0' quantity='1 Day' title="layout-and-lineout-survey-service" imageUrl="src/assets/land and-survey-service-.webp"/>
  <ServiceCard price='₹5000/Day' duration='2-7 Days' type='Soil Investigation ' accuracy='0' quantity='1 Day' title="Soil Investigation , sample collection and testing" imageUrl="src/assets/soil-land-survey-service-.webp"/> */}
    <ServiceCard
      title="Gps Survey Services"
      imageUrl="src/assets/gps-survey-service-.webp"
      para={paraData}
    />
    <ServiceCard
      title="Land Survey Survices"
      imageUrl="src/assets/landsurveying-services-.webp"
      para={paraData2}
    />
    <ServiceCard
      title="Soil Investigation"
      imageUrl="src/assets/soil-land-survey-service-.webp"
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

{/* <main>
<section className="unit_sction">
<div className="unit_sction_heading_div">
  <h2 className="unit_sction_heading">Target Industries</h2>
</div>

<div className="unit_section_list_div">
			<div className="toggle">
			<div className="toggle-heading" >
						<a  data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="true" >
								<i className="fa fa-plus">{ <FaMedkit /> } </i> Manufacturing Industry
					</a>
			</div>								
		</div>

    <div className="toggle">
			<div className="toggle-heading" >
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="true" >
								<i className="fa fa-plus">{ <FaMedkit /> }</i> Real Estate Industry
					</a>
			</div>								
		</div>
    <div className="toggle">
			<div className="toggle-heading" >
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="true" >
								<i className="fa fa-plus">{ <FaMedkit /> }</i> Residential projects 
                
						</a>
        </div>
       </div>
    <div className="toggle">
			<div className="toggle-heading" >
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="true" >
								<i className="fa fa-plus">{ <FaMedkit /> }</i> Logistic Industry
					</a>
			</div>								
		</div>
    <div className="toggle">
			<div className="toggle-heading" >
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="true" >
								<i className="fa fa-plus">{ <FaMedkit /> }</i> Shopping Mall projects
					</a>
			</div>								
		</div>
    <div className="toggle">
			<div className="toggle-heading" >
						<a role="button" data-toggle="collapse" data-parent="#accordion" href="#" aria-expanded="true" >
								<i className="fa fa-plus">{ <FaMedkit /> }</i> Petrol Pump indusry
					</a>
			</div>								
		</div>
</div>
<button className="view_unit_btn">view all servises</button>
</section> */}

{/* 
<section className="Business_Idea_para_section">
  <article>
    <div>
      <h1>Projects Consultancy Idieas</h1>
    </div>
<article className="Business_Idea_para">
  <div>
    <p>
  The business plan is the foundation of your investor package. However, most entrepreneurs are too busy with other priorities – such as developing products, finding customers, and recruiting a team – to prepare a compelling business plan. Since 2000, we helped many HUF or IndustriesComprehensive Solutions for Industrial and Municipal Development
At Rajendra Engineering Consultancy, we offer a diverse range of services tailored to meet the needs of industrial and municipal projects.Our expertise encompasses:
</p>
<p>
<b>Industrial or Municipal Planning:</b> Strategic planning services to optimize land usage and infrastructure development for industrial and municipal projects.
</p>
<p>
  <b>Drone Survey and GIS Imagery: </b>Cutting-edge aerial surveying and mapping solutions using drone technology and Geographic Information Systems (GIS) for accurate data collection and analysis.
</p>
<p>
  <b>Topographical Survey and Land Use Mapping:</b>Precise topographical surveys and land use mapping to facilitate informed decision-making and regulatory compliance.
</p>
<p>
  <b>Litigation Land Demarcation and Partition Commission:</b> Expert assistance in resolving land disputes through precise demarcation and partition commission services.
</p>
<p>
  <b>Preparation of Town Plans or City Plans:</b> Development of comprehensive town plans and city plans to guide sustainable urban development.
</p>
<p>
  <b>Infrastructure Planning:</b> Design and planning services for sewerage, drainage, and water pipe networks to ensure efficient and reliable infrastructure systems.
</p>
  </div>
</article>
</article>
</section> *

 </main>
 {/* < InfiniteScroll /> */}
 {/* <SlideImage /> */}
 <section>
 <div className='faq_image_section'>
  <div>
  <img className='faq_side_image' src="src/assets/slideimages/medium-shot-engineer.jpg" alt="" />
  
</div>


 <FAQ />
 </div>

 </section>
 <Footer />
    </div>
  )
}

export default HomePage;