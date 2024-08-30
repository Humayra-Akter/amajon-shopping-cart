import React from "react";

const Cart = ({ cart, children }) => {
  const calculateTotals = () => {
    let total = 0;
    let shippingTotal = 0;
    let quantity = 0;

    cart.forEach((product) => {
      quantity += product.quantity;
      total += product.price * product.quantity;
      shippingTotal += product.shipping;
    });

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shippingTotal + tax;

    return { total, shippingTotal, tax, grandTotal, quantity };
  };

  const { total, shippingTotal, tax, grandTotal, quantity } = calculateTotals();

  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingTotal}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      {children}
    </div>
  );
};

export default Cart;
