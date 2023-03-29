import React from "react";
import { products } from "../utils/products";
import ProductItem from "./ProductItem";
const Products = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        overflowY: "scroll",
        height: "70vh",
      }}
    >
      {products.map((item) => {
        return (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
