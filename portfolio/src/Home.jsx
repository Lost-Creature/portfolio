import NavBar from "./compounts/NavBar";
import FrameworkGrid from "./sections/FrameworkGrid";
import Hero from "./sections/Hero";
import DiigitalB from "./sections/DiigitalB";

import TimelineSec from "./sections/TimelineSec";
import Experience from "./sections/Experience";

const Home = () => {
  return (
    <section className="w-full flex flex-col min-h-screen bg-black text-white">
      
      <NavBar />
      
      <Hero />
      <Experience/>
      <FrameworkGrid />
      <TimelineSec/>
    </section>
  );
};

export default Home;