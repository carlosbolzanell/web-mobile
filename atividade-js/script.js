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
const error = document.getElementById('erro');
const cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value));

async function buscaEndereco(cep){
    error.innerText = '';
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('estado')
    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro') 
    const complemento = document.getElementById('complemento')

    try{
        const consultarCEP = await fetch('https://viacep.com.br/ws/'+cep+'/json/')
        const consultarCEPConvert = await consultarCEP.json();
    
        if(consultarCEPConvert.erro){
            throw Error('CEP inexistente')
        }else{
            console.log(consultarCEPConvert)
        }
        
        cidade.value = consultarCEPConvert.localidade;
        console.log(consultarCEPConvert);

        uf.value = consultarCEPConvert.uf;

        endereco.value = consultarCEPConvert.logradouro;

        bairro.value = consultarCEPConvert.bairro;

        complemento.value = consultarCEPConvert.complemento;
    }
    catch(erro){
        console.log(erro);
        error.innerHTML = '<p>Erro: CPF inválido</p>';
        cidade.value = '';
        uf.value = '';
        endereco.value = '';
        bairro.value = '';
        complemento.value = ''

    }
}
