

const Footer = () => {
  return (
   <div className="bg-white">
     <div className="max-w-7xl mx-auto  py-28 mt-12 ">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-black mb-3">Gadget Heaven</h2>
        <p className="text-base text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="divider py-6"></div>
      <footer className="footer  justify-evenly  px-8">
        <nav>
          <h6 className="footer text-black font-bold text-lg">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer text-black font-bold text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>

        </nav>
        <nav>
          <h6 className="footer text-black font-bold text-lg">Legal</h6>
          <a className="link link-hover">Terms of Service </a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
   </div>
  );
};

export default Footer;