import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt, faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
      <div className="footer-responsive mt-5">
        <hr
          style={{
            color: "#656869",
            backgroundColor: "#656869",
            height: 1,
            borderColor: "#656869",
          }}
        />

        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                  <span className="website-name mb-5">
                    <i className="fab fa-pinterest-p"></i>erfume Pride
                  </span>

                  <br />
                  <div className="icons-container d-flex text-center mt-3">
                    <div className="icon icon_instagram">
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                    <div className="icon icon_twitter">
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon icon_youtube">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon icon_facebook">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                  </div>
                  <p className="mt-4 text-white">
                    <small>
                      Perfume can play an important role in our wardrobe.
                      Whether you prefer to apply your signature scent for a
                      date night or for a work day in the office, fragrances
                      help give us a certain aura and presence. Part of what
                      creates this presence for each person is the use of
                      fragrance notes.
                    </small>
                  </p>

                  <p className="mt-5 text-white">
                    <small>Perfume_Pride ?? All rights </small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-menu-container">
                  <ul>
                    <li className="footer-menu">Home</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">About</li>
                    <li className="footer-menu">Contact us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  <h3 className="text-white">Sign up</h3>
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter Email"
                  />
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="footer-phone-icon">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div>
                      <h5 className="text-white">+0 1 7 777 000 22</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div className="footer-phone-icon">
                      <FontAwesomeIcon icon={faMapMarkedAlt} />
                    </div>
                    <div>
                      <p className="text-white">www.Perfume_Pride.COM.com</p>

                      <p className="text-white mx-2">
                        Perfume_Pride.COM@pride.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default Footer;