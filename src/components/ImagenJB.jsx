import GetDeckContext from '../context/GetDeckContext'
import { useContext, useState } from 'react'


const ImagenJB = () => {
    const {PlayerDeckInit,PlayerDeckSecond} = useContext(GetDeckContext)
  return (
    <div>
        <h2>Carta Original</h2>
    {PlayerDeckInit.map((mazoUno) => (
        <img key={mazoUno.code} src={mazoUno.image} />
      ))}

      <h2>Carta Espejo</h2>
      {PlayerDeckSecond.map((mazoDos) => (
        <img key={mazoDos.code} src={mazoDos.image} />
      ))}
    </div>
  )
}

export default ImagenJB