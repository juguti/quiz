
const mot = {
    
}




function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;}

let zone_question = document.getElementById("question")
let bouton1 = document.getElementById('1')
let bouton2 = document.getElementById('2')
let bouton3 = document.getElementById('3')
let bouton4 = document.getElementById('4')


let scrore = document.getElementById('point')
let point = 0
let nombre = 0
var keys = []
for (const property in mot) {
    keys.push(property)
  }
var values = []
for (const property in mot) {
      values.push(mot[property])
    }

function game(){
    scrore.innerHTML=`${point}/${nombre}`
    var rand = Math.floor(Math.random()*keys.length);

    var mot_de_la_question = keys[rand]
    zone_question.innerHTML = mot_de_la_question


    let run = true
    while(run){
        run = false
        var rep = [
            mot[mot_de_la_question],
            values[Math.floor(Math.random()*keys.length)],
            values[Math.floor(Math.random()*keys.length)],
            values[Math.floor(Math.random()*keys.length)],
        ]
        for(let i in rep){
            for (let j in rep){
                if(rep[i] == rep[j] && i != j){
                    run = true
                }
            }
        }
    }

    rep = randomize(rep)
    bouton1.innerHTML = rep[0]
    bouton2.innerHTML = rep[1]
    bouton3.innerHTML = rep[2]
    bouton4.innerHTML = rep[3]
}
function verif1(){
    let reponse = zone_question.innerHTML
    
    if (bouton1.innerHTML == mot[reponse] ){point++}
    nombre++
    game()
}
function verif2(){
    let reponse = zone_question.innerHTML
    if (bouton2.innerHTML == mot[reponse] ){point++}
    
    nombre++
    game()
}
function verif3(){
    let reponse = zone_question.innerHTML
    if (bouton3.innerHTML == mot[reponse] ){point++}
    
    nombre++
    game()
}
function verif4(){
    let reponse = zone_question.innerHTML
    if (bouton4.innerHTML == mot[reponse] ){point++}
    
    nombre++
    game()
}



game()
bouton1.addEventListener("click",verif1)
bouton2.addEventListener("click",verif2)
bouton3.addEventListener("click",verif3)
bouton4.addEventListener("click",verif4)

