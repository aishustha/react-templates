import React from 'react';
import Button from '../Button/Button.jsx';
import './Header.css';
import BannerImg from '../../assets/banner-0.gif';
// import TitleLeft from '../../assets/banner-1.gif';
// import TitleRight from '../../assets/banner-2.gif';

function Header() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="title-flex">
            {/* <img 
              src={TitleLeft} 
              alt="Cheerful People" 
              className="title-left-img"
            /> */}

            <h1 className="title">Your partner for <br/>extraordinary talent</h1>

            {/* <img 
              src={TitleRight} 
              alt="Cheerful People" 
              className="title-right-img"
            /> */}
          </div>
          <div className="banner-flex">
             <img 
              src={BannerImg} 
              alt="Cheerful People" 
              className="banner-img"
            />
            <div className="banner-desc">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
