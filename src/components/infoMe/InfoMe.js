import React from "react";
import IconEmail from "../icons/IconEmail";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconLinkedIn from "../icons/IconLinkedIn";
import IconMap from "../icons/IconMap";
import IconPhone from "../icons/IconPhone";
import IconTwitter from "../icons/IconTwitter";

const InfoMe = () => {
  return (
    <div className="flex flex-col gap-y-[16px] mt-[28px]">
      <div className="flex flex-col gap-y-2">
        <span className="flex items-center gap-x-2 text-xs leading-[20px] text-[#23262F]">
          <IconMap /> 373A Tran Phu St, Ward 8, District 5, HCM City
        </span>
        <span className="flex items-center gap-x-2 text-xs leading-[20px] text-[#23262F]">
          <IconEmail /> vanphong@tbgdphanmic.vn
        </span>
        <span className="flex items-center gap-x-2 text-xs leading-[20px] text-[#23262F]">
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
  );
};

export default InfoMe;
