
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from 'react-i18next';
import  '../components/styles/NavBar.css';
import LanguageSwitcher from './LanguageSwitcher';
// import data from '../../public/locales'
const NavBar =()  =>{
   const { t } = useTranslation();

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <div>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <h2>
              <span>L</span>earning
              <span>L</span>anguage
            </h2>
          </div>
  
          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <a to="/">{t([0].{'Nav_H'})}</a>
              </li>
              <li>
                <a to="/about">{t("Nav_A")}</a>
              </li>
              <li>
                <a to="/service">{t("Nav_S")}</a>
              </li>
              <li>
                <a to="/contact">{t("Nav_C")}</a>
              </li>
              <LanguageSwitcher/>
              </ul>
</div>
              <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu/>
            </a>
              </div>

          
         
           
          </nav>
          </div>
    );
}

export default NavBar