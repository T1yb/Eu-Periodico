// pegar valores
var body = document.getElementById("body"),next =document.getElementById("next"), hj = document.getElementById("perguntaa"),jogo = document.getElementById("jogo"), nometa = document.getElementById("nometa"),nometv = document.getElementById("nometv")
var config = document.getElementById("config"),voltar = document.getElementById("voltar"), vendoelemento = document.getElementById("vendo-elemento"),bt2 = document.getElementById("bt2")
var bt1 = document.getElementById("bt1"),teladeescolha = document.getElementById("tela-de-escolha"),play = document.getElementById("play"),area = document.getElementById("are")
var chute = document.getElementById("chute"),proxch = document.getElementById("proxch"),chutbb = document.getElementById("chutbb"),vito =document.getElementById("vitoriap")
var menub = document.getElementById("menub")
// troca de pagina
play.addEventListener('click', ()=> {
    var vermelhop= document.getElementById("vermelho"),azulp= document.getElementById("azul"),turnop = document.getElementById("tunon")
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
    radomp()
})

//codigo 

    // pagina de ver o elemento
    var elem = document.getElementById("elem"),elemnome = document.getElementById("elemnome")
    var vusu1 = false,vusu2 = false
    var elementos = [
        {nome: 'Lítio' , sigla: 'Li'},
        {nome: 'Sódio', sigla: 'Na'},
        {nome: 'Hidrogenio', sigla: 'H'},
        {nome: 'Berilio', sigla: 'Be'},
        {nome: 'Magnésio', sigla: 'Mg'},
        {nome: 'potássio', sigla: 'K'},
        {nome: 'Cálcio', sigla: 'Ca'},
        {nome: 'Rubídio', sigla: 'Rb'},
        {nome: 'Estrôncio', sigla: 'Sr'},
        {nome: 'Césio', sigla: 'Cs'},
        {nome: 'Bário', sigla: 'Ba'},
        {nome: 'Frâncio', sigla: 'Fr'},
        {nome: 'Rádio', sigla: 'Ra'},
        {nome: 'Escândio', sigla: 'Sc'},
        {nome: 'Titânio', sigla: 'Ti'},
        {nome: 'Ítrio', sigla: 'Y'},
        {nome: 'Zircônio', sigla: 'Zr'},
        {nome: 'Háfnio', sigla: 'Hf'},
        {nome: 'Vanárdio', sigla: 'V'},
        {nome: 'Nióbio', sigla: 'Nb'},
        {nome: 'Tântalo', sigla: 'Ta'},
        {nome: 'Crômio', sigla: 'Cr'},
        {nome: 'Molibdênio', sigla: 'Mo'},
        {nome: 'Tungstênio', sigla: 'W'},
        {nome: 'Manganês', sigla: 'Mn'},
        {nome: 'Rênio', sigla: 'Re'},
        {nome: 'Ferro', sigla: 'Fe'},
        {nome: 'Rutênio', sigla: 'Ru'},
        {nome: 'Ósmio', sigla: 'Os'},
        {nome: 'Cobalto', sigla: 'Co'},
        {nome: 'Ródio', sigla: 'Rh'},
        {nome: 'Irídio', sigla: 'Ir'},
        {nome: 'Níquel', sigla: 'Ni'},
        {nome: 'Paládio', sigla: 'Pd'},
        {nome: 'Platina', sigla: 'Pt'},
        {nome: 'Cobre', sigla: 'Cu'},
        {nome: 'Prata', sigla: 'Ag'},
        {nome: 'Ouro', sigla: 'Au'},
        {nome: 'Zinco', sigla: 'Zn'},
        {nome: 'Cádmio', sigla: 'Cd'},
        {nome: 'Mercúrio', sigla: 'Hg'},
        {nome: 'Boro', sigla: 'B'},
        {nome: 'Alumínio', sigla: 'Ai'},
        {nome: 'Gálio', sigla: 'Ga'},
        {nome: 'Índio', sigla: 'In'},
        {nome: 'Tálio', sigla: 'Tl'},
        {nome: 'Carbono', sigla: 'C'},
        {nome: 'Silício', sigla: 'Si'},
        {nome: 'Germânio', sigla: 'Ge'},
        {nome: 'Estanho', sigla: 'Sn'},
        {nome: 'Chumbo', sigla: 'Pb'},
        {nome: 'Nitrogênio', sigla: 'N'},
        {nome: 'Fósforo', sigla: 'P'},
        {nome: 'Arsênio', sigla: 'As'},
        {nome: 'Antimônio', sigla: 'Sb'},
        {nome: 'Bismuto', sigla: 'Bi'},
        {nome: 'Oxigênio', sigla: 'O'},
        {nome: 'Enxofre', sigla: 'S'},
        {nome: 'Selênio', sigla: 'S'},
        {nome: 'Telúrio', sigla: 'Te'},
        {nome: 'Polônio', sigla: 'Po'},
        {nome: 'Flúor', sigla: 'F'},
        {nome: 'Cloro', sigla: 'Cl'},
        {nome: 'Bromo', sigla: 'Br'},
        {nome: 'Iodo', sigla: 'I'},
        {nome: 'Astato', sigla: 'At'},
        {nome: 'Hélio', sigla: 'He'},
        {nome: 'Neônio', sigla: 'Ne'},
        {nome: 'argônio', sigla: 'Ar'},
        {nome: 'Criptônio', sigla: 'Kr'},
        {nome: 'Xenônio', sigla: 'xe'},
        {nome: 'Radônio', sigla: 'rn'},
        {nome: 'Lantânio', sigla: 'la'},
        {nome: 'Cério', sigla: 'ce'},
        {nome: 'Praseodímio', sigla: 'pr'},
        {nome: 'Neodímio', sigla: 'nd'},
        {nome: 'Samário', sigla: 'sm'},
        {nome: 'Eurómio', sigla: 'eu'},
        {nome: 'Gadolínio', sigla: 'gd'},
        {nome: 'Térbio', sigla: 'tb'},
        {nome: 'Disprósio', sigla: 'dy'},
        {nome: 'Hólmio', sigla: 'ho'},
        {nome: 'Érbio', sigla: 'er'},
        {nome: 'Túlio', sigla: 'tm'},
        {nome: 'Itérbio', sigla: 'yb'},
        {nome: 'Luténcio', sigla: 'lu'},
        {nome: 'Actinio', sigla: 'ac'},
        {nome: 'Tório', sigla: 'th'},
        {nome: 'Protactínio', sigla: 'pa'},
        {nome: 'Urãnio', sigla: 'u'},
        ]

        var perguntas = [
            'voce e dos metais?',
            'voce e um dos nao-metais?',
            'voce e um dos semimetais?',
            'voce e um dos outros nao-metais?',
            'voce e um dos halogenios?',
            'voce e um dos gases nobres?',
            'voce e um dos metais alcalinos-terrosos?',
            'voce e um dos lantanoides?',
            'eu te encontro no meu dia a dia?',
            'tem vogal no seu simbolo?',
            'voce e um dos actinoides?',
            "voce esta entre 15 e 18?",
            "voce esta entre 10 e 14?",
            "voce esta entre 7 e 9?",
            "voce tem mais de 50 atomos?",
            "voce esta entre 4 e 6?",
            "voce esta entre 1 e 3?",
            'voce e um dos metais de transiçao?',
            'voce e um dos metais de pos transiçao?',
        ]
            function radom(){
                element1 = Math.floor(elementos.length * Math.random());
                element2 = Math.floor(elementos.length * Math.random());

                if (element1 == element2){
                    radom()
                }
            }
            function radomp() {
                perguntan = Math.floor(perguntas.length * Math.random());
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
            bt1.addEventListener('click', ()=> {
                ver1()
            })
            bt2.addEventListener('click', ()=> {
                ver2()
            })
            voltar.addEventListener('click', ()=> {
                if(vusu1 == true & vusu2 == true) {
                    vendoelemento.style.display = "none"  
                    jogo.style.display = 'block'
                    body.style.backgroundImage = "url(imgs/fundo_azul.jpg)"
                    hj.innerText = perguntas[perguntan]
                
                }else {
                teladeescolha.style.display = "block"
                vendoelemento.style.display = "none"                    
                }

            })
            var vez = "vermelho"
            next.addEventListener('click', ()=> {
                pro()
            })
            menub.addEventListener('click', ()=> {
               location.reload()
            })
            proxch.addEventListener('click', ()=> {
                var chvv = document.getElementById("ccv"),chzz = document.getElementById("ccz")
                var chv = chvv.value,chz = chzz.value
                console.log(elementos[element1].sigla)
                console.log(elementos[element2].sigla)
                if (chv == elementos[element1].sigla){
                    vito.style.display = "block" 
                    chute.style.display = 'none'
                    body.style.backgroundImage = "url(imgs/fundo_azul.jpg)"
                }else if (chz == elementos[element2].sigla){
                    vito.style.display = "block" 
                    chute.style.display = 'none'
                    body.style.backgroundImage = "url(imgs/fundo_vermelho.jpg)"
                }else {
                 chute.style.display = "none" 
                jogo.style.display = 'block'
                pro()  
                }

            })
            chutbb.addEventListener('click', ()=> {
                chut()
            })
            function chut () {
                chute.style.display = "block" 
                body.style.backgroundImage = "url(imgs/fundoo.png)"
                jogo.style.display = 'none'
            }
            function pro() {
                
                    if(vez == "azul"){
                        body.style.backgroundImage = "url(imgs/fundo_azul.jpg)"
                        radomp()
                        area.style.backgroundColor = "#4d71ffce"
                        hj.innerText = perguntas[perguntan]
                        vez = "vermelho"
                        prox()
                    }else {
                        body.style.backgroundImage = "url(imgs/fundo_vermelho.jpg)"
                        vez = "azul"
                        radomp()
                        hj.innerText = perguntas[perguntan]
                        area.style.backgroundColor = "rgb(255 0 0 / 80%)"
                        prox()
                    }
                }
    
            function prox(){
                radomp()
                hj.innerText = perguntas[perguntan]
            }