import { useContext, useEffect, useState } from 'react'
import axios from "axios";
import GetDeckContext from '../context/GetDeckContext'


/*rafce */
const FormularioJB = ({nombre,setNombre}) => {
    const {getIdPlayer,setIdPlayer,getDeckInit,visiblePedirInicial,getDeckSecond} = useContext(GetDeckContext)
    const [name,setName] = useState('')
    const [visibleIniciar,setVisibleIniciar] = useState(false)

    useEffect(() => {
        const getIdPlayer = async ()=>{
            const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
            const { data } = await axios.get(url);
            setIdPlayer(data.deck_id) 
          }
          getIdPlayer(); 
      }, []);
       

    const handleButton = () =>{
        setNombre(name);
        getDeckInit()
        setVisibleIniciar(true)
    }

    const handleChange =({ target }) =>{
        setName(target.value);
    }



  return (
    <div>
    {visibleIniciar?<input hidden type="text" onChange={handleChange} placeholder="Escriba su nombre" />:<input type="text" onChange={handleChange} placeholder="Escriba su nombre" />}
    {visibleIniciar?<button hidden onClick={handleButton}>Iniciar Juego</button>:<button onClick={handleButton}>Iniciar Juego</button>}
    {visibleIniciar?<h1 >Hola {nombre}</h1>:<h1 hidden></h1>}
    {visibleIniciar?<button onClick={getDeckSecond}>Pedir Carta</button>:<button hidden onClick={getDeckSecond}>Pedir Carta</button>}

    </div>
  )
}

export default FormularioJB