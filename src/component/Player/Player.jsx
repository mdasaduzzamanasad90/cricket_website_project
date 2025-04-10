import { FaUser } from 'react-icons/fa';
import { IoFlagSharp } from "react-icons/io5";
import PropTypes from "prop-types";

const Player = ({player}) => {

    const {image,name,country,role,battingStyle,bowlingStyle,biddingPrice} = player;

    return (
        <div className='p-6 border rounded-lg'>
            <div>
                <img className='w-72 h-60 object-cover rounded-2xl' src={image} alt="" />
            </div>
            <div className='border-b py-4'>
                <div className='flex gap-8 items-center'>
                    <FaUser></FaUser>
                    <h1 className='font-bold '>{name}</h1>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center gap-3'>
                        <IoFlagSharp />
                        <h3>{country}</h3>
                    </div>
                    <button className='bg-[#1313130D] rounded-lg py-2 w-32'>{role}</button>
                </div>
            </div>
            <div>
                <h1>Rating</h1>
                {battingStyle === null?<h1>Not Available</h1>:<h1>{battingStyle}</h1>}
                {bowlingStyle === null?<h1>Not Available</h1>:<h1>{bowlingStyle}</h1>}
                <div className='flex justify-between items-center'>
                    <h1>Price : ${biddingPrice}</h1>
                    <button className='border w-32 py-1 rounded-lg'>Choose Player</button>
                </div>
            </div>
        </div>
    );
}

Player.PropTypes = {
    player: PropTypes.object.isRequired,
}

export default Player;