import Navbar from "../Navbar/Navbar";
import "./Home.css";
import React from "react";
import Produse from "./Produse/Produse";

function Home(props) {
  return (
    <div>
      <Navbar />
      <div className="title">
        <h1>Home</h1>
      </div>
      <Produse onAddToCart={props.onAddToCart} />
    </div>
  );
}

export default Home;
