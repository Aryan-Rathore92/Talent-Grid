import { Link } from 'react-router-dom';
import TeamLogo from '../../assets/team_logo.png'
import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    const themeChanger = ()=>{
        setTheme(prevTheme => prevTheme==="light" ? "dark" : "light");
    }

    useEffect(()=>{
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    },[theme])
  return (
    <>
    <nav className={`top-0 left-0 z-50 w-full fixed h-22 shadow-md ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} flex items-center justify-between`}>
       <div className="nav1 flex items-center">
        <Link to='/'><img src={TeamLogo} alt="Team Logo" className='h-28 w-28 cursor-pointer transition-transform duration-300 hover:translate-y-1'/></Link>
       </div>
       <div className="nav2 flex items-center justify-between gap-8 p-10">
        <Link to='/about' className='text-lg font-semibold hover:underline hover:transition hover:duration-100 hover:underline-offset-4 hover:text-[#c25700]'>About</Link>
        <Link to='/Courses' className='text-lg font-semibold hover:underline hover:transition hover:duration-100 hover:underline-offset-4 hover:text-[#c25700]'>Courses</Link>
        <Link to='/results' className='text-lg font-semibold hover:underline hover:transition hover:duration-100 hover:underline-offset-4 hover:text-[#c25700]'>Results</Link>
        <Link href="#" className='text-lg font-semibold hover:underline hover:transition hover:duration-100 hover:underline-offset-4 hover:text-[#c25700]'>Lang</Link>
        <button className='cursor-pointer border rounded-full px-1.5 py-1 text-xl flex items-center justify-center' onClick={themeChanger}>{theme === "light" ?  <MdLightMode />: <MdDarkMode/>}</button>
        <Link to='/register' className='bg-[#c25700] px-3.5 py-1.5 rounded-md text-white cursor-pointer  text-xl'>Register</Link>
        <Link to='/login' className='text-[#c25700] border px-3.5 py-1.5 rounded-md hover:bg-[#c25700] hover:text-white transition duration-300 cursor-pointer  text-xl'>Login</Link>
       </div>
    </nav>
    
    </>
  )
}

export default Navbar
