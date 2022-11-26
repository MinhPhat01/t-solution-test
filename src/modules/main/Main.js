import React, { useState } from "react";
import IconBackTop from "../../components/icons/IconBackTop";
import ContactUs from "./ContactUs";
import OurNews from "./OurNews";
import OurNewsMobile from "./OurNewsMobile";

const Main = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="flex flex-col lg:max-w-[1440px] max-w-[375px] mx-auto relative">
      <div className="hidden lg:block">
        <OurNews />
      </div>
      <div className="block lg:hidden">
        <OurNewsMobile />
      </div>
      <ContactUs />
      {visible && (
        <div
          onClick={scrollToTop}
          className="absolute bottom-[60px] right-0 w-[40px] h-[40px] cursor-pointer hidden lg:block"
        >
          <IconBackTop />
        </div>
      )}
    </div>
  );
};

export default Main;
