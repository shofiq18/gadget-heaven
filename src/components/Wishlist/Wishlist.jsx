import { MdDelete } from "react-icons/md";






const Wishlist = ({cartList, cartDelete}) => {
    
    
    return (
        <div>
            <h3 className="font-bold text-2xl">WishList</h3>
           
            {cartList.length === 0 ? (
                <p>Your cart list is empty</p>
            ) : (
                <div>
                    {cartList.map(gadget => (
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

export default Wishlist;