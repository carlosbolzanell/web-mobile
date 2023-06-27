let listCompras = document.getElementById('lista-compras')
let botaoAdd = document.getElementById('add-btn')
let input = document.getElementById('item-input')
let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];

itensSalvos.forEach(addItemList);
botaoAdd.addEventListener('click', function(){
    let nomeItem = input.value;
    addItemList(nomeItem);

    itensSalvos.push(nomeItem);
    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    input.value = "";

})

function addItemList(nomeItem){
    let itemList = document.createElement('li')
    itemList.innerText = nomeItem;
    listCompras.appendChild(itemList);
}