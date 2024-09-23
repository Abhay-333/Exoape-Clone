import React from "react";

const SpreadSection = () => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-start flex-col">
      <div className="page2-title flex items-center  gap-[0.3rem]">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon w-[1rem]"
          data-v-669b4a84=""
        >
          <path
            d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
            fill="currentColor"
            data-v-669b4a84=""
          ></path>
        </svg>

        <h1 className="text-lg font-semibold">In the media</h1>
      </div>

      <div className="Spread-content w-full h-full flex item-center justify-start flex-col">
        <h3 className="text-6xl text-center tracking-tighter mt-10">Spread</h3>
        <h3 className="text-6xl text-center tracking-tighter">the News</h3>
        <p className="text-lg text-center mt-12 sm:w-[30%] mx-auto">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
      </div>
    </div>
  );
};

export default SpreadSection;
