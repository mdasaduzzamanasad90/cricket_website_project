import PropTypes from "prop-types";
import Playercard from "../Playercard/Playercard";
const Playercards = ({abailableclickbutton,playercardi}) => {
    return (
        <div>
            <div className="space-y-5 mb-16">
                {
                    playercardi.map((playerdata , idx)=>(<Playercard key={idx} playerdata={playerdata}></Playercard>))
                }
            </div>
            <button onClick={abailableclickbutton} className="border bg-[#E7FE29] px-4 py-3 rounded-lg font-bold text-base ">Add More Player</button>
        </div>
    );
};

Playercards.PropTypes ={
    abailableclickbutton: PropTypes.func,
    playercardi: PropTypes.array.isRequired,
}

export default Playercards;