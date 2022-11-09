import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(data) {
    //do we have the product
    if (cart.find((entry) => entry.id === data.id)) {
      setCart((oldCart) =>
        oldCart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          }
          const copy = { ...entry };
          copy.amount = copy.amount + 1;
          return copy;
        })
      );
    } else {
      setCart((oldCart) => oldCart.concat({ ...data, amount: 1 }));
    }
  }
  function removeFromCart(id) {
    //find and mofity product
    setCart((oldCart) => {
      const subtracted = oldCart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
    //filter
  }
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductList addToCart={addToCart} products={products} />
      <Basket removeFromCart={removeFromCart} products={products} cart={cart} />
    </div>
  );
}

export default App;
