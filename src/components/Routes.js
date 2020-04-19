import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Cart from "./cart/cart";
import Products from "./products/products";

export default () => (
  <Router>
    <Header />
    <Route path="/"/>
    <Route path="/products" component={Products} />
    <Route path="/cart" component={Cart} />
  </Router>
);
