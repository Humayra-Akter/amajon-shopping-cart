import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import ProductDetailsModal from "./ProductDetailsModal";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-[305px] h-[400px] border border-[#95a0a7] rounded-lg">
      <img
        className="w-[286px] h-[204px] flex items-center justify-center rounded-lg m-2"
        src={img}
        alt={name}
      />
      <div className="px-5 pb-3">
        <p className="font-normal text-xl text-[#0e161a] mt-2">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </p>
        <p className="mt-1">Price : ${price}</p>
        <p className="mt-1">
          <small>Seller : {seller}</small>
        </p>
        <p className="mt-1">
          <small>Ratings : {ratings} stars</small>
        </p>
      </div>
      <div className="grid grid-cols-2 mx-2 gap-1">
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="h-12 bg-[#fddcab] rounded-r-xl rounded-l-xl  bottom-0 flex items-center justify-center hover:bg[#daa520]"
        >
          <h4 className="mr-1">Add to Cart </h4>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
        <button
          onClick={handleModalOpen}
          className="h-12 bg-[#efba6a] rounded-r-xl rounded-l-xl bottom-12 flex items-center justify-center hover:bg-[#cc7a00]"
        >
          <h4 className="mr-1"> View Details </h4>
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      </div>

      {/* Modal */}
      <ProductDetailsModal
        product={props.product}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default Product;
