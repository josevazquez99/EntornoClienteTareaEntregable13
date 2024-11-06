import { useState } from 'react'        
const Avatar = ({name})=>{
    const[colorDeLetras,setColorDeLetras]=useState("black")   
    const colores = ["red","blue","green","yellow","black","white"]
    const changeColor = ()=>{
        setColorDeLetras(colores[Math.floor(Math.random()*colores.length)])}
    return<> {
        name ? ( 
        <h1 onClick={changeColor} style={{color:colorDeLetras}}>{name}</h1>
        ) : (
            <h1 onClick={changeColor} style={{color:colorDeLetras}}>{name='No has puesto nombre'}</h1>

        )
    }
    
        </>
}

export default Avatar