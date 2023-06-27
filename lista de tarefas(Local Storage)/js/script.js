let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdd = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');
let botaoModo = document.querySelector('#botaoModo');

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(addLista);

let adicionarTarefa = function(){
    let nomeTarefa = campoTarefa.value;
    addLista(nomeTarefa);

    

    campoTarefa.value = "";
}

function addLista(nomeTarefa){
    let novaTarefa = document.createElement('li');

    
    novaTarefa.innerText = nomeTarefa;

    novaTarefa.addEventListener('click', function(){
        novaTarefa.classList.toggle("concluida")
    });
    
    let botaoRemv = document.createElement("button");
    botaoRemv.innerText = ("Remove");
    
    botaoRemv.addEventListener("click", function(){

        for (let i = 0; i < document.getElementsByClassName("lista").length; i++) {
            if (novaTarefa == document.getElementsByClassName("lista")[i]) {
              itensSalvos.splice(i, 1);
            }
        }
        listaTarefas.removeChild(novaTarefa);
        localStorage.setItem("itens", JSON.stringify(itensSalvos));
            
    });
    
    listaTarefas.appendChild(novaTarefa);
    
    novaTarefa.appendChild(botaoRemv);
    
    campoTarefa.focus();
        
    botaoRemv.className = "botaoRmv";
    novaTarefa.className = "lista"
    
}

campoTarefa.addEventListener('keyup', function(enter){
    if(enter.key === 'Enter'){
        if(campoTarefa.value != ''){
            itensSalvos.push(campoTarefa.value);
            localStorage.setItem('itens', JSON.stringify(itensSalvos));
            adicionarTarefa();
        }
        
    }
});

botaoAdd.addEventListener("click", function(){
    if(campoTarefa.value != ''){
        itensSalvos.push(campoTarefa.value);
        localStorage.setItem('itens', JSON.stringify(itensSalvos));
        adicionarTarefa();
    }
    
});
document.body.className = localStorage.getItem("modo") || "modo-claro";
botaoModo.addEventListener('click', function(){
    if(document.body.className == 'modo-escuro'){
        document.body.className = 'modo-claro';
    }else{
        document.body.className = 'modo-escuro';
    }
    localStorage.setItem("modo", document.body.className);
    
})

