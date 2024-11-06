import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList } from "../../utility/addToDb";
import { addToStoredWishList } from "../../utility/addToWishList";



const GadgetDetails = () => {
    const { product_id } = useParams();

    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id)

    // cart handle
    const handleAddToCart = (id) => {
        addToStoredCartList(id)
    }


    // wishlist handle


    const handleAddToWishList = (id) => {
        addToStoredWishList(id)
    }

    return (
        <div className=" relative mb-[400px]  bg-[#9538E2]   ">
            <div className=" text-center h-[460px]  ">
                <h3 className="text-3xl pt-8 mb-4 text-white font-bold">Product Details</h3>
                <p className="text-base text-gray-300">Explore the latest gadgets that will take your experience to  the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className=" absolute bg-white inset-x-0 top-1/2 transform translate-y-1/5    max-w-7xl mx-auto h-[560px]  p-8 rounded-3xl flex gap-8 shadow-2xl">
                <div><img className="w-[550px] h-[503px] rounded-xl object-cover " src={gadget.product_image} alt="" /></div>

                <div>
                    <h1 className="text-3xl font-bold mb-4">{gadget.product_title}</h1>
                    <p className="text-xl font-semibold text-gray-600 mb-4">Price: ${gadget.price}</p>
                    <button className="bg-green-50 border border-green-400 mb-4 px-4 py-1 rounded-full "> <p className={`text-lg  ${gadget.availability ? 'text-green-600' : 'text-red-600'}`}>
                        {gadget.availability ? "In Stock" : "Out of Stock"}
                    </p></button>
                    <p className="text-gray-700">{gadget.description}</p>
                    <h2 className="text-xl font-semibold my-3">Specification:</h2>
                    <ol className="list-decimal list-inside mb-4">
                        {gadget.specification.map((spec, index) => (
                            <li key={index} className="text-gray-700">{spec}</li>
                        ))}
                    </ol>
                    <h2 className="text-xl font-semibold my-2">Rating 🌟</h2>
                    <div className="flex items-center  mb-6">
                        <div className="text-yellow-500 text-2xl mr-2">
                            {"⭐️".repeat(Math.floor(gadget.rating))}
                            {gadget.rating % 1 !== 0 && "⭐️"}
                        </div>
                        <span className="text-gray-600 text-lg ml-2 ">{gadget.rating}</span>
                    </div>
                    <div className="flex  space-x-4 ">
                        <button onClick={() => handleAddToCart(product_id)}  className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                            Add To Cart
                        </button>
                        <button onClick={() => handleAddToWishList(product_id)} className="p-2 border rounded-full text-gray-600 hover:bg-gray-100">
                            ❤️
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;



