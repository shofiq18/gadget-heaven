import { useEffect } from "react";
import Banner from "../Banner/Banner";

import Gadgets from "../Gadgets/Gadgets";


const Home = () => {

    useEffect(() => {
        document.title = "Home | Gadget Heaven";
        
    }, []);

    return (
        <div>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;