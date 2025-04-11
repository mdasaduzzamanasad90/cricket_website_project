import { useEffect } from "react";
import { useState } from "react";
import Player from '../Player/Player'
import './Main.css'
import Playercards from "../Playercards/Playercards";



const Main = () => {
    const [card , setcard] = useState([]);
    const [playercardi,setplayercardi] = useState([]);


    const addplayercard = (playerdata) =>{
        console.log(playerdata);
        const allplayercard = [...playercardi , playerdata];
        setplayercardi(allplayercard);
        
    }


    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setcard(data))
    },[])
// seleected button
    const selectedclickbutton = () =>{

        const takeid = document.getElementById('abailableid');
        const takeid1 = document.getElementById('selectedid');

        const playertitle = document.getElementById("playerstitle");
        playertitle.innerHTML = `<h1>Selected Player (${playercardi.length}/6)</h1>`
        takeid1.classList.add("bg-[#E7FE29]");
        takeid.classList.remove("bg-[#E7FE29]");
        const availablesection = document.getElementById('availabledisplay');
        availablesection.classList.add('hidden');
        const selectedplayer = document.getElementById('seletdeplayer');
        selectedplayer.classList.remove('hidden');

    };

    // available button
    const abailableclickbutton =()=>{

        const takeid = document.getElementById('abailableid');
        const takeid1 = document.getElementById('selectedid');
        const playertitle = document.getElementById("playerstitle");

        playertitle.innerHTML =` <h1>Available Players</h1>`
        takeid1.classList.remove("bg-[#E7FE29]");
        takeid.classList.add("bg-[#E7FE29]");
        const availablesection = document.getElementById('availabledisplay');
        availablesection.classList.remove('hidden');
        const selectedplayer = document.getElementById('seletdeplayer');
        selectedplayer.classList.add('hidden');

    };

    return (
        <main className='mx-40'>
            <div className="flex justify-between my-16 items-center">
                <div id="playerstitle" className="font-bold text-2xl">
                    <h1>Available Players</h1>
                </div>
                <div className="space-x-5">
                    <button onClick={abailableclickbutton} id="abailableid" className="text-lg py-2 px-4 rounded-lg bg-[#E7FE29] border font-bold">Available</button>
                    <button onClick={selectedclickbutton} id="selectedid" className="text-lg py-2 px-4 rounded-lg border font-bold">Selected({playercardi.length})</button>
                </div>
            </div>
            <div id="availabledisplay" className="grid grid-cols-3 gap-5">
                {
                    card.map((player, idx) => (<Player key={idx} player={player} addplayercard={addplayercard}></Player>))
                }
            </div>
            <div id="seletdeplayer" className="hidden">
                <Playercards abailableclickbutton={abailableclickbutton} playercardi={playercardi}></Playercards>
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