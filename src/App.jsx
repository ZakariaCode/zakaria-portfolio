import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background avec effets améliorés */}
      <div className="fixed top-0 w-full h-full -z-10">
        <div className="relative w-full h-full bg-slate-950">
          {/* Gradient principal */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_200px,#4a5568,transparent)]"></div>
          {/* Effet de particules subtil */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_80%_20%,#1e293b,transparent)]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_20%_80%,#334155,transparent)]"></div>
          {/* Overlay pour plus de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-800/30"></div>
        </div>
      </div>
      
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Experience/>
        <Projects />
        
        <Footer/>
        <Contact />
      </div>
    </div>
  );
};

export default App;
