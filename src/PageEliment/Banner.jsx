import React from "react";
import Bannerimg from "../assets/LongBannerImage.png";

import MainBanner from '../assets//MainBannerImage.png'
import Button from "./Button";
const Banner = () => {
  return (
    <div className="container">
      <div>
        <div className="w-[100%] h-[100%] relative">
          <picture>
            <img
              src={Bannerimg}
              alt={Bannerimg}
              className="w-full h-full object-cover opacity-[0.2]"
            />
          </picture>
          <div className="absolute right-0 top-8">
            <picture>
              <img
                src={MainBanner}
                alt={MainBanner}
                className="w-[920px] h-[650px]"
              />
            </picture>
          </div>
          <div className="absolute top-[172px] left-[81px] ">
            <h1 className="text-[48px] font-bold tracking-[2px]">
              Get Bussiness <br /> Solutions with{" "}
              <span className="text-[52px] font-bold">TheFirm.</span>
            </h1>
            <p className="text-[18px] font-normal font-Lora w-[437px] mb-[32px] mt-[28px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <Button
              buttonClass={
                "font-nunito text-[18px] text-white font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-yellow rounded"
              }
              ButtonText={"Get In Touch"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
