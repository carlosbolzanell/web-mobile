
import "./Delivery.css"
import { useState } from "react"

export default function Delivey(){
    const [text, setText] = useState('')
    const mudarEstado = (estado)=>{
        setText(estado);
    }
    return(
        <div>
            <h2>{text}</h2>
            <div>
                <button onClick={()=>{mudarEstado("Pendente")}}>Pendente</button>
                <button onClick={()=>{mudarEstado("Em Transito")}}>Em Transito</button>
                <button onClick={()=>{mudarEstado("Entregue")}}>Entregue</button>
            </div>
        </div>
    )
}