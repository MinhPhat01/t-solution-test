import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";

const OurNewsMobile = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [offset, setOffSet] = useState(-3);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://mic.t-solution.vn/api/v2/pages/?type=news.NewsDetailPage&fields=*&offset=${offset}&limit=${limit}`
        );
        setData(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [limit, offset]);
  const handleSeeMore = () => {
    setLimit(limit + 3);
    setOffSet(0);
  };

  return (
    <div className="px-[32px]">
      <h2 className="mt-[17px] mb-[31px] w-[118px] h-[36px] text-[24px] leading-[35.5px] text-[#000000] font-bold mx-auto">
        Our News
      </h2>
      <div className="grid grid-cols-1 gap-y-[32px]">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <Post
                key={item.id}
                img={item.thumbnail}
                title={item.title}
                time={item.last_published_at}
              />
            );
          })}
      </div>
      <div className="mt-[40px] mb-[45px] w-[122px] h-[48px] mx-auto cursor-pointer flex items-center justify-center select-none rounded-[90px]">
        <button
          onClick={() => handleSeeMore()}
          className={`font-[800] text-base leading-[16px] text-[#FCFCFD] w-full h-full bg-[#000000] rounded-[90px] ${
            limit === 12 ? "bg-opacity-50" : ""
          }`}
          disabled={limit === 12}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default OurNewsMobile;
