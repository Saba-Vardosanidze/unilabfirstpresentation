"use client";
import {motion} from "framer-motion";
import {Earth, Mars, Mercury, Sun, Venus} from "@/app/features/images/svg";
import SpaceCard from "../spaceCard/page";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center m-auto w-full min-h-[500px] overflow-hidden">
      <Image
        src="/png/galacticRight.png"
        alt="galactic"
        width={600}
        height={600}
        className="top-[0px] right-[0px] absolute"
      />
      <Image
        src="/png/galacticLeft.png"
        alt="galactic"
        width={600}
        height={600}
        className="top-[0px] left-[0px] absolute"
      />
      <div className="bottom-[120px] absolute flex justify-center w-full">
        <div className="relative flex justify-center items-center border border-gray-600 rounded-full w-full max-w-[900px] aspect-square">
          <div className="absolute rounded-full w-full h-full">
            <motion.div
              className="top-0 right-0 bottom-0 left-0 absolute"
              animate={{rotate: 360}}
              transition={{repeat: Infinity, duration: 20, ease: "linear"}}
            >
              <div className="bottom-[-35px] left-1/2 absolute flex justify-center items-center rounded-full w-[70px] h-[70px] overflow-hidden">
                <Venus width={100} height={100} />
              </div>
              <div className="top-[-35px] left-1/2 absolute flex justify-center items-center rounded-full w-[70px] h-[70px] overflow-hidden">
                <Earth width={100} height={100} />
              </div>
            </motion.div>
          </div>
          <div className="relative w-full max-w-[600px] aspect-square">
            <div className="flex justify-center items-center border border-gray-600 rounded-full w-full h-full">
              <motion.div
                className="shadow-[0px_0px_250px_100px_rgba(255,240,180,0.01)] mt-[100px] rounded-full"
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 20, ease: "linear"}}
              >
                <Sun width={200} height={200} />
              </motion.div>
            </div>
            <motion.div
              className="top-0 right-0 bottom-0 left-0 absolute"
              animate={{rotate: 360}}
              transition={{repeat: Infinity, duration: 30, ease: "linear"}}
            >
              <div className="bottom-[-35px] left-1/2 absolute flex justify-center items-center rounded-full w-[70px] h-[70px] overflow-hidden">
                <Mars width={50} height={50} />
              </div>
              <div className="top-[-35px] left-1/2 absolute flex justify-center items-center rounded-full w-[70px] h-[70px] overflow-hidden">
                <Mercury width={120} height={120} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bottom-[50px] z-40 absolute flex lg:flex-row flex-col justify-center gap-[15px] px-[120px] w-full max-w-[1488px] min-h-[200px]">
        <SpaceCard
          title="Birth of Stars"
          description="Deep within nebulae, clouds of dust and gas give rise to new stars — the cosmic cradle where the building blocks of life are formed."
        />
        <SpaceCard
          title="Mystery of the Black Hole"
          description="With unimaginable gravity, a black hole pulls in everything around it — even light. It remains one of the most fascinating enigmas of the universe."
        />
        <SpaceCard
          title="Journey Through Space"
          description="Humanity’s dream beyond the stars — through rockets, satellites, and perhaps one day, footprints on Mars — we are stepping into a new era of cosmic exploration."
        />
      </div>
    </div>
  );
};

export default HeroSection;
