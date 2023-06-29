let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

ranking.unshift(['Jogador','Pontos']);


ranking.forEach(adicionarJogador);

function adicionarJogador(jogador){

    let tabela = document.querySelector('.tabela');
    let tr = document.createElement("tr");
    let tdJogador = document.createElement("td");
    let tdPontos = document.createElement("td");
    tdJogador.className = 'jogador';
    tdPontos.className = 'pontos';

    tdJogador.textContent = jogador[0];
    tdPontos.textContent = jogador[1];

    tr.appendChild(tdJogador);
    tr.appendChild(tdPontos);
    tabela.appendChild(tr);
}

let botaoVoltar = document.getElementById("botaoBack");
botaoVoltar.addEventListener('click', function(){
    window.location.href = 'index.html';
})