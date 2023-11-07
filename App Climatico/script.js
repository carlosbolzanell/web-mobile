const cidade = document.getElementById('cidade')

const botao = document.getElementById('botaoPesquisa')

const div = document.querySelector('.div')
const temps = document.querySelector('.temperaturas')

botao.addEventListener('click', ()=> buscarCidade());

cidade.addEventListener('keyup', function(enter){
    if(enter.key === 'Enter'){
       buscarCidade();
    }
});

async function buscarCidade(){

    let cidade2 = cidade.value.replaceAll(" ", "_");
    console.log(cidade2);

    try{

        temps.innerHTML = '';

        const consultarCidade = await fetch(`http://api.weatherapi.com/v1/current.json?key=f7b2628f78e049b2ab6221158231107&q= ${cidade2}`)
        const cidadeConvert = await consultarCidade.json();

        console.log(cidadeConvert);

        let temperatura = document.createElement('p')
        let sensacao = document.createElement('p')
        let vento = document.createElement('p')
        let umidade = document.createElement('p')

        temperatura.innerHTML = "<i class='fa-solid fa-sun'></i>   " + "Temperatura: "+cidadeConvert.current.temp_c +"°C"
        sensacao.innerHTML = "<i class='fa-solid fa-temperature-quarter'></i>   " + "Sensação Térmica: "+cidadeConvert.current.feelslike_c+ "°C";
        umidade.innerHTML = "<i class='fa-solid fa-droplet'></i>   " + "Umidade: "+cidadeConvert.current.humidity+"%";
        vento.innerHTML= "<i class='fa-solid fa-wind'></i>   " + "Velocidade do Vento: "+cidadeConvert.current.wind_kph+" kph";
        
        temps.appendChild(temperatura);
        temps.appendChild(sensacao);
        temps.appendChild(umidade);
        temps.appendChild(vento);
    }
    catch(erro){
        console.log('erro');
    }
}
