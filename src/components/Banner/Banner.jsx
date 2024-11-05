import BannerPng from '../../../src/image/assets/banner.jpg'

const Banner = () => {
    return (
       <div className=" relative w-[1540px] mx-auto mb-56 h-[598px] bg-[#9538E2] rounded-b-2xl">
         <div className="max-w-7xl mx-auto  text-center">
            <h2 className="font-bold text-5xl text-white pt-12 mb-6">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className="text-base text-white mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className="bg-[#FFFFFF] px-8 py-3 rounded-full text-[#9538E2] text-xl font-bold">Shop Now</button>
        </div>
        
            <div className="absolute pl-[220px] pt-[48px]">
                <img src={BannerPng} alt="banner image" className='w-[1062px] h-[563px] rounded-3xl ' />
            </div>
        
       </div>
    );
};

export default Banner;