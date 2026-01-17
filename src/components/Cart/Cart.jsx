import { useOutletContext } from "react-router-dom";
import "../../styles/Cart.css";

export default function Cart() {
  const { masterData, cartItems, handleQtyChange } = useOutletContext();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div id="cart-page">
        <h1>your cart</h1>
        <h3>no items yet</h3>
      </div>
    );
  }

  const cart = cartItems.map(({ id, quantity }) => {
    const product = masterData.find((p) => p.id === id);

    return {
      id,
      quantity,
      product,
    };
  });

  function handleItemQtyChange(id, operation, currentQty) {
    const nextQty =
      operation === "A" ? currentQty + 1 : Math.max(0, currentQty - 1);

    handleQtyChange(id, nextQty);
  }

  function handleClick() {
    alert("Thank you for shopping here!");
  }

  let totalPrice = 0;
  for (let cartItem of cart)
    totalPrice += cartItem.quantity * cartItem.product.price;

  return (
    <div id="cart-page">
      <div id="cart-list">
        <h1>your cart</h1>

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.product.thumbnail} alt={item.product.title} />

            <div className="item-info">
              <h3>{item.product.title.toLowerCase()}</h3>
              <h2>${item.product.price}</h2>
            </div>

            <div className="add-remove-cart">
              <button
                onClick={() => handleItemQtyChange(item.id, "S", item.quantity)}
              >
                -
              </button>

              <p>{item.quantity}</p>

              <button
                onClick={() => handleItemQtyChange(item.id, "A", item.quantity)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div id="price-pay">
        <div id="total-price">
          <h3>your total</h3>
          <h1>${totalPrice}</h1>
        </div>
        <button className="buy-now-btn" onClick={handleClick}>
          BUY NOW
        </button>
      </div>
    </div>
  );
}
