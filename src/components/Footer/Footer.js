import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { GiConverseShoe } from 'react-icons/gi';
import SubscriptionInput from '.././Forms/SubscriptionInput';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      <SubscriptionInput />
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <GiConverseShoe className='navbar-icon' />
              Sneaker Heads
            </Link>
          </div>
          <small className='website-rights'>Dametrik Fick © 2021</small>
          <div className='social-icons'>
            <a className='social-icon-link' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/dametrik-fick-34971913a/' aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;