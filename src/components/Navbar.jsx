import React from "react";
import logo from "../assets/zakariaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-24" src={logo} alt="logo"></img>
      </div>
    
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a 
          href="https://www.linkedin.com/in/zakaria-el-hajjam-72815127a" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      <a href="https://github.com/zakaria8elhajjam"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      ><FaGithub></FaGithub></a>
      <a href="https://www.instagram.com/zakar_ia566/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      ><FaInstagram></FaInstagram></a>
        
        
        
      </div>
    </nav>
  );
};

export default Navbar;
