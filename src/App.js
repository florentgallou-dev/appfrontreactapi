
import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/nav';

import Home from './components/home/home';
import Search from './components/search/search';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div id="container" className="bg-darkGrey">
      <Router>
        <Header />
        <Nav />
        <div className="container py-5">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
