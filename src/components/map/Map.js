/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <div className="lg:w-[544px] w-[311px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.862486436508!2d106.67147064110854!3d10.755666748483996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efcf58d2d0f%3A0xe242e3b48b8962df!2zQ3R5IENQIFRoaeG6v3QgQuG7iyBHacOhbyBE4bulYyBNaW5oIMSQ4bupYyAtIE1JQw!5e0!3m2!1svi!2s!4v1669349768418!5m2!1svi!2s"
        className="bg-[#F4F5F6] lg:border-[16px] rounded-2xl lg:w-[544px] lg:h-[450px] w-[311px] h-[177px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
