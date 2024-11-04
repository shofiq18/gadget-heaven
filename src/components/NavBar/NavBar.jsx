import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
       <div className="w-[1540px] mx-auto mt-10 py-7  rounded-t-2xl bg-[#9538E2] ">
         <div className=" max-w-7xl  mx-auto  flex  justify-between items-center ">
            <div>
                <h3 className="text-xl font-bold text-white
                ">Gadget Heaven</h3>
            </div>
            <div>
                <ul className="flex gap-12 text-white  text-base font-bold">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>Statistics</li>
                    <li>Dashboard</li>
                </ul>
            </div>
            <div className="flex items-center text-2xl  gap-4">
            <div className="w-10 h-10 text-gray-500 bg-white flex items-center justify-center rounded-full">
            <HiOutlineShoppingCart />
            </div>
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">
            <CiHeart/>
            </div>
              
                
            </div>
        </div>
       </div>
    );
};

export default NavBar;
