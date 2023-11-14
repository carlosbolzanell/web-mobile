
import "./Delivery.css"
import { useState } from "react"

const image = ['./assets/img1.png', './assets/img2.png', './assets/img3.png'];

export default function Delivey(){
    const [text, setText] = useState('Preparando')
    const [images, setImages] = useState(image[0]);
    const mudarEstado = (estado)=>{
        setText(estado);
        switch(estado){
            case "Preparando":
                setImages(image[0])
                break;
            case "Em Transito":
                setImages(image[1])
                break;
            case "Entregue":
                setImages(image[2]);
                break;
            default:
                break;
        }
    }
    return(
        <div className="delivery">
            <h2 className="status">{text}</h2>
            <img className="img" src={images} alt="imagens" />
            <div className="butoes">
                <button onClick={()=>{mudarEstado("Preparando")}}>Preparando</button>
                <button onClick={()=>{mudarEstado("Em Transito")}}>Em Transito</button>
                <button onClick={()=>{mudarEstado("Entregue")}}>Entregue</button>
            </div>
        </div>
    )
}