import React from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>

            <div className="footer bg-blue-500 text-white p-10 flex flex-col md:flex-row justify-around">
  <aside>
   <h1>Contact Us</h1>
    <p>
      Phone:0108763985
      <br />
      Mail:pinkydevi456u@gmail.com
      <br />
      Adress:Chittagong
      <br />
      Post Office : Chittagong.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
     <Link><FaFacebook></FaFacebook></Link>
     <Link><FaGoogle></FaGoogle></Link>

     <Link><FaLinkedin></FaLinkedin></Link>

    </div>
  </nav>
</div>

<div className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved Pinky</p>
  </aside>
</div>
            
            
        </footer>
    );
};

export default Footer;