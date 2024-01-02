import React, { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  console.log("data:::", showItems);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    //  Header
    <div>
      <div className="bg-gray-50 w-6/12 shadow-lg p-4 my-6 m-auto">
        <div onClick={handleClick} className="flex justify-between">
          <span className="font-bold ">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
          {/* // Accordian Body */}
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default ResCategory;
