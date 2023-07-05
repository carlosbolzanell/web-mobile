// const consultarCEP = fetch('https://viacep.com.br/ws/8925611/json/')
// .then(resposta => resposta.json())
// .then(r =>{
//     if(r.erro){
//         throw Error('Esse CEP não existe')
//     }else{
//         console.log(r)    
//     }
// })

// .catch(err => console.log('Formato Errado'))
// .finally(msg => console.log('Concluido'))

// console.log(consultarCEP);

const cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value));

async function buscaEndereco(cep){
    try{
        const consultarCEP = await fetch('https://viacep.com.br/ws/'+cep+'/json/')
        const consultarCEPConvert = await consultarCEP.json();

        if(consultarCEPConvert.erro){
            throw Error('CEP inexistente')
        }else{
            console.log(consultarCEPConvert)
        }

        const cidade = document.getElementById('cidade');
        cidade.value = consultarCEPConvert.localidade;
        console.log(consultarCEPConvert);

        const uf = document.getElementById('estado')
        uf.value = consultarCEPConvert.uf;

        const endereco = document.getElementById('endereco')
        endereco.value = consultarCEPConvert.logradouro;

        const bairro = document.getElementById('bairro')
        bairro.value = consultarCEPConvert.bairro;

        const complemento = document.getElementById('complemento')
        complemento.value = consultarCEPConvert.complemento;
    }
    catch(erro){
        console.log(erro);
        const error = document.getElementById('erro');
        error.innerText = erro;

    }
}
