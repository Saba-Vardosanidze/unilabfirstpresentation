import Image from "next/image";
import {planetList} from "@/app/data/headerList";
const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center bg-[#050523] px-[35px] w-full min-h-[89px]">
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
              {planetList.map((res, index) => (
                <li
                  className="hover:text-[#8b81f8] transition-all duration-300 ease-in-out cursor-pointer"
                  key={index}
                >
                  {res.planet}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-[35px] text-[12px] text-white">
            <button className="hidden lg:flex justify-center items-center hover:bg-[#5547eb] px-[32px] py-[8px] border border-[#5547eb] rounded-[10px] text-[#5547eb] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
              Request A Demo
            </button>
            <button className="flex justify-center items-center bg-[#5547eb] px-[25px] py-[8px] rounded-[10px] cursor-pointer">
              Start your free trial
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[linear-gradient(90deg,rgba(197,197,197,0)_0%,rgba(197,197,197,0.14)_20%,rgba(209,64,9,0.54)_50%,rgba(197,197,197,0.14)_80%,rgba(197,197,197,0)_100%)] w-full h-[1px]"></div>
    </header>
  );
};

export default Header;
