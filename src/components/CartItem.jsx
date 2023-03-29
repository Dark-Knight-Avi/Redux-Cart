import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, desc, price, count }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
  };
  const incrementCount = () => {
    dispatch({
      type: "updateCartItem",
      payload: { id, value: 1 },
    });
  };
  const decrementCount = () => {
    count > 1
      ? dispatch({
          type: "updateCartItem",
          payload: { id, value: -1 },
        })
      : removeFromCart();
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
        alignItems: "flex-start",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={decrementCount}>-</button>
          <h4 style={{ margin: "0px 10px" }}>{count}</h4>
          <button onClick={incrementCount}>+</button>
        </div>
      </div>
      <p>{desc}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        <button onClick={removeFromCart}>Remove from Cart</button>
        <h3>₹{price}</h3>
      </div>
    </div>
  );
};

export default CartItem;
