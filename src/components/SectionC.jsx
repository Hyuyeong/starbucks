//import {useState} from 'react'
//import styles from './SectionC.module.css'

import img1 from '../assets/sectionC-1.png';
import img2 from '../assets/sectionC-2.jpg';
import img3 from '../assets/sectionC-3.jpg';

const SectionC = props => {
  return (
    <section className="container__section-c">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </section>
  );
};
export default SectionC;
