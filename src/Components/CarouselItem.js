import React from "react";
import './caraousel.css';

function Item(props) {
  return <div className="carousel-item" style={{width:"100%"}}>{props.children}</div>;
}

export default Item;