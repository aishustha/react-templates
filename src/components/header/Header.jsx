import React from 'react';
import Button from '../Button/Button.jsx';
import './Header.css';

function Header() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="title">Your partner for extraordinary talent</h1>
          <p className="subtitle">
            For over a decade, we've been helping groundbreaking companies build
            teams of exceptionally talented people who work together to do what
            hasn't been done before.
          </p>
          <div className="cta-row">
            <Button 
              variant="primary">       
              <span>Learn more</span>
            </Button>
            
            <Button 
              variant="secondary">      
              <span>Get in touch</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
