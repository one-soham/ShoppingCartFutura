import { useParams, useOutletContext, Link } from "react-router-dom";
import Ratings from "./Ratings.jsx";
import "../../styles/Product.css";

export default function Product() {
  const { masterData, cartItems, handleQtyChange } = useOutletContext();
  const { id } = useParams();

  const productId = Number(id);

  if (!masterData || masterData.length === 0) {
    return <div className="load-screen">Loading product...</div>;
  }

  const product = masterData.find((item) => item.id === productId);

  const cartItem = cartItems.find((item) => item.id === productId);
  const curQty = cartItem ? cartItem.quantity : 0;

  function handleItemQtyChange(operation) {
    const nextQty = operation === "A" ? curQty + 1 : Math.max(0, curQty - 1);

    handleQtyChange(productId, nextQty);
  }

  return (
    <div className="product-page">
      <div className="product-page-top">
        <div className="product-image">
          <img src={product.images[0]} alt={product.title} />
        </div>

        <div className="product-info">
          <h1>{product.title.toLowerCase()}</h1>
          <h3 className="brand">{product.brand}</h3>

          <div className="price-rating">
            <h2>${product.price}</h2>
            <Ratings rating={product.rating} />
          </div>

          <div className="product-tags">
            {product.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="add-remove-product">
            {curQty === 0 ? (
              <button
                onClick={() => handleItemQtyChange("A")}
                className="add-to-cart-button"
              >
                ADD TO CART
              </button>
            ) : (
              <>
                <div className="add-remove-buttons">
                  <button onClick={() => handleItemQtyChange("S")}>-</button>
                  <p>{curQty}</p>
                  <button onClick={() => handleItemQtyChange("A")}>+</button>
                </div>
                <Link to="/cart" className="checkout-btn">
                  GO TO CART
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="product-reviews">
        <h2>customer reviews</h2>

        {product.reviews.length === 0 && (
          <p className="no-reviews">No reviews yet</p>
        )}

        {product.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <strong>{review.reviewerName}</strong>
              <Ratings rating={review.rating} />
            </div>

            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
