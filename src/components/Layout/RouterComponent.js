import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "../Payment/CheckOut";
import App from "../../App";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
