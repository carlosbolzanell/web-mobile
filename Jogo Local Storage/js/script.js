
let titulo = document.getElementById('titulo');

let contador = 0;
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
    if(quest.lenght <= 0 || respostas.lenght <=0){
        acabar();
    }
    titulo.innerText = quest[0];

    let opc = respostas[0];
    let random = Math.floor(Math.random()*4);
    let correta = opc[0];
    opc.splice(0,1,opc[random]);
    opc.splice(random, 1, correta);

    let div = document.createElement('div');

    for(let i=0; i<4; i++){
        let btn = document.createElement('button');
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
    document.body.appendChild(div);

}


