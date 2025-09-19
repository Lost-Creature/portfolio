import NavBar from "./compounts/NavBar";

import Home from './Home.jsx'
import Gallery from './Pages/Gallery/Gallery.jsx'
import Aboutme from './Pages/Aboutme.jsx'
import Footer from "./sections/Footer";

import { Route,Routes } from "react-router-dom";
const App = () => {
  return (
    <section className="w-full flex flex-col min-h-screen bg-black text-white">
      
      <NavBar />
      <div className="py-10">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-me" element={<Aboutme/>}/>
        <Route path="/Projects" element={<Gallery/>}/>

      </Routes>

      </div>
      <Footer/>

  
    </section>
  );
};

export default App;