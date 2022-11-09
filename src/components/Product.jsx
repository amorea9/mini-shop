import React from "react";

function Product(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price}</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`} alt={props.data.productdisplayname}></img>
      <button onClick={add}>Add to basket</button>
    </article>
  );
}

export default Product;
