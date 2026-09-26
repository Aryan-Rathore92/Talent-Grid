import { Link, useLocation } from 'react-router-dom';
import TeamLogo from '../../assets/team_logo.png'
import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode, } from "react-icons/md";
import MobileResponsive from './MobileResponsive';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const location = useLocation();

    const toggleTheme = () => {
    setTheme(prev => {
        const newTheme = prev === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        return newTheme;
    });
};

    useEffect(()=>{
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    },[theme]);

    if(location.pathname === "/login" || location.pathname === "/register"){
      return null;
    }
    const navLinkClass =
    "text-lg font-semibold hover:underline hover:underline-offset-4 hover:text-[#c25700] transition duration-100";
  return (
    <>
      <nav
        className={`top-0 left-0 z-50 w-full fixed h-20 md:h-22 shadow-md ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex items-center`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={TeamLogo}
              alt="Team Logo"
              className="h-20 w-20 md:h-28 md:w-28 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-8 px-6">
          <Link to="/about" className={navLinkClass}>
            About
          </Link>

          <Link to="/Courses" className={navLinkClass}>
            Courses
          </Link>

          <Link to="/results" className={navLinkClass}>
            Results
          </Link>

          <button className={navLinkClass}>Lang</button>

          {/* Desktop Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="cursor-pointer border rounded-full px-1.5 py-1 text-xl flex items-center justify-center"
          >
            {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <Link
            to="/register"
            className="bg-[#c25700] px-3.5 py-1.5 rounded-md text-white text-xl"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="text-[#c25700] border px-3.5 py-1.5 rounded-md hover:bg-[#c25700] hover:text-white transition duration-300 text-xl"
          >
            Login
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center ml-auto">
          {/* Mobile Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            className="md:hidden cursor-pointer border rounded-full px-1.5 py-1 text-xl flex items-center justify-center mr-3"
          >
            {theme === "light" ? <MdLightMode /> : <MdDarkMode />}
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <MobileResponsive theme={theme}/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
