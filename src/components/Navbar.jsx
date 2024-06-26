import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import logo from './logo-removebg14.png'; // Ensure the path is correct
import './Navbar.css';

//react icons
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { HiDatabase, HiDesktopComputer, HiHome, HiOutlineBell, HiOutlineHome, HiTruck} from 'react-icons/hi';
import { AuthContext } from '../contects/AuthProvider';



const headerStyles = {
    zIndex: 1000,
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation(); // Use useLocation to get the current path

    const { user } = useContext(AuthContext);
    console.log(user);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Corrected this line
        }
    }, [])

    // navItems
    const navItems = [
        {
            icon: HiOutlineHome,
            path: "/",
            
          }, 
        
        { link: "About", path: "/about" },
        // { link: "Book Collection", path: "/shop" },
        { link: "Shop Now", path: "/shop" },
        { link: "Logout", path: "/logout" },
        { link: "Delivery Team", path: "/deliverylogin" },
        { link: "Sellers", path: "/adminIn" },
        {
            icon: HiOutlineBell,
            path: user && user.email ? `/notifications/${user.email}` : '/login',
            
          }, 
    ];

    return (
        <header className='w-full bg-image fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-30 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-image" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/*logo*/}
                    <Link to="/" className='flex items-center gap-0 w-40'>
                        <img src={logo} alt="Brand Logo" className='space-x-50 navbar-brand-img w-40 md:w-3/4' />
                        <span className='text-2xl font-bold text-yellow-500 flex items-center gap-10'>NETH BOOKPOINT</span>
                    </Link>
                    {/*nav item for large device*/}
                    <ul className='md:flex space-x-7 hidden text-xs '>
                        {navItems.map(({ link, path, icon: Icon }, index) => (
                            <li key={index} className={`block ${location.pathname === path ? 'text-white' : 'text-yellow-600'}`}>
                                <Link to={path} className='flex items-center gap-2 text-sm uppercase cursor-pointer hover:text-yellow-100'>
                                    {Icon && <Icon className="text-2xl" />}
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='text-yellow-400 text-xs flex flex-col items-center'>
                    {user && (
                            <img 
                                src="https://i.imgur.com/f8cktzx.png" // Replace with your avatar image URL
                                alt="User Avatar"
                                className="w-8 h-8 rounded-full ml-2 text-center mb-1"
                            />
                        )}

                            {user ? user.email : ""}

                        
                       
                    </div>
                    {/*btn for lg devices*/}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button><FaBarsStaggered className=' text-yellow-600 font-extrabold w-5 hover:text-yellow-300 ' /> </button>
                    </div>

                    {/* menu btn for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-yellow-300 focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text white' /> : <FaBarsStaggered className='h-5 w-5 text white' />}
                        </button>
                    </div>
                </div>

                {/*nav items for sm devices*/}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-yellow-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path, icon: Icon }, index) => (
                        <Link key={index} to={path} className={`block text-base uppercase cursor-pointer ${location.pathname === path ? 'text-white' : 'text-white'}`}>
                            {Icon && <Icon className="text-2xl mr-2" />}
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
