

const Cart = () => {
    return (
      <div>
        <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">Cart</h3>
            <div className="space-x-4">
                <span className="font-bold text-2xl mr-2">Total cost:</span>
                <button className="text-purple-500 px-6 py-3 rounded-full  border-purple-500 border font-semibold">Sort by Price</button>
                <button className="text-purple-500 px-6 py-3 rounded-full border-purple-500 border font-semibold">Purchase</button>
            </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl mt-8 shadow">
            <h1 className="text-2xl font-bold">carts item </h1>
        </div>
      </div>
    );
};

export default Cart;