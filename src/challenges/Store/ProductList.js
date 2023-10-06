import { useContext } from "react";
import { ShoppingCart } from "./Store";
const items = [
  {
    id: 0,
    name: "ps5",
    price: 500,
  },
  {
    id: 1,
    name: "Xbox",
    price: 350,
  },
  {
    id: 2,
    name: "PC",
    price: 1500,
  },
  {
    id: 3,
    name: "Nintendo",
    price: 300,
  },
];
const ProductList = () => {
  const { cart, setCart } = useContext(ShoppingCart);

  const handleAddItem = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem === undefined) {
      setCart((prevCart) => [...prevCart, item]);
    } else if (existingItem) {
      // ADD QTY HERE if ITEM IS ?
      return;
    }
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <h1>Product Items: </h1>
      {items.map((item) => {
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
            <button onClick={() => handleAddItem(item)}>Add Item </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
