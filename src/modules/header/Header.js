import React, { Fragment, useState } from "react";
import IconMenu from "../../components/icons/IconMenu";
import MenuMobileShow from "../../components/menu/MenuMobileShow";
import Search from "../../components/search/Search";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(true);
  const handleShowMenu = () => {
    setShowMenuMobile(false);
  };
  return (
    <Fragment>
      {/* PC */}
      <div className="py-[24px] px-[160px] h-[88px] max-w-[1440px] mx-auto hidden lg:block">
        <div className="flex gap-x-[40px] items-center justify-between mt-[-14px]">
          <div className="flex items-center cursor-pointer gap-x-2">
            <img src="./logo.png" alt="" className=" ml-[-54px]" />
            <span className="text-[24px] font-semibold leading-8 ml-[-72px] text-[#23262F]">
              crypter
            </span>
          </div>
          <div className="flex items-center font-[800] text-sm leading-[16px] text-[#141416] gap-x-[24px] cursor-pointer">
            <span>Home</span>
            <span>About</span>
            <span>Product</span>
            <span>News</span>
            <span>Gallery</span>
            <span>Contact</span>
          </div>
          <Search />
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden max-w-[375px] mx-auto">
        {showMenuMobile ? (
          <div className="pt-[48px] px-[32px] pb-[24px] w-full">
            <div className="flex items-center justify-between">
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
              <div onClick={handleShowMenu} className="mt-[-12px]">
                <IconMenu />
              </div>
            </div>
            <div className="w-full">
              <Search />
            </div>
          </div>
        ) : (
          <MenuMobileShow setShowMenuMobile={setShowMenuMobile} />
        )}
      </div>
    </Fragment>
  );
};

export default Header;
