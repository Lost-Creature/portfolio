import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, media, isVideo = false, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="w-95 max-lg:flex max-lg:w-full  border-1 border-[#2b2a2a]  bg-black rounded-2xl shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 group overflow-hidden m-3 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-[70%] overflow-hidden">
        {isVideo ? (
          <video
            src={media}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={media}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
      <div className="p-4 text-white">
        <h2 className="text-lg font-bold text-pink-500 mb-1">{title}</h2>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;