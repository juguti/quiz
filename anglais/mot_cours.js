const mot = {
    "a file":"un dossier",
    "at random":"au hazard",
    "on purpose":"de façon refléchit",
    "achivements":"réussites",
    "portrayal":"portrait",
    "incentive":"motivation",
    "for sure":"t'es sur/bien sur",
     "naughty":"turbulent",
    "mischievous":"turbulent",
    "remain":"demeurer",
    "skilled":"talentueux",
    "fierce":"coriace",
    "acknowlege":"reconnaitre",
    "self-suficiency":"autonomie",
    "genuine":"authentique",
    "yet":"encore / cependant",
    "regard":"considerer",
    "forgiveness":"le pardon",
    "term":"mandat",
    "therefor":"à cet effet / en conséquence ",
    "a former": "un ancien",
    "debunk":"démystifié",
    "embodiment":"l'incarnation même",
    "endorses":"soutient",
    "advocates for":"milite en faveur de",
    "attempted":"on tenté de",
    "a groom":"marié",
    "a sari":"tissue servant de vetement",
    "wrap":"envelopper",
    "worn":"porté",
    "to weave" : "tisser",
    "a loom" : "un métier à tisser",
    "to belong" : "appartenir",
    "to tie/tying":"attacher",
    "requires":"requiert",
    "to yank" : "tirer",
    "to plait/ to braid":"tresser",
    "a strand":"une mèche",
    "thin":"mince",
    "thread":"fil",
    "bangle":"bracelet",
    "wrist":"poignet",
    "ankle":"cheville",
    "frisky":"vivace",
    "meek":"docile",
    "subdued":"silencieux",
    "to nod":"hocher la tête",
    "to nudge":"coup de coude",
    "elbow":"coude",
    "onto":"sur",
    "mat":"tapis",
    "rope":"corde",
    "pleasantries":"civilités",
    "to reach" : "tendre la main",
    "thick":"épais",
    "reluctantly":"rétience",
    "dear":"mon chère",
    "to squeal":"pousser un cris",
    "shush":"chut",
    "to scold":"gronder",
    "shame":"honte",
    "to lay":"coucher",
    "bone":"os",
    "lather":"mousse",
    "until":"jusqu'à ce que",
    "order to":"afin de",
    "coating":"emrober",
    "layer":"couche",
    "dust":"poussière"
    
    
    
    
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
    
