

// const Cart = ({cartList}) => {
//     return (
//       <div>
//         <div className="flex justify-between items-center">
//             <h3 className="font-bold text-2xl">Cart</h3>
//             <div className="space-x-4">
//                 <span className="font-bold text-2xl mr-2">Total cost:</span>
//                 <button className="text-purple-500 px-6 py-3 rounded-full  border-purple-500 border font-semibold">Sort by Price</button>
//                 <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
//             </div>
//         </div>
//         <div className="bg-gray-50 p-4 rounded-xl mt-8 shadow">
//             <h1 className="text-2xl font-bold">carts item:{cartList.length} </h1>
//         </div>
//       </div>
//     );
// };

// export default Cart;

// const Cart = ({ cartList, setCartList }) => {
//     const totalCost = cartList.reduce((sum, item) => sum + item.price, 0);

//     const handleSortByPrice = () => {
//         const sortedCartList = [...cartList].sort((a, b) => a.price - b.price);
//         setCartList(sortedCartList); // Only if setCartList is passed as a prop from Dashboard
//     };

//     return (
//         <div>
//             <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-2xl">Cart</h3>
//                 <div className="space-x-4">
//                     <span className="font-bold text-2xl mr-2">Total cost: ${totalCost}</span>
//                     <button
//                         onClick={handleSortByPrice}
//                         className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold"
//                     >
//                         Sort by Price
//                     </button>
//                     <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
//                 </div>
//             </div>
//             <div className="bg-gray-50 p-4 rounded-xl mt-8 shadow">
//                 {cartList.length > 0 ? (
//                     <h1 className="text-2xl font-bold">Cart items: {cartList.length}</h1>
//                 ) : (
//                     <p className="text-xl text-gray-500">Your cart is empty.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;


const Cart = ({ cartList }) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl">Cart</h3>
                <div className="space-x-4">
                    <span className="font-bold text-2xl mr-2">Total cost:</span>
                    <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Sort by Price</button>
                    <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl mt-8 shadow">
                {/* Display cart items count */}
                <h1 className="text-2xl font-bold">Cart items: {cartList.length}</h1>
                {/* Show message if cart is empty */}
                {cartList.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div>
                        {cartList.map(gadget => (
                            <div key={gadget.product_id} className="flex justify-between items-center p-4 border-b">
                                <span>{gadget.name}</span>
                                <span>${gadget.price}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
