

// const cartList = ({ cartList }) => {
//     console.log(cartList);

 

    
//     return (
//         <div>
//             <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-2xl">cartList</h3>
//                 <div className="space-x-4">
//                     <span className="font-bold text-2xl mr-2">Total cost:  </span>
//                     <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Sort by Price</button>
//                     <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
//                 </div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl mt-8 shadow">
//                 {/* Display cartList items count */}
//                 <h1 className="text-2xl font-bold">cartList items: {cartList.length}</h1>
//                 {/* Show message if cartList is empty */}
//                 {cartList.length === 0 ? (
//                     <p>Your cartList is empty</p>
//                 ) : (
//                     <div>
//                         {cartList.map(gadget => (
//                             <div key={gadget.product_id} className="flex justify-between items-center p-4 border-b">
//                                 <span>{gadget.product_title}</span>
//                                 <span>${gadget.price}</span>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default cartList;

import { MdDelete } from "react-icons/md";

const Cart = ({ cartList, cartDelete }) => {
    // Calculate the total cost
    const totalCost = cartList.reduce((total, gadget) => total + gadget.price, 0);

    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl">Cart List</h3>
                <div className="space-x-4">
                    <span className="font-bold text-2xl mr-2">Total cost: ${totalCost.toFixed(2)}</span>
                    <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Sort by Price</button>
                    <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl mt-8 shadow">
                {/* Display cartList items count */}
                <h1 className="text-2xl font-bold">Cart List Items: {cartList.length}</h1>
                {/* Show message if cartList is empty */}
                {cartList.length === 0 ? (
                    <p>Your cart list is empty</p>
                ) : (
                    <div>
                        {cartList.map(gadget => (
                            <div key={gadget.product_id} className="flex justify-between items-center p-4 border-b">
                                <div>
                                    <span>{gadget.product_title}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span>${gadget.price}</span>
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
        </div>
    );
};

export default Cart;


