

import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import './ProductList.css';

const products = [
  { name: 'Bread', price: 1.10, discount: 0.0 },
  { name: 'Milk', price: 0.50, discount: 0.0 },
  { name: 'Cheese', price: 0.90, discount: 0.0 },
  { name: 'Soup', price: 0.60, discount: 0.0 },
  { name: 'Butter', price: 1.20, discount: 0.0 },
];

const ProductList = (props) => {
  const addCheeseWithOffer = () => {
    const totalCheese = props.cart.filter((item) => item.name === 'Cheese').length;
    const offerApplies = totalCheese % 2 !== 0;

    if (offerApplies) {
      const product = { name: 'Cheese', price: 0, discount: 0.90 }
      props.addToCart(product);
    } else {
      props.addToCart(products.find((product) => product.name === 'Cheese'));
    }
  };

  const addBreadWithOffer = () => {
    const totalSoup = props.cart.filter((item) => item.name === 'Soup').length;
    const totalBread = props.cart.filter((item) => item.name === 'Bread').length;
    const product = products.find((product) => product.name === 'Bread')
    if (totalSoup == totalBread + 1) {
      props.addToCart({ name: 'Bread', price: product.price / 2, discount: product.price / 2 });
    } else {
      props.addToCart(product);
    }
  };

  const addButterWithOffer = () => {
    const product = products.find((product) => product.name === 'Butter')
    props.addToCart({ name: 'Butter', price: product.price * 2 / 3, discount: product.price / 3 });
  };

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - £{product.price.toFixed(2)}{' '}
            <button
              onClick={() => {
                if (product.name === 'Cheese') {
                  addCheeseWithOffer();
                } else if (product.name === 'Bread') {
                  addBreadWithOffer();
                } else if (product.name === 'Butter') {
                  addButterWithOffer();
                } else {
                  props.addToCart(product);
                }
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
            
      <h2>Special Offers:</h2>
      <ul>
        <li>Buy One Get One Free Cheese</li>
        <li>Half Price Bread with Soup</li>
        <li>A third off Butter</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductList);
