import { useState } from 'react'
import './Header.css'

export default function Header() {
    const [screen, setScreen] = useState('T');

    const mudarTela = () =>{
        if(screen == 'T'){
            setScreen('D');
        }else{
            setScreen('T');
        }
    }
    return (
        <header className="header">
            <h2 className="logo">App</h2>
            <ul className="list">
                <li><a href="" onClick={()=>{mudarTela()}}>Delivery</a></li>
                <li><a href="" onClick={()=>{mudarTela()}}>Lista de Tarefas</a></li>
            </ul>
            <a href="" className="modo">🌞</a>
        </header>
    )
}