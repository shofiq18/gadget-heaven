// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { CiHeart } from "react-icons/ci";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { getStoredCartList } from "../../utility/addToDb";

// const NavBar = () => {
//     const location = useLocation();
//     const isHomePage = location.pathname === '/';


//     const storedCartList = getStoredCartList();
//     console.log("data>>>>>>>",storedCartList);

//     return (
//        <div className={`w-[1540px] mx-auto mt-10 py-7 rounded-t-2xl ${isHomePage ? 'bg-[#9538E2] text-white' : 'bg-[#f5f5f5] text-black'}`}>
//          <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <div>
//                 <h3 className="text-xl font-bold">
//                     Gadget Heaven
//                 </h3>
//             </div>
//             <div>
//                 <ul className="flex gap-12 text-base font-bold">
//                     <li><NavLink to="/" className={isHomePage ? '' : 'text-black'}>Home</NavLink></li>
//                     <li className={isHomePage ? '' : 'text-black'}>Statistics</li>
//                     <li><Link to="/dashboard" className={isHomePage ? '' : 'text-black'}>Dashboard</Link></li>
//                     <li><Link to="/about" className={isHomePage ? '' : 'text-black'}>About Us</Link></li>
//                 </ul>
//             </div>
//             <div className="flex items-center text-2xl gap-4">
//                 <div className={`w-10 h-10  ${isHomePage ? 'text-gray-500 bg-white' : 'text-black bg-gray-200'} flex items-center justify-center rounded-full`}>
//                     <HiOutlineShoppingCart className="absolute" />
//                     <h1 className=" relative ml-5 mb-8 text-green-700">{storedCartList?.length}</h1>
//                 </div>
//                 <div className={`w-10 h-10 ${isHomePage ? 'bg-white text-black' : 'bg-gray-200 text-black'} flex items-center justify-center rounded-full`}>
//                     <CiHeart />
//                 </div>
//             </div>
//         </div>
//        </div>
//     );
// };

// export default NavBar;



import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredCartList } from "../../utility/addToDb";
 

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // State to store the cart list
    const [storedCartList, setStoredCartList] = useState(getStoredCartList());

    // Update storedCartList whenever `cartListUpdated` event fires
    useEffect(() => {
        const updateCartList = () => setStoredCartList(getStoredCartList());

        // Listen for the custom event `cartListUpdated`
        window.addEventListener("cartListUpdated", updateCartList);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("cartListUpdated", updateCartList);
        };
    }, []);

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
                        <li><NavLink to="/" className={isHomePage ? '' : 'text-black'}>Home</NavLink></li>
                        <li className={isHomePage ? '' : 'text-black'}>Statistics</li>
                        <li><Link to="/dashboard" className={isHomePage ? '' : 'text-black'}>Dashboard</Link></li>
                        <li><Link to="/about" className={isHomePage ? '' : 'text-black'}>About Us</Link></li>
                    </ul>
                </div>
                <div className="flex items-center text-2xl gap-4">
                    <div className={`w-10 h-10 ${isHomePage ? 'text-gray-500 bg-white' : 'text-black bg-gray-200'} flex items-center justify-center rounded-full`}>
                        <HiOutlineShoppingCart className="absolute" />
                        <h1 className="relative ml-5 mb-8 text-green-700">{storedCartList.length}</h1>
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


