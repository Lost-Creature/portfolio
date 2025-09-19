import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeBlock from "../utls/CodeBlock"
const codeSnippet = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
    return 0;
}`;
import Lighting from "../assets/icons/lighting.svg"
import NextjsIcon from '../assets/icons/Nextjs.svg';
import TypescriptIcon from '../assets/icons/Typescript.svg';
import mern from '../assets/icons/mern.png';
import GitIcon from '../assets/icons/Git.svg';
import TailwindcssIcon from '../assets/icons/Tailwindcss.svg';
const Experience = () => {
  const icons = [
    { src: NextjsIcon, alt: "Next.js", color: "#fff" },
    { src: TypescriptIcon, alt: "TypeScript", color: "#3178c6" },
    { src: mern, alt: "MERN Stack", color: "#61dafb" },
    { src: TailwindcssIcon, alt: "Tailwind CSS", color: "#38bdf8" },
    { src: GitIcon, alt: "Git", color: "#f34f29" },
  ];
  const TOTAL_BOXES = 24;
  const activeIndices = [7, 8, 9, 10, 16];
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const iconMap = new Map();
  activeIndices.forEach((idx, i) => {
    if (i < icons.length) iconMap.set(idx, icons[i]);
  });

  return (
    <section className="w-full max-md:h-440 h-220 flex flex-col gap-y-7 mb-10 max-md:p-0 px-10">
      <div className="w-full h-[15%] flex flex-col gap-y-5 justify-center items-center">
        <h1 className="text-5xl max-md:text-3xl font-montserrat font-black">Interactive Layouts</h1>
        <h3 className="font-semibold max-md:text-sm text-[#818080]">
          Our Projects make Web Dev interactive again
        </h3>
      </div>

      <div className="w-full flex justify-center gap-x-10 max-md:h-full max-md:flex-col max-md:gap-y-5  h-[42.5%] items-center">
  <div className="w-[40%]  max-md:w-full h-full relative ">
    <CodeBlock code={codeSnippet} language="cpp" />
  </div>
      <div className="relative overflow-hidden w-[60%] max-md:w-full  h-full bg-[#0f0f0f] border-[#252525] border-2 rounded-xl flex items-center  ">
        <h2 className="relative text-[6em] uppercase text-[#0e3742] text-center w-full tracking-[6px] ST">Text</h2>
<div className="absolute top-60 right-10">

<input id="checkbox" onClick={() => document.querySelector(".ST").classList.toggle("active")} type="checkbox" />
<label className="switch" for="checkbox">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="slider">
    <path
      d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
      ></path>
  </svg>
</label>
      </div>

        </div>
      </div>

      <div className="w-full flex max-md:gap-y-5   justify-center gap-x-10 max-md:h-full max-md:flex-col h-[42.5%] overflow-hidden items-center">
        <div className="w-[60%] max-md:w-full max-md:h-full relative overflow-hidden h-full bg-[#1a1919] border-[#252525] border-2 items-center rounded-xl">
          <div className="grid grid-cols-6 max-md:grid-cols-5   gap-x-0 min-h-full gap-y-5 items-center w-full overflow-hidden target">
            {Array.from({ length: TOTAL_BOXES }).map((_, i) => {
              const icon = iconMap.get(i);
              const isActive = icon !== undefined;

              return (
                <div key={i} className="relative flex-col">
                  <motion.div
                    onClick={() => setClickedIndex(i)}
                    whileHover={{
                      scale: isActive ? 1.1 : 1,
                      boxShadow: isActive ? `0 0 20px ${icon.color}` : "none",
                    }}
                    className={`w-20 h-20 rounded-xl ml-3.5 cursor-pointer flex items-center justify-center transition-all duration-300 ${
                      isActive ? "bg-zinc-900" : "bg-zinc-800/30"
                    }`}
                  >
                    {icon && (
                     <img
                     src={icon.src} 
                     alt={icon.alt}
                     className="w-[80%] h-[80%] object-contain"
                   />
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="light"></div>
          <div className="bottom-12 flex flex-col items-center gap-y-3 w-full left-[50%] translate-x-[-50%] absolute ">
            <h1 className="font-bold font-montserrat text-xl">Rich Technologies</h1>
            <h3 className="font-semibold font-nunito text-[#868383]">
              Powering our Work with Latest technologies
            </h3>
          </div>
        </div>

        <div className="relative max-md:w-full w-[40%] h-full bg-[#1a1919] border-[#252525] border-2 rounded-xl overflow-hidden">
  
  <img
    src={Lighting}
    alt="Lighting Icon"
    width={200}
    height={200}
    className="absolute  left-1/2  top-35 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
  />
  <div className="absolute bottom-8 flex flex-col gap-y-3 left-1/2 transform w-full -translate-x-1/2 text-xl z-10 font-bold font-montserrat text-white text-center px-4">
    <h1>Fast In Building</h1>
    <p className="text-sm text-[#868383]">
      Making Projects in the Fastest Time Possible
      </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Experience;
