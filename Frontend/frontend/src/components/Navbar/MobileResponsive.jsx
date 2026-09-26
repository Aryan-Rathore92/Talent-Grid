import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose} from "react-icons/md";

const MobileResponsive = ({theme}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const hoverEffect = "w-full text-center py-3 text-lg font-semibold transition-all duration-300 hover:bg-[#c25700] hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] ";
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl mr-4"
      >
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-20 left-0 w-full shadow-md ${  theme === "light" ? "bg-white text-black" : "bg-black text-white" }`}>
          
          <div className="flex flex-col items-center gap-5 py-6">

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={hoverEffect}            >
              About
            </Link>

            <Link
              to="/Courses"
              onClick={() => setMenuOpen(false)}
              className={hoverEffect}   
            >
              Courses
            </Link>

            <Link
              to="/results"
              onClick={() => setMenuOpen(false)}
              className={hoverEffect}   
            >
              Results
            </Link>

            <button className={hoverEffect}   >
              Lang
            </button>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className={hoverEffect}   
            >
              Register
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className={hoverEffect}   
            >
              Login
            </Link>

          </div>
        </div>
      )}
    </>
  );
};

export default MobileResponsive;

