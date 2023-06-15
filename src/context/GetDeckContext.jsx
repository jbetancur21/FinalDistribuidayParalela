import { createContext, useState } from "react";
import axios from "axios";
const GetDeckContext = createContext();
import swal from "sweetalert";



const GetDeckProvider = ({children}) => {
  const [IdPlayer,setIdPlayer] = useState('')
  const [PlayerDeckInit,setPlayerDeckInit] = useState([])
  const [PlayerDeckSecond,setPlayerDeckSecond] = useState([{value:0}])
  const [visiblePedirInicial,setVisiblePedirInicial] = useState(false)


  const getDeckInit = async ()=>{
    const url = `https://deckofcardsapi.com/api/deck/${IdPlayer}/draw/?count=1`;
    const { data } = await axios.get(url);
    setPlayerDeckInit(data.cards) 
    setVisiblePedirInicial(true)
  }
  
  const getDeckSecond = async ()=>{

    
    if (PlayerDeckInit[0].value === PlayerDeckSecond[0].value) {
      if(((PlayerDeckInit[0].suit === "DIAMONDS")&&(PlayerDeckSecond[0].suit==="CLUBS"))||((PlayerDeckInit[0].suit === "HEARTS")&&(PlayerDeckSecond[0].suit==="SPADES"))){
        swal({ title: 'Felicitaciones' ,text:"Felicidades haz encontrado la carta espejo"});
      }else{
        const url = `https://deckofcardsapi.com/api/deck/${IdPlayer}/draw/?count=1`;
			const { data } = await axios.get(url);
			setPlayerDeckSecond(data.cards);
      }
			
		} else {
			const url = `https://deckofcardsapi.com/api/deck/${IdPlayer}/draw/?count=1`;
			const { data } = await axios.get(url);
			setPlayerDeckSecond(data.cards);
		}


  }

  const data = {setIdPlayer,IdPlayer,PlayerDeckInit,getDeckInit,getDeckSecond,visiblePedirInicial,PlayerDeckSecond}
  return (
    <GetDeckContext.Provider value={data}>
      {children}
    </GetDeckContext.Provider>
  )
}

export default GetDeckContext;
export {GetDeckProvider};