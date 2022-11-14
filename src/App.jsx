import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [start, setStart] = useState(1);
  const url = `https://kea-alt-del.dk/t7/api/products?limit=12&start=${start}`;

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, [start]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, [start]);

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
  }

  return (
    <div className="App">
      <Header />
      <ProductList addToCart={addToCart} products={products} />
      <Basket removeFromCart={removeFromCart} products={products} cart={cart} />
      <button onClick={() => setStart((oldValue) => oldValue + 10)}>Show next 10 items</button>
    </div>
  );
}

export default App;
