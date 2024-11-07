

import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, removeFromCartList, clearCart } from "../../utility/addToDb"; // Assuming removeFromCartList is a function that removes item from local storage
import { toast } from "react-toastify";


const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [activeTab, setActiveTab] = useState("Tab1");

    const allGadgets = useLoaderData();

    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
        const storedCartList = getStoredCartList();
        setCartList(storedCartList);
    }, [allGadgets]);

    // Delete item from cart and update state and local storage
    const cartDelete = (productId) => {
        const updatedCartList = cartList.filter(item => item.product_id !== productId);
        setCartList(updatedCartList); // Update state to re-render
        removeFromCartList(productId); // Remove from local storage
        toast.success('Removed successfully')
    };
    
    

    return (
        <div>
            <div className="bg-[#9538E2] py-8">
                <div className="max-w-7xl mx-auto text-center h-[190px]">
                    <h3 className="text-3xl pt-8 mb-4 text-white font-bold">Dashboard</h3>
                    <p className="text-base text-gray-300">Explore the latest gadgets that will take your experience to the next level...</p>
                    <div className="mt-4">
                        {/* Tab Buttons */}
                        <button onClick={() => setActiveTab("Tab1")} className={`py-3 px-16 rounded-full mr-6 ${activeTab === "Tab1" ? "bg-white text-purple-500 font-bold" : "text-white border-2 border-slate-300"}`}>Cart</button>
                        <button onClick={() => setActiveTab("Tab2")} className={`py-3 px-16 rounded-full ${activeTab === "Tab2" ? "bg-white text-purple-500 font-bold" : "text-white border-2 border-slate-300"}`}>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-10">
                <div className="mt-4 p-4 rounded-lg">
                    {activeTab === "Tab1" && <Cart cartList={cartList} cartDelete={cartDelete} clearCart={clearCart}  />}
                    {activeTab === "Tab2" && <Wishlist cartList={cartList} />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

