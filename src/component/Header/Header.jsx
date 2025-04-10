
import logo from '../../assets/images/logo.png';
import cricketimgbatbol from '../../assets/images/banner-main.png'
import './Header.css'
const Header = () => {
    return (
        <div className='mx-40'>
            <nav className='flex items-center justify-between my-10'>
                <img src={logo} alt="" />
                <div className='flex items-center gap-10'>
                    <ul className='flex gap-10'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <button className='px-4 py-2 rounded-lg font-bold bg-gray-100  text-green-400 '>Blance : $</button>
                </div>
            </nav>
            <header className='backgroundimg  headerhight rounded-2xl'>
                <div className='flex justify-center'>
                    <img className='py-12' src={cricketimgbatbol} alt="" />
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='font-extrabold text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='font-medium text-2xl text-[#00000099]'>Beyond Boundaries Beyond Limits</p>
                    <button className='font-bold py-2 px-4 rounded-lg bg-[#E7FE29] border'>Claim Free Credit</button>
                </div>
            </header>
        </div>
        
    );
};

export default Header;