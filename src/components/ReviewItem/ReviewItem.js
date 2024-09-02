import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, img, price, shipping, quantity } = product;

  return (
    <div className="border border-[#95a0a7] rounded-lg p-2 mt-5 h-28 w-[500px] left-0 top-0 flex justify-between mx-20">
      <img className="w-24 h-24 rounded-md" src={img} alt={name} />
      <div className="w-full ml-4">
        <p className="text-md font-semibold" title={name}>
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </p>
        <p>
          Price: <span className="price">${price}</span>
        </p>
        <p>Shipping: ${shipping}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button
        onClick={() => handleRemoveProduct(product)}
        className="p-1 border rounded-full top-0 right-0 h-6 cursor-pointer"
      >
        <FontAwesomeIcon className="text-sm text-red-700" icon={faTrash} />
      </button>
    </div>
  );
};

export default ReviewItem;
