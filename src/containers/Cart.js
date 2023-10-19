

import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import './Cart.css';
const Cart = (props) => {
  const { cart, specialOffers } = props;

  const total = cart.reduce((total, item) => total + item.price, 0);

  const discount = cart.reduce((total, item) => total + item.discount, 0);

  const subtotal = total + discount;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - £{item.price.toFixed(2)}{' '}
            <button onClick={() => props.removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Sub Total: £{subtotal.toFixed(2)}</h2>
      <h2>Savings: £{discount.toFixed(2)}</h2>
      <h2>Total Amount: £{total.toFixed(2)}</h2>
    </div>
  );
}; 

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    specialOffers: state.specialOffers,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
