import { createContext, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export const ShoppingCart = createContext();
const Store = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  return (
    <ShoppingCart.Provider value={{ cart, setCart, totalCost, setTotalCost }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <ProductList />
        <Cart />
      </div>
    </ShoppingCart.Provider>
  );
};

export default Store;
