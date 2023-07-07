let pc = document.getElementById("pc");
let card = document.getElementById('card-pc');
let telaPc = document.querySelector('.tela-pc');
let botaoPc = document.getElementById('botao-pc')
let titulo = document.createElement('h1')
titulo.className = 'titulo'
let parg = document.createElement('p');
parg.className = 'paragrafo'

pc.addEventListener('targetFound', event=>{
    telaPc.style.display = 'flex';
})

botaoPc.addEventListener('click', function(){
    telaPc.style.display = 'none';
})

function virarTela(){
    telaPc.addEventListener('click', function(){
        
    })
}

let fonte = document.getElementById('fonte')
fonte.addEventListener('targetFound', event=>{
    telaPc.innerHTML = '';
    titulo.innerText = 'Fonte de alimentação'
    parg.innerText = 'A fonte de alimentação é responsável por fornecer energia elétrica a todos os componentes do computador. Ela converte a corrente elétrica da tomada em voltagens adequadas para os componentes internos, garantindo um fornecimento estável e seguro de energia.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
});

let hd = document.getElementById('hd');
hd.addEventListener('targetFound', event=>{
    telaPc.innerHTML = ''
    titulo.innerText = 'Disco Rígido (HD)'
    parg.innerText = 'O disco rígido é responsável pelo armazenamento permanente de dados no computador. Ele utiliza discos magnéticos para gravar e ler as informações. É nele que ficam armazenados o sistema operacional, os arquivos do usuário, aplicativos e outros dados.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
})

let placaVideo = document.getElementById('placa-video');
placaVideo.addEventListener('targetFound', event=>{
    telaPc.innerHTML = '';
    titulo.innerText = 'Placa de Video'
    parg.innerText = 'A placa de vídeo é responsável pelo processamento e geração de imagens para serem exibidas no monitor. Ela possui sua própria memória e processador dedicado, permitindo que aplicativos gráficos e jogos sejam executados com desempenho e qualidade visual superiores.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
})

let processador = document.getElementById('processador')
processador.addEventListener('targetFound', event=>{
    telaPc.innerHTML = '';
    titulo.innerText = 'Processador'
    parg.innerText = 'O processador é o cérebro do computador. Ele executa as instruções e realiza os cálculos necessários para o funcionamento do sistema operacional e dos programas. A velocidade e o desempenho do processador afetam diretamente a capacidade de processamento do computador.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
});

let ram1 = document.getElementById('ram1');
ram1.addEventListener('targetFound', event=>{
    telaPc.innerHTML = '';
    titulo.innerText = 'Memória RAM'
    parg.innerText = 'A memória RAM (Random Access Memory) é usada para armazenar temporariamente os dados e as instruções que estão sendo processados pelo computador. Quanto mais RAM um computador possui, maior é sua capacidade de executar várias tarefas simultaneamente e lidar com programas mais pesados.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
})
let ram2 = document.getElementById('ram2');
ram2.addEventListener('targetFound', event=>{
    telaPc.innerHTML = '';
    titulo.innerText = 'Memória RAM'
    parg.innerText = 'A memória RAM (Random Access Memory) é usada para armazenar temporariamente os dados e as instruções que estão sendo processados pelo computador. Quanto mais RAM um computador possui, maior é sua capacidade de executar várias tarefas simultaneamente e lidar com programas mais pesados.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
})

let ventoinha = document.getElementById('ventoinha');
ventoinha.addEventListener('targetFound', event=>{
    telaPc.innerHTML = '';
    titulo.innerText = 'Ventoinha'
    parg.innerText = ' As ventoinhas e sistemas de resfriamento são responsáveis por manter a temperatura adequada dentro do computador. Eles dissipam o calor gerado pelos componentes, como o processador e a placa de vídeo, evitando o superaquecimento e garantindo o bom funcionamento e a vida útil dos dispositivos.'
    telaPc.appendChild(titulo)
    telaPc.appendChild(parg)
    telaPc.appendChild(botaoPc)
    telaPc.style.display = 'flex';
})