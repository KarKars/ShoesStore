import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
const ItemSold = ({ item, deleteItem, editItem }) => {
  const { id, brand, model, size, price } = item;
  return (
    <div className="List-item-container" key={id}>
      <h1>{brand}</h1>
      <h1>{model}</h1>
      <h1>{size}</h1>
      <h1>{price}</h1>
      <div className="btn-container">
        <button className="btn success ">
          <AiFillEdit onClick={() => editItem(id)} />
        </button>
        <button className="btn danger">
          <AiFillDelete onClick={() => deleteItem(id)} />
        </button>
      </div>
    </div>
  );
};

export default ItemSold;
