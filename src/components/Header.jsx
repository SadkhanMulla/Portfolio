import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Header({ toggleSidebar }) {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Sadkhan_Mulla.pdf";
    link.download = "Sadkhan_Mulla.pdf";
    link.click();
  };

  return (
    <div className="w-full fixed top-0 bg-slate-900 bg-opacity-80 border-b border-slate-700 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-cyan-700 text-2xl focus:outline-none mr-3"
            aria-label="Toggle Sidebar"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-xl sm:text-2xl md:text-2xl transition duration-300">
          Saad's Dev Space
        </h1>

        <div className="hidden md:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="home"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div className="p-[1px] ml-auto">
          <button
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full hover:from-cyan-600 hover:to-blue-600 transition duration-300"
          >
            Get CV
          </button>
        </div>
      </div>
    </div>
  );
}
