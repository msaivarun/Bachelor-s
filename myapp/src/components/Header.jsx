import React from "react";
import v from "../assets/logo2.jpg";

const Header = () => {
  return (
    <nav>
      <img src={v} alt="image" width="30" height="30" />
      <h4>BACHELORS</h4>
      <a target="_self" href="#">
        Rooms
      </a>
      <a target="_self" href="#">
        Near me
      </a>
      <a target="_self" href="#">
        Recipes
      </a>
    </nav>
  );
};

export default Header;
