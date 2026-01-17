import App from "./App.jsx";
import Home from "./components/Common/Home.jsx";
import Store from "./components/StorePage/Store.jsx";
import About from "./components/StorePage/About.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Product from "./components/StorePage/Product.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
