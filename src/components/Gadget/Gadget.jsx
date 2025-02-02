
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
    return (
        <div className="card bg-base-100 shadow-2xl p-5">
            <figure>
                <img
                    className="h-[180px] w-full object-cover rounded-xl"
                    src={gadget.product_image}
                    alt={gadget.product_title}
                />
            </figure>
            <div>
                <h3 className="mt-6 mb-3 font-semibold text-2xl">{gadget.product_title}</h3>
                <span className="text-xl font-medium text-gray-500">Price: ${gadget.price}</span>
                <br />
                <Link to={`/gadget/${gadget.product_id}`}>
                    <button className="text-[#9538E2] mt-4 border-2 border-fuchsia-300 bg-white px-5 py-2 rounded-full text-lg font-semibold">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Gadget;
