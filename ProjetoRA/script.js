let pc = document.getElementById("pc");
let card = document.getElementById('card-pc');
let telaPc = document.querySelector('.tela-pc');
let botaoPc = document.getElementById('botao-pc')

pc.addEventListener('targetFound', event=>{
    telaPc.style.display = 'flex';
})

botaoPc.addEventListener('click', function(){
    telaPc.style.display = 'none';
})

let fonte = document.getElementById('fonte')
fonte.addEventListener('targetFound', event=>{
    telaFonte.style.display = 'flex';
})