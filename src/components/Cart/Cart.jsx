

import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

const Cart = ({ cartList, cartDelete }) => {
    // State to manage the sorted list of cart items
    const [sortedCartList, setSortedCartList] = useState(cartList);

    // Calculate the total cost
    const totalCost = sortedCartList.reduce((total, gadget) => total + gadget.price, 0);

    // Effect to update sortedCartList whenever cartList changes
    useEffect(() => {
        setSortedCartList(cartList);
    }, [cartList]);

    // Function to sort by price in descending order
    const handleSortByPrice = () => {
        const sortedList = [...sortedCartList].sort((a, b) => b.price - a.price);
        setSortedCartList(sortedList);
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl">Cart List</h3>
                <div className="space-x-4">
                    <span className="font-bold text-2xl mr-2">Total cost: ${totalCost.toFixed(2)}</span>
                    <button
                        onClick={handleSortByPrice}
                        className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold"
                    >
                        Sort by Price
                    </button>
                    <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
                </div>
            </div>
            {sortedCartList.length === 0 ? (
                <p>Your cart list is empty</p>
            ) : (
                <div>
                    {sortedCartList.map(gadget => (
                        <div key={gadget.product_id} className="flex bg-white shadow-lg mt-6 rounded-xl justify-between items-center p-4">
                            <div className="flex gap-8">
                                <div>
                                    <img className="w-48 h-28 rounded-xl" src={gadget.product_image} alt="" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <span className="text-2xl font-semibold">{gadget.product_title}</span>
                                    <span>{gadget.description}</span>
                                    <span className="text-xl font-semibold">${gadget.price}</span>
                                </div>
                            </div>
                            <div className="items-center">
                                <MdDelete
                                    onClick={() => cartDelete(gadget.product_id)}
                                    className="text-[22px] text-red-400 cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
