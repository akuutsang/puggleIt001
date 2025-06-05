import React from "react";
import bgImage from "./assets/images/bg.jpeg";
import logo from "./assets/images/logo.jpg";
import { ArrowUpRight } from "lucide-react";
import EducationalAssistanceCard from "./educationalAssistanceCard";

export default function FamilySupportCard() {
  return (
    <>
      <div className="min-h-[400px] flex justify-center items-center bg-gray-200 p-4 ">
        <div className="relative sm:w-[600px] w-[350px] sm:h[400px] h-[300px]  rounded-[20px] shadow-lg overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 600 400"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="l-mask" clipPathUnits="userSpaceOnUse">
                <path
                  d="
                  M 0 0
                  H 460
                  Q 480 0 480 20
                  V 80
                  Q 480 100 500 100
                  H 580
                  Q 600 100 600 120
                  V 400
                  H 0
                  Z
                "
                />
              </clipPath>
            </defs>
            <image
              href={bgImage}
              width="600"
              height="400"
              clipPath="url(#l-mask)"
              style={{ borderRadius: "20px" }}
            />
          </svg>

          <div className="absolute  top-0  h-[95px] rounded-3xl  right-0 z-10 box-border  ">
            <div>
              <img
                src={logo}
                alt="Logo"
                className="w-[65px] h-[70px] sm:w-[100px] sm:h-[90px] mb-6 object-fit  "
              />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center sm:p-12 p-3">
            <h1 className="text-white text-3xl sm:text-3xl font-semibold mb-8 leading-tight flex justify-items-start w-[400px]">
              Family Support
            </h1>

            <p className="text-gray-300 text-s sm:text-xl sm:mb-12 mb-8 leading-relaxed text-left font-light  ">
              We offer counseling and guidance to families, <br /> equipping
              them with strategies to foster growth <br /> and resilience.
            </p>

            <button className="bg-orange-400 hover:bg-orange-500 transition-colors duration-200 text-white  py-2 px-4  flex items-center justify-start  gap-3 w-[170px] text-s sm:text-lg">
              Read more
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
