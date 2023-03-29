import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Here is your Products & Cart</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          className="product"
          style={{
            width: "50%",
            borderRight: "2px solid black",
          }}
        >
          <h1 style={{textAlign: "center"}}>Products</h1>
          <Products />
        </div>
        <div
          className="product"
          style={{
            width: "50%",
          }}
        >
          <h1 style={{textAlign: "center"}}>Cart</h1>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
