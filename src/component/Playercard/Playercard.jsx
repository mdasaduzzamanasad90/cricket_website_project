import { AiTwotoneDelete } from "react-icons/ai";
import PropTypes from "prop-types";

const Playercard = ({playerdata,removebutton}) => {
    const {id,image,name,role,country,biddingPrice} = playerdata;
    return (
        <div className="flex items-center justify-between border p-5 rounded-xl">
            <div className="flex gap-5 items-center">
                <div>
                    <img className="w-20 h-20 object-cover rounded-xl" src={image} alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <div className="flex gap-5 font-semibold text-[#00000080]">
                        <p>{role}</p>
                        <p>{country}</p>
                        <p>${biddingPrice}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>removebutton(id)}><AiTwotoneDelete className="w-7 h-7 text-red-500 " /></button>
            </div>
        </div>
    );
};

Playercard.PropTypes ={
    playerdata: PropTypes.object.isRequired,
    removebutton: PropTypes.func,
}

export default Playercard;