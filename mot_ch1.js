const mot = {
    "To smear something with": "Enduire",
    "To throw something at / to hurl something at": "Lancer quelque chose",
    "A painting": "Une peinture",
    "Paint": "De la peinture",
    "To make themselves heard": "Pour se faire entendre",
    "To make somebody aware of / to raise awareness": "Faire prendre conscience de",
    "To draw attention": "Attirer l'attention",
    "Demonstrators": "Manifestants",
    "To splash, to splatter something across": "Balancer",
    "Coffin": "Cercueil",
    "To cross": "Traverser",
    "Neither, nor": "Ni, ni",
    "To snore": "Ronfler",
    "Snoring": "Ronflement",
    "Puffy/swollen": "Bouffi",
    "Grown-up": "Grande personne",
    "To claim": "Réclamer",
    "Distraught": "Désespéré",
    "Game (hunting)": "Gibier",
    "Game-bag": "Carnier",
    "Cartridge": "Cartouche",
    "So as not to / in order not to": "Pour ne pas",
    "To refill/fill in": "Remplir",
    "Pale/dim": "Pâle",
    "Dawn": "Aube",
    "Blink/flicker": "Clignoter",
    "Shutter": "Volet",
    "To nail": "Clouer",
    "Bottle": "Biberon",
    "To outweigh / to be heavier": "Peser plus lourd",
    "Lack of": "Manquer de",
    "Further / to promote": "Promouvoir",
    "Sparked": "Déclenché",
    "Unless": "À moins que",
    "Timeless": "Intemporel",
    "Demonstration": "Manifestation",
    "Hold somebody accountable": "Tenir quelqu’un responsable",
    "Live on handouts": "Vivre des aides",
    "Western": "Occidental",
    "Wipe off": "Enlever",
    "To be unemployed": "Être au chômage",
    "Widespread": "Généralisé",
    "Harm somebody": "Nuire à quelqu’un",
    "Stunt": "Un coup de pub",
    "Slack": "Fainéant",
    "Sew": "Coudre",
    "To delay": "Reporter",
    "To summarize": "Résumer",
    "To resume": "Reprendre",
    "A summary": "Un résumé",
    "A resume": "Un CV",
    "Owing to": "À cause de",
    "Forecast": "Prédiction",
    "Mitigation": "Réduction",
    "Offset": "Compenser",
    "To brag": "Se vanter",
    "To downplay": "Minimiser",
    "To coin a word": "Inventer un mot",
    "A main culprit": "Un responsable principal",
    "To lobby": "Faire pression",
    "On behalf of": "De la part de",
    "Utter": "Complet",
    "Swift": "Rapide",
    "Advocate": "Prôner",
    "To stage": "Organiser",
    "Supply": "Approvisionnement",
    "Entangle": "Emmêler",
    "Purpose": "But",
    "Meddle": "Interférer",
    "To what extent": "Dans quelle mesure",
    "To impede": "Bloquer",
    "Tackles": "Aborder",
    "Offspring": "Descendance",
    "To pour": "Verser",
    "Aisles": "Allées",
    "Props": "Accessoires",
    "Stain": "Tacher",
    "Landscape": "Paysage",
    "Uprising": "Émeute",
    "Thus": "Ainsi",
    "Defiling": "Profanation/souillée",
    "The depletion": "L'épuisement",
    "Scarcity": "La rareté",
    "Raw materials": "Matière première",
    "Although": "Bien que",
    "Pristine": "Vierge",
    "Fourfold": "Quadruple",
    "A mammal": "Un mammifère",
    "Dwells at length": "S'étend sur une longue durée",
    "To funnel": "Diriger",
    "Readily": "Facilement",
    "Intermingled": "Entremêlées",
    "Such as": "Tel que",
    "Neglect": "Négligence",
    "Logging": "Exploitation du bois",
    "Pitches": "Emplacement",
    "To loosen": "Relâcher",
    "To halt": "Arrêter",
    "Overshoot": "Dépassement"
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
    
