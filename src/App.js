import React, { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Logo from "./components/Layout/Header/Logo";
import Main from "./components/Layout/Main/Main";
import Nav from "./components/Layout/Navbar/Nav";
import Arrival from "./components/Layout/Main/Collections/Arrivals/Arrival";
import Slider from "./components/Layout/Main/Slider";
import Features from "./components/Layout/Main/Features";
import Socials from "./components/Layout/Main/Socials";
import Testimonials from "./components/Layout/Main/Testimonials";
import Footer from "./components/Layout/Footer/Footer";
import MiniFooter from "./components/Layout/Footer/MiniFooter";
import Cart from "./components/Cart/Cart";

import { CartProvider } from "./store/CartProvider";
// import MensWear from "./components/Layout/Main/Collections/Men's Wear/MensWear";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showHandler = useCallback(() => {
    setShowCart(true);
  }, []);

  const hideHandler = useCallback(() => {
    setShowCart(false);
  }, []);
  return (
    <CartProvider>
      {" "}
      <Nav onShowCart={showHandler} />
      {showCart && <Cart onHideCart={hideHandler} />}
      <Header />
      <Logo />
      <Main />
      <Arrival />
      <Slider />
      <Features />
      <Socials />
      <Testimonials />
      <Footer />
      <MiniFooter />
    </CartProvider>
  );
}

export default React.memo(App);
