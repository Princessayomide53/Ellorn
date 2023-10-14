import "./App.css";
import Header from "./components/Layout/Header/Header";
import Logo from "./components/Layout/Header/Logo";
// import Men from "./components/Layout/Main/Collections/Men's Wear/Men";
import Main from "./components/Layout/Main/Main";
import Nav from "./components/Layout/Navbar/Nav";
import Arrival from "./components/Layout/Main/Collections/Arrivals/Arrival";
import Slider from "./components/Layout/Main/Slider";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <div className="">
        <Header />
        <Logo />
        <Main />
        <Arrival />
        <Slider />
        {/* <Men /> */}
      </div>
    </>
  );
}

export default App;
