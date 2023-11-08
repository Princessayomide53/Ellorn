import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CheckOut from "../Payment/CheckOut";
import App from "../../App";
import Payment from "../Payment/Payment";
// import Home from "../Home";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
