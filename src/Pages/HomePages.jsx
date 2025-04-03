import React from "react";
import Banner from "../PageEliment/Banner";
import LeftPciture from "../assets/Client.png";
import PerfectClient from "../assets/PerfectClinet.png";
import Button from "../PageEliment/Button";
import MikeImage from "../assets/MikeImage.png";
import BrandPicture from "../assets/BrandPicture.png";
import Header from "../PageEliment/Header";
const HomePages = () => {
  return (
    <div className="">
      <Banner />
      <div>
        <div className="pt-[111px] pb-[111px] pl-[81px] pr-[81px]">
          {/* frustrated CLient */}
          <div className="flex justify-between items-center">
            <div className="Left">
              <Header
                StyleName={"font-black text-[44px] font-nunito "}
                titlecontent={"Frustration of "}
                lastcontent={"Clients"}
              />

              <p className="text-[18px] font-normal font-Lora max-w-[583px] mt-[22px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <ul className="mt-[26px] flex flex-col gap-[10px]">
                <li className="font-Lora text-[18px] font-normal">
                  Loren rasion gravida auem is bibenua tase
                </li>
                <li className="font-Lora text-[18px] font-normal">
                  Lorem Ipsum is simply dummy text of the.
                </li>
                <li className="font-Lora text-[18px] font-normal">
                  Printing and typesetting industry. Lorem Ipsum
                </li>
                <li className="font-Lora text-[18px] font-normal max-w-[505px]">
                  When an unknown printer took a galley of type and scrambled it
                </li>
              </ul>
            </div>
            <div className="right">
              <picture>
                <img src={LeftPciture} alt={LeftPciture} />
              </picture>
            </div>
          </div>
          {/* Perfect Solution */}
          <div className="flex justify-between items-center">
            <div className="left">
              <picture>
                <img src={PerfectClient} alt={PerfectClient} />
              </picture>
            </div>
            <div className="Right">
              <Header
                StyleName={"font-black text-[44px] font-nunito max-w-[442px]"}
                titlecontent={"Perfect Solution for Your "}
                lastcontent={"Bussiness"}
              />

              <p className="text-[18px] font-normal font-Lora max-w-[583px] mt-[18px] mb-[40px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <Button
                ButtonText={"Read More"}
                buttonClass={
                  "font-nunito text-[18px] text-white font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-yellow rounded"
                }
              />
            </div>
          </div>
          {/* Reason To Choose */}
        </div>
        <div className="bg-graythird  pl-[81px] pr-[81px]">
          <div className="flex justify-center items-center flex-col pt-[97px] pb-[97px] ">
            <Header
              StyleName={"font-black text-[44px] font-nunito"}
              titlecontent={"Reason to Choose"}
              lastcontent={"Us"}
            />

            <p className="max-w-[864px] font-normal text-[18px] font-Lora">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <div className="flex gap-[36px] mt-[50px]">
              <Button
                ButtonText={"Market Research"}
                buttonClass={
                  "font-nunito text-[18px] text-graySecond font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-white rounded ease-in-out duration-300 hover:bg-yellow hover:text-white "
                }
              />
              <Button
                ButtonText={"Branding"}
                buttonClass={
                  "font-nunito text-[18px] text-graySecond font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-white rounded ease-in-out duration-300 hover:bg-yellow hover:text-white"
                }
              />
              <Button
                ButtonText={"Reporting"}
                buttonClass={
                  "font-nunito text-[18px] text-graySecond font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-white rounded ease-in-out duration-300 hover:bg-yellow hover:text-white"
                }
              />

              <Button
                ButtonText={"Data Analysis"}
                buttonClass={
                  "font-nunito text-[18px] text-graySecond font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-white rounded ease-in-out duration-300 hover:bg-yellow  hover:text-white"
                }
              />
            </div>

            <div className="flex justify-between gap-[130px] rounded-[30px] bg-white pl-[44px] pb-[66px] pr-[45px] pt-[66px] mt-[60px]">
              <div className="left">
                <picture>
                  <img src={BrandPicture} alt={BrandPicture} />
                </picture>
              </div>
              <div className="right">
                <div className="relative">
                  <picture className="absolute top-0 left-[-80px] ">
                    <img src={MikeImage} alt={MikeImage} />
                  </picture>
                  <Header
                    StyleName={"font-bold text-[30px] font-nunito"}
                    titlecontent={""}
                    lastcontent={"Branding"}
                  />
                  <p className="font-Lora text-[18px] font-normal max-w-[505px] leading-[176%]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type
                  </p>
                  <Button
                    buttonClass={
                      "font-nunito text-[18px] text-white font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-black rounded mt-[30px]"
                    }
                    ButtonText={"Read More"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="pt-[100px] pb-[100px] flex justify-center items-center flex-col">
                <Header
                  StyleName={"font-black text-[44px] font-nunito"}
                  titlecontent={"Our Research & Case "}
                  lastcontent={"Studies"}
                />
                <p className="max-w-[864px] mt-[28px] text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </div>

              <div className="flex justify-between">
                <div className="left">
                  <h3 className="font-bold text-[30px] font-nunito">
                    Lorem ipsum dolor sit.
                  </h3>

                  <p className="text-[18px] font-Lora font-normal max-w-[547px] mt-[13px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took.
                  </p>
                  <Button
                    ButtonText={"Read More"}
                    buttonClass={
                      "font-nunito text-[18px] text-white font-bold pl-[20px] pr-[20px] pb-[10px] pt-[10px] bg-yellow rounded mt-[21px]"
                    }
                  />
                </div>
                <div className="right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
