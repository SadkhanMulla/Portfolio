import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-6 md:mt-6">
      <div className="max-w-screen-xl mx-auto text-center flex flex-col items-center">
        <div className="mb-6">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-bold text-xl sm:text-2xl md:text-2xl transition duration-300">
            Saad's Dev Space
          </h1>
        </div>

        <div className="space-x-6 mb-4">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <i className="fab fa-instagram text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sadkhan-mulla1811/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a
            href="https://github.com/SadkhanMulla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            href="https://wa.me/9529329131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-cyan-400"
          >
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Saad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
