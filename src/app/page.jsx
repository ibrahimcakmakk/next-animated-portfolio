"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div 
      className="h-full"
      initial={{y:"-200vh"}}
      animate={{y:"0%"}}
      transition={{duration:1}}
      >
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/*Image Container */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image unoptimized={true} src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/*Text Container */}
      <div className="h-1/2 flex flex-col gap-8 lg:h-full lg:w-1/2 items-center justify-center">
        {/*Title */}
        <h1 className="text-4xl font-bold md:text-6xl">
          Crafting Digital Experiences, Designing Tomorrow
        </h1>
        {/*Description */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence
        </p>
        {/*button */}
        <div className="flex gap-4">
          <a href="/portfolio">
          <button  className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Works
          </button>
          </a>
          <a href="/contact">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Contact Me
          </button>
          </a>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
