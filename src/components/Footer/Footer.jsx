

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto py-28 mt-12 ">
            <div className="text-center ">
                <h2 className="text-3xl font-bold text-black mb-3">Gadget Heaven</h2>
                <p className="text-base text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider py-6"></div>
            <footer className="footer  justify-evenly  px-8">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;