import "./App.css";
import Header from "./components/Layout/Header/Header";
import Logo from "./components/Layout/Header/Logo";
// import Men from "./components/Layout/Main/Collections/Men's Wear/Men";
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
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showHandler = () => {
    setShowCart(true);
  };
  const hideHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      {" "}
      <Nav onShowCart={showHandler} />
      {showCart && <Cart onClose={hideHandler} />}
      <div className="">
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
        {/* <Men /> */}
      </div>
    </>
  );
}

export default App;
