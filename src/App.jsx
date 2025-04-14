
import { useState } from 'react'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import { ToastContainer, toast, Bounce } from 'react-toastify';


function App() {
  const notify = () => toast.success('Successfull ! You Claim Free Credit');
  const notify2 = () => toast.success('Successfull ! Your Player is Selected');
  const notify1 = () => toast.warn('Sorry! You Have Not Enough Money! Please Check and Recharge Your Balance');

  const [addtaka , settaka ] = useState(0);
  const [playercardi,setplayercardi] = useState([]);

  
  const addmoney =()=>{
      notify();
      const summoney = addtaka + 100000000 ;
      settaka(summoney);

  }
  
  const addplayercard = (playerdata) =>{
    const priceplayer = playerdata.biddingPrice;
    if (addtaka >= priceplayer) {
      
      const sum = addtaka - priceplayer;
      settaka(sum);

      const allplayercard = [...playercardi , playerdata];
      setplayercardi(allplayercard);

      const choosebutton = document.getElementById(playerdata.id);
      choosebutton.innerText = 'Selected';
      choosebutton.classList.add('bg-[#E7FE29]');

      notify2();


    }
    else{

      notify1();
      return;
      
    }
};

  return (
    <>
      <Header addmoney={addmoney} addtaka={addtaka}></Header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Main playercardi={playercardi} setplayercardi={setplayercardi} addplayercard={addplayercard}></Main>
      <Footer></Footer>

    </>
  )
}

export default App