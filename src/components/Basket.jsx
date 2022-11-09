import React from "react";

function Basket(props) {
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li>
            {item.productdisplayname} x {item.amount} {item.price * item.amount},-
          </li>
        ))}
      </ul>
      <button>Buy now</button>
    </section>
  );
}

export default Basket;
