let ordemClicada = []
let ordemCriada = []

let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let pontos = 1
function gerarOrdem(){
    let prox = Math.floor(Math.random() * 4)

    ordemCriada[ordemCriada.length] = prox
    console.log(ordemCriada)
    ordemClicada = []
    for (i in ordemCriada){
        let element = elemento(ordemCriada[i])
        acender(element, Number(i) + 1)
    }
    
}

function elemento(elem){

    if(elem == 0){
        return red
    }else if(elem == 1){
        return green
    }else if(elem == 2){
        return blue
    }else{
        return yellow
    }
}


function acender(elementoDiv, tempo){
    tempo = tempo * 500
    setTimeout(()=>{
        
        elementoDiv.classList.add('selecionado')
    }, tempo-250)
    setTimeout(()=>{
        elementoDiv.classList.remove('selecionado')
    },tempo);
}

function clicou(numCor){
    ordemClicada[ordemClicada.length] = numCor
    elemento(numCor).classList.add('selecionado')
    setTimeout(()=>{
        elemento(numCor).classList.remove('selecionado')
        comparar()
    },250);
}

function comparar(){

    for(i in ordemClicada){
        if(ordemClicada[i] != ordemCriada[i]){
            perdeu()
            break;
        }
    }
    if(ordemCriada.length == ordemClicada.length){
        pontos++;
        gerarOrdem()
    }

}

function perdeu(){
    alert(`Você perdeu! Pontos: ${pontos-1}`)
    ordemClicada = []
    ordemCriada = []
    iniciar()
}

function iniciar(){
    alert('Iniciando um novo jogo!')
    gerarOrdem()
}
red.onclick = () => clicou(0)
green.onclick = () => clicou(1)
blue.onclick = () => clicou(2)
yellow.onclick = () => clicou(3)
iniciar()
