import React from "react";
import { Link } from "react-router-dom";

const StoreCard = ({ store }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{store.name}</h3>
      <p>{store.address}</p>
      <p>Average Rating: {store.averageRating || "N/A"}</p>
      <Link to={`/rate/${store.id}`}>Rate Store</Link>
    </div>
  );
};

export default StoreCard;
