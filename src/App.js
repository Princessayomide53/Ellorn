import "./App.css";
import Header from "./components/Layout/Header/Header";
import Logo from "./components/Layout/Header/Logo";
import Nav from "./components/Layout/Navbar/Nav";

function App() {
  return (
    <>
      {" "}
      <Nav />
      <div className="max-w-[80rem] m-auto">
        <Header />
      </div>
      <Logo />
    </>
  );
}

export default App;
