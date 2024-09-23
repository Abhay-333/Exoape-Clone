import React from "react";
import vid5 from "../Resources/vid5.mp4";

const ImagesSection = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center relative">
      <div className="centerImg w-[50%] relative">
        <img
          className="w-full h-full object-cover object-center"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />

        <div className="image1 w-[6rem] h-[8rem] absolute top-[-20%] right-[-30%]">
          <img
            className="h-full w-full object-cover object-center"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>

        <div className="image2 w-[8rem] aspect-video absolute top-[18%] left-[-35%]">
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover object-center"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>

        <div className="image3 w-[8rem] h-[6rem] absolute bottom-[-18%] left-[-50%]">
          <img
            className="h-full w-full object-cover object-center"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>

        <div className="image4 w-[8rem] aspect-video absolute bottom-[-10%] right-[-40%]">
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover object-center"
            src={vid5}
          ></video>
        </div>
        
      </div>
    </div>
  );
};

export default ImagesSection;
