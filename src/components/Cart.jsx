import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
        overflowY: "scroll",
        height: "70vh",
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
        <h3>
          No. of items:
          {" " +
            cart.reduce((result, item) => {
              return result + item.count;
            }, 0)}
        </h3>
        <h3>
          Total:{" "}
          {" ₹" +
            cart.reduce((result, item) => {
              return result + item.price * item.count;
            }, 0)}
        </h3>
      </div>
      {cart.map(({ id, title, desc, price, count }) => {
        return (
          <CartItem
            key={id}
            id={id}
            price={price}
            title={title}
            desc={desc}
            count={count}
          />
        );
      })}
    </div>
  );
};

export default Cart;
