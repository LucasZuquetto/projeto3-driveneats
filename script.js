function selecionarcomida(elemento){
    let foodselect = document.querySelector('.menu-prato .selecionado')
    if(foodselect !== null){
        foodselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
}
function selecionarbebida(elemento){
    let drinkselect = document.querySelector('.menu-bebida .selecionado')
    if(drinkselect !== null){
        drinkselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
}
function selecionarsobremesa(elemento){
    let dessertselect = document.querySelector('.menu-sobremesa .selecionado')
    if(dessertselect !== null){
        dessertselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
}