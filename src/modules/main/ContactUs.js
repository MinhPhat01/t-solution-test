import React, { Fragment } from "react";
import Form from "../../components/form/Form";
import InfoMe from "../../components/infoMe/InfoMe";
import Map from "../../components/map/Map";

const ContactUs = () => {

  return (
    <Fragment>
      <div className="lg:px-[160px] px-[32px] mb-[64px]">
        <h3 className="text-[#000000] w-[136px] h-[36px] font-bold text-[24px] leading-[36px] mx-auto mb-[47px]">
          Contact Us
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[32px]">
          <div className="flex flex-col gap-y-[28px] lg:block hidden">
            <Map />
            <InfoMe />
          </div>
          <div className="">
            <h3 className="text-base font-medium text-[#23262F] mb-[32px]">
              Please send us a message if you need any help!
            </h3>
            <Form />
          </div>
        </div>
        
      </div>
    </Fragment>
  );
};

export default ContactUs;
