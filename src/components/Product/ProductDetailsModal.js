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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mt-2">
              <span className="font-semibold">Category:</span>
              {product.category}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Seller: </span>
              {product.seller}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Price: </span> ${product.price}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Stock: </span>
              {product.stock} available
            </p>
          </div>
          <div>
            <p className="mt-2">
              <span className="font-semibold">Ratings: </span>
              {product.ratings} stars
            </p>
            <p className="mt-2">
              <span className="font-semibold">Ratings Count: </span>
              {product.ratingsCount}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Shipping: </span> $
              {product.shipping}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Quantity: </span>
              {product.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
