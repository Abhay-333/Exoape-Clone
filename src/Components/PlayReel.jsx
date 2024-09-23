import React from "react";

const PlayReel = () => {
  return (
    <div className="w-full h-screen bg-black text-white relative">
      
      <div className="overlay flex items-center justify-between h-full w-full flex-col absolute z-[1]">

          <div className="page3-title pt-[5rem] flex items-center justify-center gap-[0.3rem]">
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

            <h1 className="text-sm font-semibold text-center">Work in Motion</h1>
          </div>

          <div className="page3Content text-6xl flex gap-3">
            <h1 className="">
              Play
            </h1>

            <h1>Reel</h1>
          </div>

        <p className="text-center text-xs sm:w-[21%] w-[80%] pb-16">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>

      </div>

      <div className="page3Video aspect-video absolute top-1/2 left-1/2 -translate-x-[50%] sm:w-[10%] opacity-60 scale-[1.2] -translate-y-[50%]">
      <video src="https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1726998606~exp=1727013006~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=be0e8bd45c4402bfa81550dc3a8c91129f149ca344fc4ab36e95c404b90835ed&r=dXMtY2VudHJhbDE%3D"></video>

      </div>

    </div>
  );
};

export default PlayReel;