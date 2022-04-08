import React from 'react';
import './Cart.css'

const Cart = (props) => {
      const { cart } = props;

      let total = 0;
      let shippingTotal = 0;
      let quantity = 0;

      for (const product of cart) {
            quantity = quantity + product.quantity;
            total = total + product.price * product.quantity;
            shippingTotal = shippingTotal + product.shipping;
      }

      const tax = parseFloat((total * 0.1).toFixed(2));

      const grandTotal = total + shippingTotal + tax;
      return (
            <div className='cart'>
                  <h2>Order Summary</h2>
                  <p>Selected Items : {quantity}</p>
                  <p>Total Price: ${total}</p>
                  <p>Total Shipping Charge: ${shippingTotal}</p>
                  <p>Tax: ${tax}</p>
                  <h4>Grand Total: ${grandTotal}</h4>
                  {props.children}
            </div>
      );
};

export default Cart;