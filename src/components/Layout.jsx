import React, { useState, lazy, Suspense } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "./Footer";
import Project from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";


const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {open && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <div
        className={`fixed z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} open={open} />
      </div>

      <main
        className={`flex flex-col mt-14 md:mt-12  py-2 overflow-x-hidden overflow-y-auto transition-all duration-300`}
      >
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
