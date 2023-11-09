import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CheckOut from "../Payment/CheckOut";
import App from "../../App";
import Payment from "../Payment/Payment";
import Completion from "../Payment/Completion";
// import Home from "../Home";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/completion" element={<Completion />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
