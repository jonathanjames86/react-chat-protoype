import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, Link } from "react-router";

//importing Routes
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Settings from "./pages/Settings";


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="about" component={About}></Route>
        <Route path="settings" component={Settings}></Route>
        <Route path="home" component={Home}></Route>
    </Route>
  </Router>,
  document.getElementById('main'));
