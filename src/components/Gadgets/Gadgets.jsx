import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/GadgetData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, []);

    return (
        <div className=" max-w-7xl mx-auto  mt-[420px]">
            <h1 className="text-5xl text-black text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6 mt-12">
                <div className="w-1/4 ">
                    <div className="card card-compact bg-base-100 gap-6 py-8  px-6 w-[260px] mx-auto shadow-2xl">
                       <button className="bg-gray-100  px-6 py-3 rounded-full ">All Products</button>
                       <button className="bg-gray-100  px-6 py-3 rounded-full ">Laptops</button>
                       <button className="bg-gray-100  px-6 py-3 rounded-full ">Smartphones</button>
                       <button className="bg-gray-100  px-6 py-3 rounded-full ">Smart Watches</button>
                       <button className="bg-gray-100  px-6 py-3 rounded-full ">Accessories</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 gap-8">
                    {
                        gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;