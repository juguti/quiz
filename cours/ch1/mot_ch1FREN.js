const mot = {
    "Enduire": "To smear something with",
    "Lancer quelque chose": "To throw something at / to hurl something at",
    "Une peinture": "A painting",
    "De la peinture": "Paint",
    "Pour se faire entendre": "To make themselves heard",
    "Faire prendre conscience de": "To make somebody aware of / to raise awareness",
    "Attirer l'attention": "To draw attention",
    "Manifestants": "Demonstrators",
    "Balancer": "To splash, to splatter something across",
    "Cercueil": "Coffin",
    "Traverser": "To cross",
    "Ni, ni": "Neither, nor",
    "Ronfler": "To snore",
    "Ronflement": "Snoring",
    "Bouffi": "Puffy/swollen",
    "Grande personne": "Grown-up",
    "Réclamer": "To claim",
    "Désespéré": "Distraught",
    "Gibier": "Game (hunting)",
    "Carnier": "Game-bag",
    "Cartouche": "Cartridge",
    "Pour ne pas": "So as not to / in order not to",
    "Remplir": "To refill/fill in",
    "Pâle": "Pale/dim",
    "Aube": "Dawn",
    "Clignoter": "Blink/flicker",
    "Volet": "Shutter",
    "Clouer": "To nail",
    "Biberon": "Bottle",
    "Peser plus lourd": "To outweigh / to be heavier",
    "Manquer de": "Lack of",
    "Promouvoir": "Further / to promote",
    "Déclenché": "Sparked",
    "À moins que": "Unless",
    "Intemporel": "Timeless",
    "Manifestation": "Demonstration",
    "Tenir quelqu’un responsable": "Hold somebody accountable",
    "Vivre des aides": "Live on handouts",
    "Occidental": "Western",
    "Enlever": "Wipe off",
    "Être au chômage": "To be unemployed",
    "Généralisé": "Widespread",
    "Nuire à quelqu’un": "Harm somebody",
    "Un coup de pub": "Stunt",
    "Fainéant": "Slack",
    "Coudre": "Sew",
    "Reporter": "To delay",
    "Résumer": "To summarize",
    "Reprendre": "To resume",
    "Un résumé": "A summary",
    "Un CV": "A resume",
    "À cause de": "Owing to",
    "Prédiction": "Forecast",
    "Réduction": "Mitigation",
    "Compenser": "Offset",
    "Se vanter": "To brag",
    "Minimiser": "To downplay",
    "Inventer un mot": "To coin a word",
    "Un responsable principal": "A main culprit",
    "Faire pression": "To lobby",
    "De la part de": "On behalf of",
    "Complet": "Utter",
    "Rapide": "Swift",
    "Prôner": "Advocate",
    "Organiser": "To stage",
    "Approvisionnement": "Supply",
    "Emmêler": "Entangle",
    "But": "Purpose",
    "Interférer": "Meddle",
    "Dans quelle mesure": "To what extent",
    "Bloquer": "To impede",
    "Aborder": "Tackles",
    "Descendance": "Offspring",
    "Verser": "To pour",
    "Allées": "Aisles",
    "Accessoires": "Props",
    "Tacher": "Stain",
    "Paysage": "Landscape",
    "Émeute": "Uprising",
    "Ainsi": "Thus",
    "Profanation/souillée": "Defiling",
    "L'épuisement": "The depletion",
    "La rareté": "Scarcity",
    "Matière première": "Raw materials",
    "Bien que": "Although",
    "Vierge": "Pristine",
    "Quadruple": "Fourfold",
    "Un mammifère": "A mammal",
    "S'étend sur une longue durée": "Dwells at length",
    "Diriger": "To funnel",
    "Facilement": "Readily",
    "Entremêlées": "Intermingled",
    "Tel que": "Such as",
    "Négligence": "Neglect",
    "Exploitation du bois": "Logging",
    "Emplacement": "Pitches",
    "Relâcher": "To loosen",
    "Arrêter": "To halt",
    "Dépassement": "Overshoot"
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
    
