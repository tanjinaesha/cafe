import React from "react";
import HeaderCard from './HeaderCard.jpg'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between ">
        <a class="navbar-brand">Khowledge cafe</a>
     <img  className="img-fluid  profile"src={HeaderCard} alt="headerCard" />;
      </nav>
    </div>
  );
};

export default Header;