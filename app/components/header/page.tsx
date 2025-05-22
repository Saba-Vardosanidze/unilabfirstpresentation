import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="flex justify-center items-center bg-[#050523] px-[35px] border-gray-600 border-b w-full min-h-[89px]">
      <div className="flex justify-between w-full max-w-[1440px]">
        <div className="flex gap-[87px]">
          <Image
            className="cursor-pointer"
            src="/vectors/Logo.svg"
            alt="siteLogo"
            width={50}
            height={50}
          />
          <ul className="hidden lg:flex items-center gap-[40px] text-white">
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Jupiter</li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-[35px] text-[12px] text-white">
          <button className="flex justify-center items-center px-[32px] py-[8px] cursor-pointer">
            Request A Demo
          </button>
          <button className="flex justify-center items-center px-[25px] py-[8px] cursor-pointer">
            Start your free trial
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
