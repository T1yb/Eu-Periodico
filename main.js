// pegar valores
var nometa = document.getElementById("nometa"),nometv = document.getElementById("nometv"),config = document.getElementById("config"),voltar = document.getElementById("voltar"), vendoelemento = document.getElementById("vendo-elemento"),bt2 = document.getElementById("bt2"),bt1 = document.getElementById("bt1"),teladeescolha = document.getElementById("tela-de-escolha"),play = document.getElementById("play")
// troca de pagina
play.addEventListener('click', ()=> {
    var vermelhop= document.getElementById("vermelho"),azulp= document.getElementById("azul")
    var vermelho = vermelhop.value,azul= azulp.value
    if (vermelho == "") {
    }else {
        nometv.innerHTML = `${vermelho}`
    }
    if (azul == "") {
    }else {
        nometa.innerHTML = `${azul}`
    }
    config.style.display = "none"
    teladeescolha.style.display = "block"
    radom()
})
bt1.addEventListener('click', ()=> {
    ver1()
})
bt2.addEventListener('click', ()=> {
    ver2()
})
voltar.addEventListener('click', ()=> {
    teladeescolha.style.display = "block"
    vendoelemento.style.display = "none"
})
//codigo 

    // pagina de ver o elemento
    var elem = document.getElementById("elem"),elemnome = document.getElementById("elemnome")
    var vusu1 = false,vusu2 = false
    var elementos = [
        {nome: 'Lítio'},
        {nome: 'sódio'},
        {nome: 'potássio'},
        {nome: 'magnésio'},
        {nome: 'cálcio'},
        {nome: 'crômio'},
        {nome: 'ferro'},
        {nome: 'cobalto'},
        {nome: 'níquel'},
        {nome: 'cobre'},
        {nome: 'zinco'}
        ]

        var pergunta = [
            '???',
            '???',
            '???',
            '???'
        ]
            function radom(){
                element1 = Math.floor(elementos.length * Math.random());
                element2 = Math.floor(elementos.length * Math.random());
                if (element1 == element2){
                    radom()
                }
            }
            function ver1() {
                if(vusu1 == true){   
                }else {
                    vusu1 = true
                    vendoelemento.style.display = "block"
                    bt1.style.backgroundColor = '#D1F5F1'
                    teladeescolha.style.display = "none"
                    elem.innerHTML = `Seu Elemento e ${elementos[element1].nome}`
                    elemnome.innerHTML = elementos[element1].nome
                }
            }
            function ver2() {
                if(vusu2 == true){
                }else {
                    vusu2 = true
                    vendoelemento.style.display = "block"
                    bt2.style.backgroundColor = '#D1F5F1'
                    teladeescolha.style.display = "none"
                    elem.innerHTML = `Seu Elemento e ${elementos[element2].nome}`
                    elemnome.innerHTML = elementos[element2].nome
                }
            }

/*var elementos = [
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
    '???',
    '???',
    '???',
    '???'
]
function radom(){
    element1 = Math.floor(elementos.length * Math.random());
    element2 = Math.floor(elementos.length * Math.random());
    if (element1 == element2){
        radom()
    }
}
var rodada = 1,rodj = 0
var bt1 = document.getElementById('bt1'),bt2 = document.getElementById('bt2'),ag = document.getElementById('ag')
var titulo = document.getElementById('titulo'),back = document.getElementById('back'),nx = document.getElementById('nx')
var vusu1 = false,vusu2 = false
var fundo = document.getElementById('fundo')
radom()
setTimeout(function(){
    bt1.style.display = 'inline-block'
    bt2.style.display = 'inline-block'
    ag.style.display = 'none'
    titulo.style.display = 'block'
},5000);
bt1.addEventListener('click',()=>{
    if(vusu1 == true){
        bt1.style.backgroundColor = '#D1F5F1'
    }else {
    vusu1 = true
    bt1.style.display = 'none'
    bt2.style.display = 'none'
    fundo.style.backgroundColor = '#FF001B'
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
    fundo.style.backgroundColor = '#4D70FF'
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
    titulo.innerHTML = 'Qual e seu lado?'
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
    if (rodj == 20){
        var resposta = prompt("qual elemento ele e?")
        if (resposta == element1){
            alert("acertou!!!")
        }else if (resposta == element2){
            alert("acertou!!!")
        }else {
            alert("voce errou!!!")
        }
    }else {
        rodj = rodj + 1
        console.log(rodj)
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
}
*/