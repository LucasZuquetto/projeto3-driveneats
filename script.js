function selecionarcomida(elemento){
    let foodselect = document.querySelector('.menu-prato .selecionado')
    if(foodselect !== null){
        foodselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
    FecharPedido()
}
function selecionarbebida(elemento){
    let drinkselect = document.querySelector('.menu-bebida .selecionado')
    if(drinkselect !== null){
        drinkselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
    FecharPedido()
}
function selecionarsobremesa(elemento){
    let dessertselect = document.querySelector('.menu-sobremesa .selecionado')
    if(dessertselect !== null){
        dessertselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
    FecharPedido()
}
function FecharPedido(){
    const ComidaSelecionada = document.querySelector(".menu-prato .selecionado")
    const BebidaSelecionada = document.querySelector(".menu-bebida .selecionado")
    const SobremesaSelecionada = document.querySelector(".menu-sobremesa .selecionado")
    const MudarTexto = document.querySelector(".textopedido")
    const Botaopedido = document.querySelector(".btn")
    if (ComidaSelecionada && BebidaSelecionada && SobremesaSelecionada !== null){
        MudarTexto.innerHTML = "Fechar Pedido"
        MudarTexto.classList.add('paddingtop')
        Botaopedido.classList.add('corbotao')
    }
}
