import { Link } from "react-router-dom";

export default function Navbar({ cartItems }) {
  let sum = 0;
  for (let item of cartItems) sum += item.quantity;

  return (
    <div id="navbar">
      <div id="navbar-logo">_futura.</div>
      <div id="navbar-main">
        <div className="navbar-field">
          <Link to="/">_home</Link>
        </div>
        <div className="navbar-field">
          <Link to="store">_store</Link>
        </div>
        <div className="navbar-field">
          <Link to="about">_about</Link>
        </div>
      </div>
      <div id="navbar-profile">
        <div className="navbar-field">
          <Link to="cart" id="navbar-cart">
            <img src="/shopping-cart.png" alt="cart" />
            {sum === 0 ? <></> : <p>{sum}</p>}
          </Link>
        </div>
        <div className="navbar-field">
          <img src="/user.png" alt="user" />
        </div>
      </div>
    </div>
  );
}
