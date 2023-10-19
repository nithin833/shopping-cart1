

import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './containers/Cart';

function App() {
  return (
    <div class="App">
      <div class="left-side">
        <ProductList />
      </div>
      <div class="right-side">
        <Cart />
      </div>
  </div>
  );
}

export default App;
