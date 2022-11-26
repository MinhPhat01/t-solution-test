import React, { Fragment } from "react";
import IconEmail from "../../components/icons/IconEmail";
import IconFacebook from "../../components/icons/IconFacebook";
import IconInstagram from "../../components/icons/IconInstagram";
import IconLinkedIn from "../../components/icons/IconLinkedIn";
import IconMap from "../../components/icons/IconMap";
import IconPhone from "../../components/icons/IconPhone";
import IconTwitter from "../../components/icons/IconTwitter";
import Map from "../../components/map/Map";

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-[#1E1E1E] pt-[80px] hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-[160px]">
          <div className="flex gap-x-[32px] items-start justify-between pb-[48px]">
            <div className="flex w-[192px] gap-x-2 items-center ml-[-62px] mt-[-26px]">
              <img src="./logo.png" alt="" className="" />
              <span className="text-[#FCFCFD] text-2xl font-semibold ml-[-88px]">
                crypter
              </span>
            </div>
            <div className="w-[136px] flex flex-col text-[#FCFCFD]">
              <h3 className="mb-[40px] text-base font-medium">Menu</h3>
              <div className="flex flex-col gap-y-[24px] text-sm leading-[16px] font-extrabold">
                <span>About</span>
                <span>News</span>
                <span>Gallery</span>
              </div>
            </div>
            <div className="w-[136px] flex flex-col text-[#FCFCFD]">
              <h3 className="mb-[40px] text-base font-medium">Products</h3>
              <div className="flex flex-col gap-y-[24px] text-sm leading-[16px] font-extrabold">
                <span>Chalkboard Chalk</span>
                <span>School Supplies and Student Tools</span>
                <span>Office Supplies</span>
                <span>Art Supplies</span>
              </div>
            </div>
            <div className="w-[394px] flex flex-col text-[#FCFCFD]">
              <h3 className="mb-[40px] text-base font-medium">Address</h3>
              <div className="flex flex-col gap-y-[16px]">
                <div className="flex flex-col gap-y-2">
                  <span className="flex items-center gap-x-2 text-xs leading-[20px] ">
                    <div className="text-[#FCFCFD]">
                      <IconMap />
                    </div>{" "}
                    373A Tran Phu St, Ward 8, District 5, HCM City
                  </span>
                  <span className="flex items-center gap-x-2 text-xs leading-[20px]">
                    <IconEmail /> vanphong@tbgdphanmic.vn
                  </span>
                  <span className="flex items-center gap-x-2 text-xs leading-[20px]">
                    <IconPhone /> +(84) 28 3924 1814
                  </span>
                </div>
                <div className="flex gap-x-2">
                  <IconFacebook />
                  <IconInstagram />
                  <IconLinkedIn />
                  <IconTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="py-[32px] border-t border-[#E6E8EC] text-xs leading-[20px] text-[#FCFCFD]">
            Copyright © 2022 T-SOLUTION. All rights reserved
          </div>
        </div>
      </div>
      <div className="block lg:hidden bg-[#1E1E1E]">
        <div className="max-w-[375px] mx-auto px-[32px] pt-[64px]">
          <div className="flex flex-col">
            <div className="pb-[32px] border-b border-[#F4F5F6] flex items-center">
              <img
                src="./logo.png"
                alt=""
                className="w-[160px] ml-[-58px] mt-[-20px]"
              />
              <span className="text-[24px] text-white leading-[32px] font-semibold ml-[-68px] mt-[-26px]">
                crypter
              </span>
            </div>
            <div className="py-[32px] border-b border-[#F4F5F6] flex flex-col gap-y-[24px] text-[#FCFCFD]">
              <h3 className="text-base font-medium">Menu</h3>
              <span className="text-xs leading-5">About</span>
              <span className="text-xs leading-5">New</span>
              <span className="text-xs leading-5">Gallery</span>
            </div>
            <div className="py-[32px] border-b border-[#F4F5F6] flex flex-col gap-y-[24px] text-[#FCFCFD]">
              <h3 className="text-base font-medium">Address</h3>
              <div className="flex flex-col gap-y-2">
                <span className="flex items-center gap-x-2 text-xs leading-[20px] ">
                  <div className="text-[#FCFCFD]">
                    <IconMap />
                  </div>{" "}
                  373A Tran Phu St, Ward 8, District 5, HCM City
                </span>
                <span className="flex items-center gap-x-2 text-xs leading-[20px]">
                  <IconEmail /> vanphong@tbgdphanmic.vn
                </span>
                <span className="flex items-center gap-x-2 text-xs leading-[20px]">
                  <IconPhone /> +(84) 28 3924 1814
                </span>
              </div>
            </div>
            <div className="pt-[32px] pb-[48px]">
              <Map />
            </div>
          </div>
        </div>
        <div className="py-[24px] border-t border-[#F4F5F6]">
          <div className="max-w-[375px] mx-auto px-[32px]">
            <div className="flex gap-x-2 text-white items-center justify-center mb-[24px]">
              <IconFacebook />
              <IconInstagram />
              <IconLinkedIn />
              <IconTwitter />
            </div>
            <div className="text-[#FCFCFD] text-xs leading-5 flex items-center justify-center">
              Copyright © 2022 T-SOLUTION. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
