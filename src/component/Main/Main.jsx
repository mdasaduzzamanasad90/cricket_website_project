import { useEffect } from "react";
import { useState } from "react";
import Player from '../Player/Player'
import './Main.css'



const Main = () => {
    const [card , setcard] = useState([]);

    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setcard(data))
    },[])

    return (
        <main className='mx-40'>
            <div className="flex justify-between my-16 items-center">
                <h1 className="font-bold text-2xl">Available Players</h1>
                <div className="space-x-5">
                    <button className="text-lg py-2 px-4 rounded-lg bg-[#E7FE29] border font-bold">Available</button>
                    <button className="text-lg py-2 px-4 rounded-lg border font-bold">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    card.map((player) => (<Player key={player.id} player={player}></Player>))
                }
            </div>
            <div className="bg-white secion text-center mx-5 py-28 relative z-20 top-40 rounded-3xl">
                <h1 className="font-bold text-4xl mb-2">Subscribe to our Newsletter</h1>
                <p className="font-semibold text-lg text-[#00000080] mb-5">Get the latest updates and news right in your inbox!</p>
                <div className="space-x-5">
                    <input className="border rounded-lg w-96 h-10 px-5 " placeholder="Enter your email" type="email" name="" id="" />
                    <button className="bg-[#E7FE29] border h-10 w-28 rounded-lg font-bold">Subscribe</button>
                </div>
            </div>
        </main>
    );
};

export default Main;