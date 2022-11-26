import React from "react";

const Search = () => {
  return (
    <div className="lg:w-[256px] h-[40px] cursor-pointer">
      <div className="flex items-center py-[10px] px-[16px] border-2 border-[#E6E8EC] rounded-lg">
        <input
          type="text"
          className="text-xs leading-5 text-[#777E91] w-[256px] mr-3"
          placeholder="Search"
        />
        <div className="w-5 h-5">
          <img src="./Shape.png" alt="" className="object-center w-full" />
        </div>
      </div>
    </div>
  );
};

export default Search;
