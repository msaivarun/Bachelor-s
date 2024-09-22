import React from 'react';
import Content from "../components/Content";
import "../styles/Content.css";
import Survive from "../components/Survive";
import "../styles/Survive.css";
import Footer from "../components/Footer";
import "../styles/Footer.css";
import "../styles/Header.css";
const Header = () => {
  return (
    <>
    <header>
      <div className="hero-text">
        <h1>"A bachelor's life is a fine breakfast,<br /> a flat lunch, and a miserable dinner."</h1>
      </div>
    </header>
    <Survive/>
    <Content />
    <Footer />
    </>
    );
}

export default Header;

