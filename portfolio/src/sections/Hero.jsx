import { TypeAnimation } from "react-type-animation";
import Herov from "../assets/videos/Hero.mp4"
export default function Hero() {
    return (
      <div className="relative h-screen w-full overflow-hidden mb-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          muted
          loop
          playsInline
          src={Herov}
        />
  
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />
  
        <div className="flex items-center justify-center h-full w-full z-10 absolute">
          <div className="text-center px-4 flex flex-col  justify-center items-center gap-y-30">
            <h1 className="text-xl font-extrabold font-retro  text-white drop-shadow-lg">
            <h1 className="text-3xl font-extrabold font-retro text-white drop-shadow-lg">
            <TypeAnimation
  sequence={[
    'Wanna build a professional website?',
    1000,
    "Let's make it happen.",
    1000,
    "Tired of your website not looking like a real company’s?",
    1000,
    "Don’t worry, I got you.",
    1000,
    "Sick of template-looking sites?",
    1000
    ,"Say Less!",
    4000

  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="inline-block"
/>

      </h1>
            </h1>
            <div className="flex flex-col gap-y-7 font-retro font-black items-center">
                <h1 className="text-xl animate-bounce">
                    Press to Get Started
                    </h1>
            <button className="p-7 py-3 max-w-40 font-inter cursor-pointer hover:bg-gray-100 hover:scale-101 transition-all  bg-white text-black">Get Started</button>
            </div>
          </div>
         
        </div>
      </div>
    );
  }
  