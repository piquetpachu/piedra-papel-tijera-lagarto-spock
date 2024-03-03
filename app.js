//opciones
const rock = 0;
const paper = 1;
const scisor = 2;
const lizar = 3;
const spoke = 4;
//resultado
const empate = 0;
const gana = 1;
const pierde = 2;

var img =["piedra", "papel", "tijera", "lagarto", "spock"]

const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scisorbtn = document.getElementById("scisor");
const lizarbtn = document.getElementById("lizar");
const spockbtn = document.getElementById("spoke");
const resulttext = document.getElementById("textStart")
const userID = document.getElementById("userID")
const pcID = document.getElementById("pcID")
const contadorjugador = document.getElementById("contadorjugador");
const contadoroponente = document.getElementById("contadoroponente");

rockbtn.addEventListener("click", ()=>{
    play(rock)
});
paperbtn.addEventListener("click", ()=>{
    play(paper)
    
});
scisorbtn.addEventListener("click", ()=>{
    play(scisor)
    
});
lizarbtn.addEventListener("click", ()=>{
    play(lizar)

});
spockbtn.addEventListener("click", ()=>{
    play(spoke)
    
});

var rachajugador = 0;
var rachamaquina = 0;

function play(userOption){
    userID.src = "img/"+img[userOption]+".png"

    resulttext.innerHTML = "Pensando..."

    const interval = setInterval (function(){
        const machinOption = Math.floor(Math.random()*5)
        pcID.src = "img/"+img[machinOption]+".png"


    },100)

    setTimeout(function(){

        clearInterval(interval)
        
        const machinOption = Math.floor(Math.random()*5)
        const result = calcresult(userOption, machinOption)
        
        pcID.src = "img/"+img[machinOption]+".png"
        
        switch(result){
            case empate:
                resulttext.innerHTML = "EMPATE!"   
                break
                case gana:
                    resulttext.innerHTML = "GANAS!"  
                    rachajugador++
                    contadorjugador.innerHTML = rachajugador
                    break
                    case pierde:
                        resulttext.innerHTML = "PIERDES!" 
                        rachamaquina++
                    contadoroponente.innerHTML = rachamaquina
                    break
                }

    },1000)
            
    
        }
        
        


function calcresult(userOption, machinOption){
    
    if(userOption === machinOption){
        return empate;

    }else if(userOption === rock){
        if(machinOption === paper)return pierde
        if(machinOption === scisor)return gana
        if(machinOption === lizar)return gana
        if(machinOption === spoke)return pierde

    }else if(userOption === paper){
        if(machinOption === rock)return gana
        if(machinOption === scisor)return pierde
        if(machinOption === lizar)return pierde
        if(machinOption === spoke)return gana

        
    }else if(userOption === scisor){
        if(machinOption === rock)return pierde
        if(machinOption === paper)return gana
        if(machinOption === lizar)return gana
        if(machinOption === spoke)return pierde

        
    }else if(userOption === lizar){
        if(machinOption === rock)return pierde
        if(machinOption === paper)return gana
        if(machinOption === scisor)return pierde
        if(machinOption === spoke)return gana

        
    }else if(userOption === spoke){
        if(machinOption === rock)return gana
        if(machinOption === paper)return pierde
        if(machinOption === scisor)return gana
        if(machinOption === lizar)return pierde

        
    }
    
    }

