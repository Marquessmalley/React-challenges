import { useContext, useEffect } from "react";
import { ShoppingCart } from "./Store";

const Cart = () => {
  const { cart, setCart, totalCost, setTotalCost } = useContext(ShoppingCart);

  useEffect(() => {
    const handleTotalPrice = () => {
      const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
      setTotalCost(totalCost);
    };
    handleTotalPrice();
  }, [cart, setTotalCost]);

  const handleRemoveItem = (item) => {
    setCart((prevCart) => prevCart.filter((cart) => cart.id !== item.id));
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <h1>Cart Items: </h1>
      {cart.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              margin: "1rem",
              border: "1px black solid",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "25%",
            }}
          >
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={() => handleRemoveItem(item)}>Remove Item</button>
          </div>
        );
      })}
      <h3>Total cost: {totalCost} </h3>
    </div>
  );
};

export default Cart;
