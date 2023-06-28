
let titulo = document.getElementById('titulo');
let quadro = document.querySelector('.quadro');

let contador = 0;
let contador2 = 0;
let jogador = '';

do{
    jogador = prompt('DIgite seu User');
    if(!jogador){
        alert("User Inválido");
    }
}while(!jogador);

let quest = ['Quantos anos tem a pessoa mais velha do mundo?','Quanto é (10%)²?', 'Quantos litros de sangue tem uma pessoa adulta?', 'Quantos km² tem o Brasil?', 'Qual a capital do Afeganistão', 'Quantos filhos tem a rainha Elizabeth II', 'Quem desses nasceu em 1968?', 'Quem criou Bob Esponja?', 'Em que ano foi abolida a escravidão no Brasil','Quantos nomes tinha Dom Pedro II' ]
let respostas = [['115 anos','118 anos','120 anos','123 anos'],['1%','10%','100%','0,1%'],['5 litros','7 litros','4 litros','6 litros'],['8.51 Mi','9.37 Mi', '10,3 Mi', '7.97 Mi'],['Kabul','Kandar','Daca','Herat'],['4','3','2','5'],['Will Smith', 'Leonardo DiCaprio','Keanu Reeves','Tom Cruise'],['Stephen Hillenburg','Ben Bocquelet','Pendleton Ward','Minty Lewis'],['1888','1890','1883','1879'],['17','19','22','25']];

questoes(quest, respostas);


function questoes(quest, respostas){
    contador2++;
    if(contador2 == 10){
        acabar();
    }
    
    quadro.innerHTML = "";
    let titulo = document.createElement('h1');

    titulo.className = 'titulo';
    titulo.textContent = quest[0];

    let opc = respostas[0];
    let random = Math.floor(Math.random()*4);
    let correta = opc[0];
    opc.splice(0,1,opc[random]);
    opc.splice(random, 1, correta);

    let div = document.createElement('div');
    div.className = 'botoes';

    let div2 = document.createElement('div');
    div2.className = 'botao';

    for(let i=0; i<4; i++){
        let btn = document.createElement('button');
        btn.className = 'altr';
        btn.innerText = opc[i];

        if(i == random){
            btn.addEventListener('click', function(){
                btn.style.backgroundColor = 'lime';
                setTimeout(function(){
                    quest.shift();
                    respostas.shift();
                    questoes(quest,respostas);
                    contador++;
                },500);
            })
            
        }else{
            btn.addEventListener('click', function(){
                btn.style.backgroundColor = 'red';
                setTimeout(function(){
                    quest.shift();
                    respostas.shift();
                    questoes(quest,respostas);
                },500);
            })
        }
        div.appendChild(btn);
    }
    quadro.appendChild(titulo);
    quadro.appendChild(div);

}

function acabar(){
    let pontosTxt = "pontos!";
    if (contador == 1) {
        pontosTxt = "ponto!"    
    }
    alert('Você conseguiu '+contador+" "+pontosTxt);
    rankingLS.push([jogador, contador]);
    rankingLS.sort(function (a, b) {
        return a[1] - b[1];
    });
    rankingLS.reverse();
    localStorage.setItem("ranking", JSON.stringify(rankingLS));
}


