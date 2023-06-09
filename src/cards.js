import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div>
  
    <Link className='link' to={"/fetchteams"}>GO TO TABLE</Link>
    <section className="hero-section">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />

        <div className="card-grid">
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://kabaddibaaz.com/wp-content/uploads/2022/03/tamil-thalaivas-team-01-scaled.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">TAMIL THALAIVAS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://cdn.shopify.com/s/files/1/1612/0223/collections/Bulls_6bbecf5b-fb73-4ab5-8510-0cecd172f2a4.jpg?v=1570866788)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">BENGALURU BULLS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://kabaddibaaz.com/wp-content/uploads/2022/03/telugu-titnas-team-01-scaled.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">TELUGU TITANS</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://www.insidesport.in/wp-content/uploads/2019/03/95046-punerimain.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">PUNERI PALTAN</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://sportzcraazy.com/wp-content/uploads/2019/07/patna-pirates-photo1.png)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">PATNA PIRATES</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://www.kreedon.com/wp-content/uploads/2019/07/U-Mumba-kreedon.png)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">U MUMBA</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://logotaglines.com/wp-content/uploads/2016/07/bengal-warriors-logo1.png)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">BENGAL WARRIER</h3>
            </div>
          </a>
          <a className="carder" href="#">
            <div
              className="card__background"
              style={{
                backgroundImage:
                  'url(https://www.mykhel.com/img/400x90/2021/11/haryana-steelers-1635851986.jpg)'
              }}
            ></div>
            <div className="card__content">
              <h3 className="card__heading">HARYANA STEELERS</h3>
            </div>
          </a>
        
            
          
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
