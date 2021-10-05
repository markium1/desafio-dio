let ordemClicada = []
let ordemCriada = []

let red = document.querySelector(".red")
let green = document.querySelector(".green")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")

function gerarOrdem(){
    let prox = Math.floor(Math.random() * 4)

    ordemCriada[ordemCriada.length] = prox

    for (i in ordemCriada){
        let element = elemento(prox)
        console.log(element)
        acender(element)
    }
    
}

function elemento(elem){

    if(elem == 1){
        return red
    }else if(elem == 2){
        return green
    }else if(elem == 3){
        return blue
    }else{
        return yellow
    }
}
function acender(elementoDiv){

    elementoDiv.classList.add('selecionado')
}

gerarOrdem()
