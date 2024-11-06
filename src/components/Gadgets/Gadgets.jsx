


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
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'All Products' ? 'bg-green-500 text-white' : ''}`}
              onClick={() => handleCategoryClick('All Products')}
            >
              All Products
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Laptops' ? 'bg-green-500 text-white' : ''}`}
              onClick={() => handleCategoryClick('Laptops')}
            >
              Laptops
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Smartphones' ? 'bg-green-500 text-white' : ''}`}
              onClick={() => handleCategoryClick('Smartphones')}
            >
              Smartphones
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Smart Watches' ? 'bg-green-500 text-white' : ''}`}
              onClick={() => handleCategoryClick('Smart Watches')}
            >
              Smart Watches
            </button>
            <button
              className={`bg-gray-100 px-6 py-3 rounded-full ${selectedCategory === 'Accessories' ? 'bg-green-500 text-white': ''}`}
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
            <div className="col-span-full h-[400px] flex justify-center items-center font-bold text-6xl text-black font-b">
              Data Not Available 
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;