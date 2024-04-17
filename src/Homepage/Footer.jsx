// import { useState } from "react";
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebookF,FaYoutube,FaWhatsapp,     } from "react-icons/fa";




function Footer() {
  



  return (
    <div>
     <footer className="footer ">
      <div className="footer-container">       
     <div className="soscial_media_icon_div">
        <ul className='ul'>
          <li className='li'>
            <Link to="https://www.facebook.com/profile.php?id=61558450775616" className='a'>
            <FaFacebookF />
            </Link>
          </li>
          <li className='li'>
            <Link to="https://youtube.com/@rajendraengineeringconsult391?feature=shared" className='a'>
            <FaYoutube  />
            </Link>
          </li>
          <li className='li'>
            <Link to="https://wa.me/message/WIDDB25G6S4YJ1" className='a'>
            <FaWhatsapp      />
            </Link>
          </li>
        </ul>
     </div>
     <div className='footer_para_div'>
      <p className='footer_para'>
      We worked for our happy clients for establishing their business / industries and also organised events for Legal Awarness. If you want a discussion with us please request a call back now.
      </p>
     </div>
     
     <h2 className='footer_sub_header'>Useful Links :</h2>
        <div className="useful_div_links">
          <ul className='footer_ul'>
            <li className='footer_li'><Link to="/about" className='footer_a'>About us </Link></li>
            <li className='footer_li'><Link to="/Services" className='footer_a'>Other Servises</Link></li>
            <li className='footer_li'><Link to="/WorkSample" className='footer_a'>Work Sample</Link></li>
            <li className='footer_li'><Link to="" className='footer_a'>Contact us</Link></li>
            <li className='footer_li'><Link to="" className='footer_a'>Contact us</Link></li>
            <li className='footer_li'><Link to="/ContactUs" className='footer_a'>Contact us</Link></li>
          </ul>
        </div>
        <hr />
        <p  className='Coyright_para'>
        Coyright © 2024 RAJENDRA ENGINEERING CONSULTANCY. All rights reserved.
        </p>
        <p className='Coyright_para2'>
        Design, Coded, Mainteined By REC.
        </p>
      </div>
    </footer>

     





    </div>
  )
}

export default Footer;