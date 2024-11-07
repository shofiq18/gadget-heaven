import { useEffect } from "react";


const About = () => {

    useEffect(() => {
        document.title = "About | Gadget Heaven";
        
    }, []);

    return (
        <div className=" max-w-7xl mx-auto shadow p-6 my-16 rounded-2xl  bg-slate-300 flex flex-col md:flex-row items-center justify-center  space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2 w-full">
                <img
                    src="https://i.ibb.co.com/GnPYXdJ/about.jpg"
                    alt="Gadget"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <div className="md:w-1/2 w-full text-gray-700">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
                <p className="text-lg mb-4 leading-relaxed">
                    Welcome to our gadget store! We are passionate about bringing the latest
                    and greatest in technology to our customers. From innovative smartphones to
                    cutting-edge laptops, our mission is to provide high-quality gadgets that
                    enhance your lifestyle.
                </p>
                <p className="text-lg leading-relaxed">
                    Our team of tech enthusiasts works tirelessly to curate a collection of
                    gadgets that meet the highest standards of performance, style, and value.
                    Thank you for choosing us as your go-to source for all things tech!
                </p>
            </div>
        </div>
    );
};

export default About;