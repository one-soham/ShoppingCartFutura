import { Outlet, useOutletContext, Link } from "react-router-dom";
import { useState } from "react";
import Ratings from "./Ratings.jsx";
import "../../styles/Store.css";

export default function Store() {
  const { masterData } = useOutletContext();

  return (
    <div id="store">
      {/* <div id="selectors">
        <p>Filters</p>
        <p>Sort</p>
      </div> */}
      <div id="store-items">
        {masterData.map((product) => {
          return (
            <div key={product.id} className="store-product-card">
              <img src={product.thumbnail} />
              <h2>{product.title.toLowerCase()}</h2>
              <p>{product.brand}</p>
              <div className="store-product-card-details">
                <h2>${product.price}</h2>
                <Ratings rating={product.rating} />
              </div>
              <Link to={`/product/${product.id}`} className="add-btn">
                View Item
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
