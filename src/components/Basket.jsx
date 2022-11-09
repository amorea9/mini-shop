import React from "react";

function Basket(props) {
  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => (total += item.price * item.amount));
    return total;
  }
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li>
            {item.productdisplayname} x {item.amount} {item.price * item.amount},-
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()},-</h3>
      <button>Buy now</button>
    </section>
  );
}

export default Basket;
