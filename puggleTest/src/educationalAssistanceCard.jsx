import React from "react";
import logo from "./assets/images/logo2.png";
import { ArrowUpRight } from "lucide-react";

export default function EducationalAssistanceCard() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-4">
      <div className="relative w-[600px] h-[400px] rounded-[20px] shadow-lg overflow-hidden">
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

          <rect
            width="600"
            height="400"
            fill="white"
            clipPath="url(#l-mask)"
            rx="20"
            ry="20"
          />
        </svg>

        <div className="absolute top-0 right-0 h-[95px] z-10 p-2">
          <img
            src={logo}
            alt="Logo"
            className="w-[60px] h-[85px] sm:w-[100px] sm:h-[90px] object-contain"
          />
        </div>

        {/* Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center p-12">
          <h1 className="text-gray-600 text-3xl sm:text-5xl font-bold mb-8 leading-tight flex justify-items-start w-[400px]">
            Family Support
          </h1>

          <p className="text-gray-500 text-s sm:text-xl mb-12 leading-relaxed text-left font-light  ">
            We offer counseling and guidance to families, <br /> equipping them
            with strategies to foster growth <br /> and resilience.
          </p>

          <button className="bg-white border-2 text-s sm:text-lg text-gray-600 hover:bg-gray-300 transition-colors duration-200  font-semibold py-2 px-8 rounded-lg flex items-center justify-center gap-3 w-[250px] ">
            Read more
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
