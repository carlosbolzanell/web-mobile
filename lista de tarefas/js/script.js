let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdd = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');

let adicionarTarefa = function(){
    let nomeTarefa = campoTarefa.value;

    let novaTarefa = document.createElement('li');

    if(nomeTarefa != ''){
        novaTarefa.innerText = nomeTarefa;

        novaTarefa.addEventListener('click', function(){
            novaTarefa.classList.toggle("concluida")
        });
    
        let botaoRemv = document.createElement("button");
        botaoRemv.innerText = ("Remove");
    
        botaoRemv.addEventListener("click", function(){
            listaTarefas.removeChild(novaTarefa);
        });
    
        listaTarefas.appendChild(novaTarefa);
    
        novaTarefa.appendChild(botaoRemv);
    
        campoTarefa.focus();
    
        campoTarefa.value = null;
    
        botaoRemv.className = "botaoRmv";
        novaTarefa.className = "lista"
    }else{

    }


};

campoTarefa.addEventListener('keyup', function(enter){
    if(enter.key === 'Enter'){
        adicionarTarefa();
    }
})

botaoAdd.addEventListener("click", function(){
    adicionarTarefa();
})

