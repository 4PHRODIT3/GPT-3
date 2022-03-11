import React from 'react';
import "./footer.css";
import logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-title'>
        <h1 className='gradient__text'>Do you want to step in to the<br/> future before others?</h1>
        <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-links section__padding'>
        <div className='gpt3__footer-links__brand'>
          <img src={logo} alt="GPT3 Logo" />
          <p>Crechterwoord K12 182 DK<br /> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links-container'>
          <h1 className='gpt3__footer-links__title'>Links</h1>
          <p><a href="#home">Overons</a></p>
          <p><a href="#home">Social Media</a></p>
          <p><a href="#home">Counters</a></p>
          <p><a href="#home">Contact</a></p>
        </div>
        <div className='gpt3__footer-links-container'>
          <h1 className='gpt3__footer-links__title'>Company</h1>
          <p><a href="#home">Terms & Conditions</a></p>
          <p><a href="#home">Privacy Policy</a></p>
          <p><a href="#home">Contact</a></p>
        </div>
        <div className='gpt3__footer-links-container'>
          <h1 className='gpt3__footer-links__title'>Get in touch</h1>
          <p><a href="#home">Crechterwoord K12<br/>182 DK Alknjkcb</a></p>
          <p><a href="#home">085-132567</a></p>
          <p><a href="#home">info@payme.net</a></p>
        </div>
      </div>
      <div className='gpt3__footer-rights'><p>© 2022 GPT-3. All rights reserved.</p></div>
    </div>
  )
}

export default Footer