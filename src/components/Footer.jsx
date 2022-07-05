//import {useState} from 'react'
//import styles from './Footer.module.css'

import img1 from '../assets/icon-facebook.svg';
import img2 from '../assets/icon-instagram.svg';

const Footer = props => {
  return (
    <footer>
      <div className="footer__img">
        <img src={img1} alt="facebook" />
        <img src={img2} alt="instargram" />
      </div>
      <div className="footer__policy">Privacy Policy</div>
      <div className="footer__copyright">
        © 2022 Starbucks Coffee Company. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
