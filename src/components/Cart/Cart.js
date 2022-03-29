import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
      console.log(cart);

      let total = 0;
      let shippingTotal = 0;

      for (const product of cart) {
            total = total + product.price;
            shippingTotal = shippingTotal + product.shipping;
      }

      const tax = parseFloat((total * 0.1).toFixed(2));

      const grandTotal = total + shippingTotal + tax;
      return (
            <div className='cart'>
                  <h2>Order Summary</h2>
                  <p>Selected Items : {cart.length}</p>
                  <p>Total Price: ${total}</p>
                  <p>Total Shipping Charge: ${shippingTotal}</p>
                  <p>Tax: ${tax}</p>
                  <h4>Grand Total: ${grandTotal}</h4>
            </div>
      );
};

export default Cart;