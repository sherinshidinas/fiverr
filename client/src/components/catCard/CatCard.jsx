import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";

function CatCard({ item }) {
  console.log("item is ",item)
  return (
    <div className="catCard">
      <span className="desc">{item.desc}</span>
      <span className="title">{item.title}</span>
      <Link to={`/gigs?cat=${item.title.toLowerCase().replace(" ","_")}`}>
        <img src={item.img} alt="" />
      </Link>
    </div>
  );
}

export default CatCard;
