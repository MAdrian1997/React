import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import React, { useState } from "react";
import Contact from "./Components/Contactus/Contact";
import Cart from "./Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const [produseInCart, setProduseInCart] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const onAddToCart = (produs) => {
    // setProduseInCart([...produseInCart, produs]);
    let existaProdusul = false;
    for (let i = 0; i < produseInCart.length; i++) {
      if (produs.key === produseInCart[i].key) {
        quantity[i] = quantity[i] + 1;
        existaProdusul = true;
      }
    }
    if (existaProdusul === false) {
      quantity.push(1);
      produseInCart.push(produs);
    }
    console.log(quantity);
  };
  const removeProduct = (event) => {
    let productKey = event.target.value;
    let index = 0;
    for (let i = 0; i < produseInCart.length; i++) {
      if (productKey === produseInCart[i].key) {
        index = i;
        console.log(index);
      }
    }
    produseInCart.splice(index, 1);
    quantity.splice(index, 1);
    setProduseInCart([...produseInCart]);
    setQuantity([...quantity]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home onAddToCart={onAddToCart} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/cart"
        element={
          <Cart
            produseInCart={produseInCart}
            quantity={quantity}
            removeProduct={removeProduct}
          />
        }
      />
    </Routes>
  );
}

export default App;

/*
[
  {produs1},{produs2},{produs3}
  {quantity1},{quantity2},{quantity3}
]
let quantity = produs.produs1
*/
