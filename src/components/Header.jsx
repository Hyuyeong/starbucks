//import {useState} from 'react'
//import styles from './Header.module.css'

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="nav__main">
          <img
            src="https://www.starbucks.co.nz/content/images/starbucks-logo.svg"
            alt="starbuck logo"
          />
          <nav>
            <ul className="nav__main_items">
              <li>memu</li>
              <li>coffee at home</li>
              <li>rewards</li>
              <li>online store</li>
              <li>careers</li>
              <li>about us</li>
            </ul>
          </nav>
        </div>
        <nav className="nav__sub">
          <ul className="nav__items">
            <li>find a store</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
