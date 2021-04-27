import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/nav';

import Shoppinglist from './components/shoppinglist/shoppinglist';
import Profil from './components/profil/profil';
import Cgv from './components/cgv/cgv';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        <div className="container py-5">
          <Switch>
            <Route path="/shoppinglist">
              <Shoppinglist />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
            <Route path="/cgv">
              <Cgv />
            </Route>
            <Route path="/">
              <Shoppinglist />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
