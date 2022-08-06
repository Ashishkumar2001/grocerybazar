import React from 'react';


import Cart from './mycomponents/Cart';
import CheckOut from './mycomponents/CheckOut';

import Home from './Home';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <> 
      <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/cart" element={<Cart />}>
          </Route>
          <Route exact path="/back" element={<Home />}>
          </Route>
          <Route exact path="/submit" element={<CheckOut />}>
          </Route>
          
      </Routes>
    </>
  );
}

export default App;
