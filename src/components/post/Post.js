import React from "react";

const Post = ({ img, title, time }) => {
  return (
    <div className="lg:w-[352px] w-[311px] h-[506px] flex flex-col gap-y-[16px] overflow-hidden">
      <div className="w-full h-[240px] cursor-pointer rounded-lg">
        <img
          src={img || "./no-img.png"}
          alt=""
          className="object-center w-full h-[240px] rounded-lg"
        />
      </div>
      <div className="cursor-pointer">
        <h3 className="mb-2 text-[24px] leading-[32px] text-[#000000] font-semibold limit-text">
          {title || "Awesome collection"}
        </h3>
        <p className="font-bold text-xs leading-3 uppercase text-[#23262F]">
          {time.slice(0, 10) || "26/10/2022"}
        </p>
      </div>
      <div className="text-base leading-[24px] text-[#777E91] text-justify h-[168px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum
        deserunt nisi doloribus, repellat ullam similique ipsam modi,
        laboriosam, suscipit dolorum fugiat eum animi repellendus quod deleniti
        quo velit illo.
      </div>
    </div>
  );
};

export default Post;
