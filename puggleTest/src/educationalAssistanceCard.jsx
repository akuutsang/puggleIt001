import React from "react";
import logo from "./assets/images/cap.png";
import { ArrowUpRight } from "lucide-react";

export default function EducationalAssistanceCard() {
  return (
    <div className="min-h-[400px] flex justify-center items-center p-4">
      <div className="relative sm:w-[600px] w-[350px]  sm:h-[400px] h-[300px] rounded-[20px] overflow-hidden border-t border-l  border-[#dbdbdf]">
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
          H 600
          V 280
          Q 600 300 580 300
          H 500
          Q 480 300 480 320
          V 380
          Q 480 400 460 400
          H 0
          Z
        "
              />
            </clipPath>
          </defs>

          <rect width="600" height="400" fill="white" clipPath="url(#l-mask)" />

          <path
            d="
      M 0 0
      H 600
      V 280
      Q 600 300 580 300
      H 500
      Q 480 300 480 320
      V 380
      Q 480 400 460 400
      H 0
      Z
    "
            fill="none"
            stroke="#929293"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute bottom-0 right-0 h-[95px] z-10 p-2 ">
          <img
            src={logo}
            alt="Logo"
            className="w-[65px] h-[70px]  sm:w-[100px] sm:h-[90px] mt-6 object-fit "
          />
        </div>

        <div className="absolute  flex flex-col justify-center sm:p-12 p-3 ">
          <h1 className="text-gray-800 text-2xl sm:text-3xl text-left font-bold mb-8 leading-tight flex justify-items-start ">
            Educational Assistance
          </h1>

          <p className="text-gray-600 text-s sm:text-xl sm:mb-12 mb-8  leading-relaxed text-left font-light  ">
            Our team supports academic progress through <br /> individualized
            education plans (IEPS) and
            <br /> learning resources
          </p>

          <button className="bg-white border-2 border-gray-300 text-s sm:text-lg text-gray-800 hover:bg-gray-300 transition-colors duration-200   py-2 px-4  flex items-center gap-3 w-[170px] ">
            Read more
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
