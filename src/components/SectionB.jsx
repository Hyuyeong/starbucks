//import {useState} from 'react'
//import styles from './SectionB.module.css'

import img1 from '../assets/sectionB.jpg';

const SectionB = props => {
  return (
    <section className="container__section-B">
      <div>
        <h2>Anything but Basic</h2>
        <p>
          Extra large and double walled for all your cold beverage needs. Four
          new designs available in 24 oz (709ml) capacity. <br />
          <br />
          Find them in-store and online.
        </p>
        <button>View Range</button>
      </div>
      <img src={img1} alt="" />
    </section>
  );
};
export default SectionB;
