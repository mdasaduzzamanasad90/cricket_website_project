import img from '../../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className='border bg-[#06091A] pt-52 pb-10 relative z-10'>
            <div className='flex justify-center'>
                <img src={img} alt="" />
            </div>
            <div className='flex justify-between my-10 mx-40'>
                <div className='text-left text-white'>
                    <h1 className='font-bold text-xl mb-5'>About Us</h1>
                    <p>We are a passionate team <br />dedicated to providing the best <br /> services to our customers.</p>
                </div>
                <div className='text-white text-left'>
                    <h1 className='font-bold text-xl mb-5'>Quick Links</h1>
                    <ul className='list-disc pl-5'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h1 className='font-bold text-xl mb-5'>Subscribe</h1>
                    <p className='text-left mb-3'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className=''>
                        <input className='border rounded-l-lg px-3 h-8' placeholder="Enter your email" type="email" name="" id="" />
                        <button className='font-bold border h-8 rounded-r-lg px-3'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-center text-white underline border-t border-white pt-10'>
                <h1 className='font-bold text-xl'>@2025 Your Company All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;