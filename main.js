var elementos = [
'Lítio',
'sódio',
'potássio',
'magnésio',
'cálcio',
'crômio',
'ferro',
'cobalto',
'níquel',
'cobre',
'zinco'
]

var pergunta = [
    'roberto',
    'foi',
    'fjfrh',
    'isso ai'
]
function radom(){
    element1 = Math.floor(elementos.length * Math.random());
    element2 = Math.floor(elementos.length * Math.random());
    if (element1 == element2){
        radom()
    }
}
var rodada = 1
var bt1 = document.getElementById('bt1'),bt2 = document.getElementById('bt2'),ag = document.getElementById('ag')
var titulo = document.getElementById('titulo'),back = document.getElementById('back'),nx = document.getElementById('nx')
var vusu1 = false,vusu2 = false
var fundo = document.getElementById('fundo')
radom()
setTimeout(function(){
    bt1.style.display = 'inline-block'
    bt2.style.display = 'inline-block'
    ag.style.display = 'none'
},2500);
bt1.addEventListener('click',()=>{
    if(vusu1 == true){
        bt1.style.backgroundColor = '#D1F5F1'
    }else {
    vusu1 = true
    bt1.style.display = 'none'
    bt2.style.display = 'none'
    back.style.display = 'block'
    titulo.style.display = 'block'
    titulo.innerHTML = `Seu elemento e ${elementos[element1]}`
}
})
bt2.addEventListener('click',()=>{
    if(vusu2 == true){
        bt2.style.backgroundColor = '#D1F5F1'
    }else {
    vusu2 = true
    bt1.style.display = 'none'
    bt2.style.display = 'none'
    back.style.display = 'block'
    titulo.style.display = 'block'
    titulo.innerHTML = `Seu elemento e ${elementos[element2]}`
    }
})
back.addEventListener('click',()=>{
    if(vusu1 == true & vusu2 == true) {
        bt1.style.display = 'none'
        bt2.style.display = 'none'
        back.style.display = 'none'
        nx.style.display = 'block'
        play()
    }else{
    bt1.style.display = 'inline-block'
    bt2.style.display = 'inline-block'
    titulo.style.display = 'none'
    back.style.display = 'none'
    if(vusu2 == true){
        bt2.style.backgroundColor = '#D1F5F1'
    }
    if(vusu1 == true){
        bt1.style.backgroundColor = '#D1F5F1'
    }
    }
})
nx.addEventListener('click',()=>{
    play()
})
function play() {
    if (rodada == 1){
        rodada = 2
        fundo.style.backgroundColor = '#FF001B'
        perguntan = Math.floor(pergunta.length * Math.random());
        titulo.innerHTML = `${pergunta[perguntan]}`
    }else if (rodada == 2){
        rodada = 1
        fundo.style.backgroundColor = '#4D70FF'
        perguntan = Math.floor(pergunta.length * Math.random());
        titulo.innerHTML = `${pergunta[perguntan]}`
    }
}