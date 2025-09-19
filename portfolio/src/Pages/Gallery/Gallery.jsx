
import React, { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';

import Showcase1 from '../../assets/Protofolio/Showcase1.mkv';
import Showcase2 from '../../assets/Protofolio/Showcase2.mkv';
import Showcase3 from '../../assets/Protofolio/Showcase3.mp4';
import Showcase4 from '../../assets/Protofolio/Showcase4.png';
import Showcase5 from '../../assets/Protofolio/Showcase5.mkv';
import Showcase6 from '../../assets/Protofolio/Showcase6.png';
import Showcase7 from "../../assets/Protofolio/Showcase7.png"
import Showcase8 from "../../assets/Protofolio/Showcase8.png"
import Showcase9 from "../../assets/Protofolio/Showcase9.png"


const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const showcases = [
    { title: "Showcase 1", description: "LandPage For Nike Products", media: Showcase1, isVideo: true },
    { title: "Showcase 2", description: "LandPage For Artificial intelligence Showcase ", media: Showcase2, isVideo: true },
    { title: "Showcase 3", description: "Complete Mern Stack Courese Website", media: Showcase3, isVideo: true },
    { title: "Showcase 4", description: "Clean static hero shot from a design for a Complete E-commerce App ", media: Showcase4, isVideo: false },
    { title: "Showcase 5", description: "Complete Mern Stack E-Commerce app (auth(login and sign in), jwt protected routes, admindashboard **everything** ))", media: Showcase5, isVideo: true },
    { title: "Showcase 6", description: "Admin dashboard from the E-Commerece App", media: Showcase6, isVideo: false },
    { title: "Showcase 7", description: "Fully Functional Mernstack Project #HomePage  ", media: Showcase7, isVideo: false },
    { title: "Showcase 8", description: "Fully Functional Mernstack Project #ResultsPage", media: Showcase8, isVideo: false },
    { title: "Showcase 9", description: "Fully Functional Mernstack Project #HomePage ViewPage and there is more", media: Showcase9, isVideo: false },

  ];

  return (
    <div className='w-full min-h-screen  gap-y-5 p-10'>
      <h1 className='text-6xl text-white mb-4'>Gallery</h1>

      <div className='w-full grid grid-cols-3 max-lg:flex max-lg:flex-col  max-md:flex max-md:flex-col gap-x-10 min-h-screen'>
        {showcases.map((item, i) => (
          <Card key={i} {...item} onClick={() => setSelected(item)} />
        ))}
      </div>      


      <AnimatePresence>
        {selected && (
          <motion.div
            className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className='max-w-4xl max-h-[80vh] overflow-hidden rounded-lg shadow-xl'
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selected.isVideo ? (
                <video src={selected.media} controls className='w-full h-full object-contain' autoPlay muted />
              ) : (
                <img src={selected.media} alt={selected.title} className='w-full h-full object-contain' />
              )}
              <div className='p-4 bg-black text-white'>
                <h2 className='text-2xl font-bold text-pink-500'>{selected.title}</h2>
                <p className='text-sm text-white/70'>{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;