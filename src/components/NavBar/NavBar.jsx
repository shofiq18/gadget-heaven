import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className={`w-[1540px] mx-auto mt-10 py-7 rounded-t-2xl ${isHomePage ? 'bg-[#9538E2] text-white' : 'bg-[#f5f5f5] text-black'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold">
                        Gadget Heaven
                    </h3>
                </div>
                <div>
                    <ul className="flex gap-12 text-base font-bold">
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? 'text-black' : (isHomePage ? '' : 'text-black')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/statistics" 
                                className={({ isActive }) => isActive ? 'text-[#9538E2]' : (isHomePage ? '' : 'text-black')}
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/dashboard" 
                                className={({ isActive }) => isActive ? 'text-[#9538E2]' : (isHomePage ? '' : 'text-black')}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => isActive ? 'text-[#9538E2]' : (isHomePage ? '' : 'text-black')}
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center text-2xl gap-4">
                    <div className={`w-10 h-10 ${isHomePage ? 'text-gray-500 bg-white' : 'text-black bg-gray-200'} flex items-center justify-center rounded-full`}>
                        <HiOutlineShoppingCart className="absolute" />
                    </div>
                    <div className={`w-10 h-10 ${isHomePage ? 'bg-white text-black' : 'bg-gray-200 text-black'} flex items-center justify-center rounded-full`}>
                        <CiHeart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
