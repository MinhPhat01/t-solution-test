import React, { Fragment, useState } from "react";
import IconClose from "../icons/IconClose";

const listMenuItem = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Products",
  },
  {
    id: 4,
    name: "News",
  },
  {
    id: 5,
    name: "Gallery",
  },
  {
    id: 6,
    name: "Contact",
  },
];

const MenuMobileShow = ({ setShowMenuMobile }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="min-h-screen z-[99]">
      <div className="flex items-center justify-between mb-[76px] pt-[48px] px-[32px] pb-[24px] w-full">
        <div className="flex items-start ">
          <img
            src="./logo.png"
            alt=""
            className="w-[120px] h-[50px] ml-[-40px] mt-[-8px]"
          />
          <span className="text-[24px] font-semibold leading-8 ml-[-52px] text-[#23262F]">
            crypter
          </span>
        </div>
        <div onClick={() => setShowMenuMobile(true)} className="mt-[-12px]">
          <IconClose />
        </div>
      </div>
      <div className="flex flex-col">
        {listMenuItem.length > 0 &&
          listMenuItem.map((item, index) => (
            <div
              onClick={() => setSelectedIndex(index)}
              className={`flex items-center w-[375px] h-[64px] pl-[30px] text-[#141416] font-extrabold text-sm leading-[16px] transition-all
              ${
                selectedIndex === index
                  ? "border-l-2 border-[#00A859] text-[#00A859]"
                  : ""
              }`}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuMobileShow;
