import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <div id="footer-name">
        <h3>_futura.</h3>
        <p>_store for the future</p>
      </div>
      <div id="footer-main">
        <p>
          <Link to="/">_home</Link>
        </p>
        <p>
          <Link to="store">_store</Link>
        </p>
        <p>
          <Link to="cart">_cart</Link>
        </p>
        <p>
          <Link to="https://github.com/one-soham/ShoppingCartFutura">
            _github
          </Link>
        </p>
      </div>
      <div id="footer-author">
        <h3>built by soham hendre</h3>
        <p>for the odin project, 2026</p>
      </div>
    </div>
  );
}
