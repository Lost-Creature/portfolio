import { useState } from "react";
import { motion } from "framer-motion";
import PercentageViewer from "../compounts/PercentageViewer.jsx";
import ReactIcon from '../assets/icons/React.svg';
import NextjsIcon from '../assets/icons/Nextjs.svg';
import TypescriptIcon from '../assets/icons/Typescript.svg';
import JSIcon from '../assets/icons/JS.svg';
import HtmlIcon from '../assets/icons/Html.svg';
import CssIcon from '../assets/icons/Css.svg';
import MongodbIcon from '../assets/icons/Mongodb.svg';
import ExpressIcon from '../assets/icons/Express.svg';
import NodeIcon from '../assets/icons/Node.svg';
import BootstrapIcon from '../assets/icons/Bootstrap.svg';
import TailwindcssIcon from '../assets/icons/Tailwindcss.svg';
import ReduxIcon from '../assets/icons/Redux.svg';
import GitIcon from '../assets/icons/Git.svg';

const icons = [
  { src: ReactIcon, alt: "React.js", color: "#61dafb", percentage: 80 },
  { src: NextjsIcon, alt: "Next.js", color: "#ffffff", percentage: 50 },
  { src: TypescriptIcon, alt: "TypeScript", color: "#3178c6", percentage: 60 },
  { src: JSIcon, alt: "JavaScript", color: "#f7df1e", percentage: 80 },
  { src: HtmlIcon, alt: "HTML", color: "#e44d26", percentage: 75 },
  { src: CssIcon, alt: "CSS", color: "#264de4", percentage: 75 },
  { src: MongodbIcon, alt: "MongoDB", color: "#4db33d", percentage: 70 },
  { src: ExpressIcon, alt: "Express.js", color: "#ffffff", percentage: 70 },
  { src: NodeIcon, alt: "Node.js", color: "#3c873a", percentage: 70 },
  { src: BootstrapIcon, alt: "Bootstrap", color: "#563d7c", percentage: 75 },
  { src: TailwindcssIcon, alt: "Tailwind CSS", color: "#38bdf8", percentage: 85 },
  { src: ReduxIcon, alt: "Redux Toolkit", color: "#764abc", percentage: 70 },
  { src: GitIcon, alt: "Git", color: "#f34f29", percentage: 78 },
];


const TOTAL_BOXES = 55;
const activeIndices = [
  13, 14, 15, 16, 17, 18, 19,
  25, 26, 28, 27, 29,
  39,
];

export default function FrameworkGrid() {
  const [clickedIndex, setClickedIndex] = useState(null);
  let iconDisplayIndex = 0;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-5xl font-bold text-center relative mb-12 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent Stext">
      Powering our Work with Latest technologies
      </h1>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-11 gap-4 w-full max-w-[1440px] mx-auto px-2 sm:px-6">
        {Array.from({ length: TOTAL_BOXES }).map((_, i) => {
          const isActive = activeIndices.includes(i);
          const icon = isActive && iconDisplayIndex < icons.length ? icons[iconDisplayIndex++] : null;

          return (
            <div key={i} className="relative flex-col">
              <motion.div
                onClick={() => setClickedIndex(i)}
                whileHover={{
                  scale: isActive ? 1.1 : 1,
                  boxShadow: isActive && icon
                    ? `0 0 20px ${icon.color}`
                    : "none",
                }}
                className={`w-22 h-22 rounded-xl cursor-pointer flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-zinc-900" : "bg-zinc-900/40"
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

              {clickedIndex === i && isActive && (
                <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-30">
                  <PercentageViewer
                    isVisible={clickedIndex}
                    percentage={icon?.percentage ?? 0}
                    />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
