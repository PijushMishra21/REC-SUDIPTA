import React from 'react'
import './About.css'
import Footer from '../Homepage/Footer'
import Slide from '../Homepage/Slide';


function About() {
  return (
    <div>
    <section >
      <div className='about_us_div'>
<div className='about_heading_div'>
 <p className='About_us_sub_heading'>--We are Building
</p>
 <h1 className='about_heading'>
 A Great Dream For You !!!
 </h1>
 <p className='about_sub_para'>The firm REC stared to provide new project planning and implementation solutions both legal and engineering to new comers as well as existing players units who wanted to go in for expansion, modification, aquigition or diversification. The firm now provides personnel selection and recruitment support services to business organization.</p>
</div>
<aside>
 <div>
  <img className='about_image' src="src/assets/civil engenear happy.jpg" alt="" />
 </div>
</aside>
 </div>
 </section>
  <section className='About_main_section'>
       <div className=''>
       <p className='About_us_sub_heading'>--What About Us--</p>
        </div> 
        <div className='About_us_heading_div'>
        <h2 className='About_us_heading'>Who We Are ?</h2>
        </div>
        <article>
          <div>
            <p className='About_us_para'>
            <b>Rajendra Engineering Consultancy</b> is a legal Management and <b>Engineering Consultancy Organization </b>set up in the year <b>2000</b> at <b>Midnapore</b>, the district headquarter town of <b> West Midnapore District</b>. The founderS of the firm educationally and technically experienced from Kolkata, West Bengal had vast experience in Industry and as a legal Consultant. The firm Recruitment stared to provide new project planning and implementation solutions to new comers as well as existing players units who wanted to go in for expansion or diversification. The firm now provides Legal Awarness services to business organization. The Firm prepared thousand of project reports for micro and small units <b>(MSMEs)</b> 
            </p>
            <p className='About_us_para'>
            At <b>Rajendra Engineering Consultancy</b>, we are committed to delivering exceptional quality, innovation, and reliability in every project we undertake. <b> Contact us</b> today to learn more about how we can support your industrial and municipal development needs.
            </p>
          </div>
        </article>
  </section>
  <Slide />

        <Footer />
    </div>
  )
}

export default About