import { useState } from 'react'
import './Header.css'

document.body.className = 'modo-claro';
// eslint-disable-next-line react/prop-types
export default function Header({ changePage }) {
    const [modo, setModo] = useState('claro');

    const mudarModo = () =>{
        if(modo == 'claro'){
            document.body.className = 'modo-escuro'
            setModo('escuro');
            document.getElementById('modo').innerText = "🌚";
        }else{
            document.body.className = 'modo-claro'
            setModo('claro');
            document.getElementById('modo').innerText = "🌞";
        }
    }

    return (
        <header className="header">
            <h2 className="logo">App</h2>
            <nav>
                <ul className="list">
                    <li>
                        <button className='btn' onClick={()=>{changePage('Delivery')}}>Delivery</button>
                    </li>
                    <li>
                        <button className='btn' onClick={()=>{changePage('ToDoList')}}>Lista de Tarefas</button>
                    </li>
                </ul>
            </nav>
            <button className="modo" id='modo' onClick={()=>{mudarModo()}}>🌞</button>
        </header>
    )
}