"use client";
import {motion} from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center m-auto w-full min-h-[800px] overflow-hidden">
      <div className="bottom-1/2 absolute flex justify-center w-full">
        <div className="relative flex justify-center items-center border border-gray-600 rounded-full w-full max-w-[900px] aspect-square">
          <div className="absolute rounded-full w-full h-full">
            <motion.div
              className="top-0 right-0 bottom-0 left-0 absolute"
              animate={{rotate: 360}}
              transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            >
              <div className="bottom-[-25px] left-1/2 absolute bg-[#05051A] p-[3px] border border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden"></div>
              <div className="top-[-25px] left-1/2 absolute bg-[#05051A] p-[3px] border border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden"></div>
            </motion.div>
          </div>
          <div className="relative w-full max-w-[600px] aspect-square">
            <div className="flex justify-center items-center border border-gray-600 rounded-full w-full h-full">
              <div className="shadow-[0px_0px_188px_40px_rgba(85,71,235,0.5)] rounded-full">
                <img className="mt-[100px]" src="/vectors/Logo.svg" alt="" />
              </div>
            </div>
            <motion.div
              className="top-0 right-0 bottom-0 left-0 absolute"
              animate={{rotate: 360}}
              transition={{repeat: Infinity, duration: 30, ease: "linear"}}
            >
              <div className="bottom-[-25px] left-1/2 absolute bg-[#05051A] p-[3px] border border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden"></div>
              <div className="top-[-25px] left-1/2 absolute bg-[#05051A] p-[3px] border border-gray-600 rounded-full w-[50px] h-[50px] overflow-hidden"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
