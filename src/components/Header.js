import React from 'react'
import wps_logo from '../img/wpslogonew2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


//Font Awesome Icons
library.add(faPhone, faEnvelope, faFacebook);

const PhoneIcon = () => {
  return <FontAwesomeIcon icon="phone" />;
};

const EmailIcon = () => {
  return <FontAwesomeIcon icon="envelope" />;
};

const FacebookIcon = () => {
  return <FontAwesomeIcon icon={faFacebook} />
};


export default function Header() {
  return (
    <div className="header">
      <img className="logo" alt="logo" src={wps_logo} />
      <div className="icons">
        <a className="item" href="tel:1-973-375-8690 ">
          <PhoneIcon className="phone" />
        </a>
        <a className="item" href="mailto:weinerpest@comcast.net">
          <EmailIcon classname="email" />
        </a>
        <a className="item" href="https://www.facebook.com/weinerpestservices/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="facebook" />
        </a>
      </div>
      <div className="number">Call us at 973-375-8690 for a free estimate.</div>
    </div>
  )
}


