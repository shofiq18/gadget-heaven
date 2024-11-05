// import { useEffect, useState } from "react";
// import Gadget from "../Gadget/Gadget";


// const Gadgets = () => {
//     const [gadgets, setGadgets] = useState([]);

//     useEffect(() => {
//         fetch('/GadgetData.json')
//             .then(res => res.json())
//             .then(data => setGadgets(data))
//     }, []);

//     return (
//         <div className=" max-w-7xl mx-auto  mt-[420px]">
//             <h1 className="text-5xl text-black text-center font-bold">Explore Cutting-Edge Gadgets</h1>
//             <div className="flex gap-6 mt-12">

//                 {/* left side */}
//                 {/* category button  */}
//                 <div className="w-1/4 ">
//                     <div className="card card-compact bg-base-100 gap-6 py-8  px-6 w-[260px] mx-auto shadow-2xl">
//                        <button className="bg-gray-100  px-6 py-3 rounded-full ">All Products</button>
//                        <button className="bg-gray-100  px-6 py-3 rounded-full ">Laptops</button>
//                        <button className="bg-gray-100  px-6 py-3 rounded-full ">Smartphones</button>
//                        <button className="bg-gray-100  px-6 py-3 rounded-full ">Smart Watches</button>
//                        <button className="bg-gray-100  px-6 py-3 rounded-full ">Accessories</button>
//                     </div>
//                 </div>

//                 {/* right side */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 gap-8">
//                     {
//                         gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Gadgets;


import { useState, useEffect } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/GadgetData.json')
      .then(res => res.json())
      .then(data => {
        setGadgets(data);
        setFilteredProducts(data);
      });
  }, []);

  const filterProducts = (category) => {
    if (category === 'All Products') {
      setFilteredProducts(gadgets);
    } else {
      const filtered = gadgets.filter(gadget => gadget.category === category);
      setFilteredProducts(filtered);
    }
  };
   

  const handleCategoryClick = (category) => {
    if(filteredProducts.length === 0){
        
        
    }
    setSelectedCategory(category);
    filterProducts(category);
  };

  return (
    <div className="max-w-7xl mx-auto mt-[420px]">
      <h1 className="text-5xl text-black text-center font-bold">Explore Cutting-Edge Gadgets</h1>
      <div className="flex gap-6 mt-12">
        {/* Left Side */}
        <div className="w-1/4">
          <div className="card card-compact bg-base-100 gap-6 py-8 px-6 w-[260px] mx-auto shadow-2xl">
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'All Products' ? 'bg-green-200 text-blue-700' : ''}`}
              onClick={() => handleCategoryClick('All Products')}
            >
              All Products
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Laptops' ? 'bg-green-200 text-blue-700' : ''}`}
              onClick={() => handleCategoryClick('Laptops')}
            >
              Laptops
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Smartphones' ? 'bg-green-200 text-blue-700' : ''}`}
              onClick={() => handleCategoryClick('Smartphones')}
            >
              Smartphones
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Smart Watches' ? 'bg-green-200 text-blue-700' : ''}`}
              onClick={() => handleCategoryClick('Smart Watches')}
            >
              Smart Watches
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Accessories' ? 'bg-green-200 text-blue-700': ''}`}
              onClick={() => handleCategoryClick('Accessories')}
            >
              Accessories
            </button>
            {/* ... other category buttons */}
          </div>
        </div>
        {/* Right Side */}
        <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(gadget => (
              <Gadget gadget={gadget} key={gadget.product_id} />
            ))
          ) : (
            <div className="col-span-full text-center text-5xl text-black font-bold">
              Data Not Available 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;