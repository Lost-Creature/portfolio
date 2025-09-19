import React from 'react'

const DiigitalB = () => {
  return (
    <section className="w-full px-10 max-md:px-4  min-h-screen flex flex-col  mt-40" >
      <h1 className="text-center text-5xl max-md:text-4xl font-black font-montserrat mb-30">Why Us?</h1>
      
      <div className="flex gap-10 max-md:flex-col w-full max-md:h-300 h-140 ">
        <div className="flex flex-col w-full  gap-6 border border-[#696767] rounded-xl overflow-hidden">
          <div className="flex justify-center items-center h-[70%] mt-12 ">
            <img
              className="max-w-[300px] w-full h-auto"
              src="/assets/images/web-app.png"
              alt="Clean Code"
            />
          </div>
          <div className="w-full h-[30%]">
            <video
              className="w-full h-full object-cover opacity-80"
              autoPlay
              loop
              muted
              src="/assets/videos/laser.mp4"
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-6 border border-[#696767] rounded-xl overflow-hidden">
          <div className="flex justify-center items-center h-[70%] mt-12">
            <img
              className="max-w-[300px] w-full h-auto"
              src="/assets/images/clean-code.png"
              alt="Clean Code"
            />
          </div>
          <div className="w-full h-[30%]">
            <video
              className="w-full h-full object-cover opacity-80"
              autoPlay
              loop
              muted
              src="/assets/videos/design.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default DiigitalB