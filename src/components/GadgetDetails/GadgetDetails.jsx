import { useLoaderData, useParams } from "react-router-dom";


const GadgetDetails = () => {
    const {product_id} = useParams();

    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id)
    console.log(gadget);
    return (
        <div>
            <h1>Gadget details: {product_id}</h1>
        </div>
    );
};

export default GadgetDetails;