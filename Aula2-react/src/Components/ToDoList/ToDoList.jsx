import { useState } from "react";
import './ToDoList.css';

export default function ToDoList(){
    const [list, setList] = useState([]);

    const addList = () =>{
        if(document.getElementById('input').value == '') return;

        const taskName = document.getElementById('input').value
        const updatedTasks = [...list, taskName];
        setList(updatedTasks);

        document.getElementById('input').value = '';
    }
    const removeTask = (task)=>{
        const taskTemp = [...list];
        const index = taskTemp.indexOf(task)
        taskTemp.splice(index, 1);
        setList(taskTemp);
    }
    return(
        <div className="toDo">
            <div className="inputs">
                <input type="text" placeholder="Escreva sua Tarefa" id="input"/>
                <button onClick={()=> {addList()}}>Adicionar</button>
            </div>
            <div className="tasks">
                {
                    list.map((task, index)=>{
                        return(
                            <>  
                                <div className="task" key={index}>
                                    <p>{task}</p>
                                    <button onClick={()=>{removeTask(task)}}>🗑</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}