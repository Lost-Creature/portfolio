import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const PercentageViewer = ({ percentage, isVisible }) => {
  const count = useMotionValue(0);
  const springed = useSpring(count, { duration: 1, stiffness: 100, damping: 20 });
  const rounded = useTransform(springed, (latest) => Math.round(latest));

  const [displayedValue, setDisplayedValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayedValue(v);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isVisible) {
      count.set(0);
      count.set(percentage);
    }
  }, [percentage, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-60 bg-zinc-900 p-4  shadow-lg border border-white/10"
        >
                <p className=" text-[10px] font-bold font-retro relative mb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent ">
                Skill Proficiency</p>

          <div className="w-full h-4 bg-zinc-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-[#cec3c3]"
            />
          </div>

          <p className="text-right text-xs mt-1 text-zinc-300 font-black">
            {displayedValue}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PercentageViewer;
