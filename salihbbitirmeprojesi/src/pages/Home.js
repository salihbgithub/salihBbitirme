import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.jpg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Hoşgeldiniz</h1>
        <p>
          {" "}
          <br />{" "}
        </p>
        <Link to="/menu">
          <button>Hoşgeldiniz</button>
        </Link>
      </div>
    </div>
  );
}


export default Home;
