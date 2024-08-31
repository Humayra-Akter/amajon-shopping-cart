import React from "react";

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>
        <img
          className="w-full h-[300px] object-cover rounded-lg"
          src={product.img}
          alt={product.name}
        />
        <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
        <p className="mt-2">Category: {product.category}</p>
        <p className="mt-2">Seller: {product.seller}</p>
        <p className="mt-2">Price: ${product.price}</p>
        <p className="mt-2">Stock: {product.stock} available</p>
        <p className="mt-2">Ratings: {product.ratings} stars</p>
        <p className="mt-2">Ratings Count: {product.ratingsCount}</p>
        <p className="mt-2">Shipping: ${product.shipping}</p>
        <p className="mt-2">Quantity: {product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModal;