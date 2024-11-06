import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../utility/addToDb";

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);



    const [activeTab, setActiveTab] = useState("Tab1");

    const allGadgets = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredCartList();
    const storedCartListInt = storedCartList.map(id => parseInt(id));

    console.log(storedCartList, allGadgets, storedCartListInt);

    const addGadgetList = allGadgets.filter(gadget => storedCartListInt.includes(gadget.product_id));
    setCartList(addGadgetList);

}, [allGadgets]); // Added allGadgets to dependencies


    return (
        <div>
            <div className="bg-[#9538E2] py-8">
                <div className=" max-w-7xl mx-auto  text-center h-[190px]  ">
                    <h3 className="text-3xl pt-8 mb-4 text-white font-bold">Dashboard</h3>
                    <p className="text-base text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <div className="mt-4 ">
                        {/* Tab Buttons */}
                        <button
                            onClick={() => setActiveTab("Tab1")}
                            className={`py-3 px-16 rounded-full mr-6 focus:outline-none ${activeTab === "Tab1" ? "bg-white text-purple-500 font-bold" : "text-white border-2 border-slate-300"
                                }`}
                        >
                            Cart
                        </button>
                        <button
                            onClick={() => setActiveTab("Tab2")}
                            className={`py-3 px-16 rounded-full focus:outline-none ${activeTab === "Tab2" ? "bg-white text-purple-500 font-bold" : "text-white border-2 border-slate-300"
                                }`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-10">
                {/* Tab Content */}
                <div className="mt-4 p-4  rounded-lg ">
                    {activeTab === "Tab1" &&  <Cart cartList={cartList}  />}
                    {activeTab === "Tab2" && <Wishlist />}
                </div>
            </div>
        </div>
    );

};

export default Dashboard;


