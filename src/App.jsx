import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import processData from "./utils/dataGetter.js";
import Navbar from "./components/Common/Navbar.jsx";
import Footer from "./components/Common/Footer.jsx";
import "./styles/App.css";

function App() {
  const [masterData, setMasterData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function handleQtyChange(id, value) {
    if (value == 0)
      setCartItems((items) => items.filter((item) => item.id !== id));
    else {
      const itemExist = cartItems.some((item) => item.id === id);

      if (!itemExist) setCartItems([...cartItems, { id: id, quantity: value }]);
      else
        setCartItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: value } : item
          )
        );
    }
  }

  useEffect(() => {
    async function importData() {
      const data = await processData();
      setMasterData(data);
    }
    importData();
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div id="app">
      <Navbar cartItems={cartItems} />
      <Outlet context={{ masterData, cartItems, handleQtyChange }} />
      <Footer />
    </div>
  );
}

export default App;
