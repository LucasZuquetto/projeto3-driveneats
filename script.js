function selecionarcomida(elemento){
    const foodselect = document.querySelector('.menu-prato .selecionado')
    if(foodselect !== null){
        foodselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
    FecharPedido()
}
function selecionarbebida(elemento){
    const drinkselect = document.querySelector('.menu-bebida .selecionado')
    if(drinkselect !== null){
        drinkselect.classList.remove('selecionado')
    }
    elemento.classList.add('selecionado')
    FecharPedido()
}
function selecionarsobremesa(elemento){
    const dessertselect = document.querySelector('.menu-sobremesa .selecionado')
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
function EnviarWpp(){
    let NomeComida = document.querySelector('.menu-prato .selecionado h3')
    NomeComida = NomeComida.innerHTML
    let PrecoComida = document.querySelector('.menu-prato .selecionado span')
    PrecoComida = PrecoComida.innerHTML
    let NomeBebida = document.querySelector('.menu-bebida .selecionado h3')
    NomeBebida = NomeBebida.innerHTML
    let PrecoBebida = document.querySelector('.menu-bebida .selecionado span')
    PrecoBebida = PrecoBebida.innerHTML
    let NomeSobremesa = document.querySelector('.menu-sobremesa .selecionado h3')
    NomeSobremesa = NomeSobremesa.innerHTML
    let PrecoSobremesa = document.querySelector('.menu-sobremesa .selecionado span')
    PrecoSobremesa = PrecoSobremesa.innerHTML
    PrecoComida = Number(PrecoComida)
    PrecoBebida = Number(PrecoBebida)
    PrecoSobremesa = Number(PrecoSobremesa)
    let Precototal = Number(PrecoComida + PrecoBebida + PrecoSobremesa).toFixed(2)
    const Mensagem = `Olá, Gostaria de fazer o pedido:\n- Prato: ${NomeComida}\n- Bebida: ${NomeBebida}\n- Sobremesa: ${NomeSobremesa}\nTotal: R$ ${Precototal}`
    const EnviarMensagem = `https://wa.me/5555999738820?text=${encodeURIComponent(Mensagem)}`
    window.open(EnviarMensagem)
}