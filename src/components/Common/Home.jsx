import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home-hero">
      <h1>welcome to _futura.</h1>
      <h3>store of the future</h3>
      <p>
        a curated shopping experience built around simplicity, quality, and
        forward-thinking design
      </p>
      <div id="store-btns">
        <Link to="store">Check out our Store</Link>
        <Link to="about">Learn more about us</Link>
      </div>
    </div>
  );
}
