import React from "react";
import { useDispatch } from "react-redux";

const ProductItem = ({ id, title, desc, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: "addToCart",
      payload: { id, title, desc, price },
    });
  };
  return (
    <div
      style={{
        border: "2px solid black",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        margin: "10px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "200px",
        height: "200px"
      }}
    >
      <h3>{title}</h3>
      <p>{desc}</p>
      <div style={{
        display: "flex",
        justifyContent:"space-around",
        alignItems: "center",
        width: "100%"
      }}>
      <h3>₹{price}</h3>
      <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
