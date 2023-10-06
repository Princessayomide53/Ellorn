import "./App.css";
import Header from "./components/Layout/Header/Header";
import Logo from "./components/Layout/Header/Logo";
import Main from "./components/Layout/Main/Main";
import Nav from "./components/Layout/Navbar/Nav";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <div className="">
        <Header />
        <Logo />
        <Main />
      </div>
    </>
  );
}

export default App;
