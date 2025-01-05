import { Link } from "react-scroll"; 

const Sidebar = ({ open, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-slate-900 text-white h-screen p-4 z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
    
      <div className="flex justify-end">
        <button
          onClick={toggleSidebar}
          className="text-[#F95F19] text-2xl focus:outline-none"
          aria-label="Close Sidebar"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      
      <ul className="space-y-6 mt-5 ml-10">
        <li className="flex items-center">
          <Link
            to="home"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 flex items-center space-x-4 cursor-pointer"
            onClick={toggleSidebar} 
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 flex items-center space-x-4 cursor-pointer"
            onClick={toggleSidebar}
          >
            <i className="fas fa-user"></i>
            <span>About</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="skills"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 flex items-center space-x-4 cursor-pointer"
            onClick={toggleSidebar}
          >
            <i className="fas fa-cogs"></i>
            <span>Skills</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            to="projects"
            smooth={true}
            offset={-50}
            duration={500}
            className="text-white text-base hover:text-cyan-400 transition duration-300 flex items-center space-x-4 cursor-pointer"
            onClick={toggleSidebar}
          >
            <i className="fas fa-project-diagram"></i>
            <span>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
