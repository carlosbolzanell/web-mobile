import { useState, useMemo, useEffect } from "react";
import './ToDoList.css';

const loadList = () =>{
    const itens = localStorage.getItem('list');
    return JSON.parse(itens);
}

export default function ToDoList() {
    const [list, setList] = useState(loadList);

    useEffect(()=>{
        saveList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);


    const saveList = () =>{
        const newList = [...list];
        localStorage.setItem('list', JSON.stringify(newList));
    }

    const addList = () => {
        if (document.getElementById('input').value == '') return;

        const taskName = document.getElementById('input').value
        const updatedTasks = [...list, taskName];
        setList(updatedTasks);

        document.getElementById('input').value = '';

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const removeTask = (task) => {
        const taskTemp = [...list];
        const index = taskTemp.indexOf(task)
        taskTemp.splice(index, 1);
        setList(taskTemp);
        localStorage.setItem('list', JSON.stringify(list))
    }

    const showList = useMemo(() => {
        return (
            list.map((task, index) => {
                return (
                    <>
                        <div className="task" key={index}>
                            <p>{task}</p>
                            <button className="excluir" onClick={() => { removeTask(task) }}>🗑</button>
                        </div>
                    </>
                )
            })
        )
    }, [list, removeTask]);

    return (
        <div className="toDo">
            <div className="inputs">
                <input type="text" placeholder="Escreva sua Tarefa" id="input" />
                <button onClick={() => { addList() }}>Adicionar</button>
            </div>
            <div className="tasks">
                {showList}
            </div>
        </div>
    )
}