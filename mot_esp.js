const mot = {
    "la ecologia":"l'écologie",
    "el dinero":"l'argent",
    "el cambio climático":"le changement climatique",
    "el calentamiento global":"le réchauffement climatique",
    "la deforestación":"la déforestation",
    "los incendios":"les incendies",
    "la globalización":"la mondialisation",
    "la sobreproducción":"la surproduction",
    "una asociación":"une association",
    "un banco":"une banque",
    "la crisis économica":"la crise économique",
    "la diminución":"la diminution",
    "la biodiversidad":"la biodiversité",
    "la contaminación":"la polution",
    "la vegetación":"la végétation",
    "los intercambios":"les échange",
    "la selva/el bosque":"la foret",
    "la sociedad":"la société",
    "destruir":"détruire",
    "viajar":"voyager",
    "luchar por/contra" : "luter pour/contre",
    "defender":"defendre",
    "ayudar":"aider",
    "comprar":"acheter",
    "trabajar":"travailler",
    "manifestar":"manifester",
    "pagar":"payer",
    "contaminar":"polluer",
    "gastar":"dépenser",
    "hacer turismo":"faire du tourisme",
    "mezclar cultura":"melanger les cultures",
    "aplicar politicas":"appliquer une politique",
    "intercambiar":"échanger",
    "importar":"importer",
    "exportar":"exporter",
    "buscar soluciones":"chercher des solutions",
    "respetuoso":"respectueux",
    "peligroso":"dangeureux",
    "ecoresponsable":"ecoresponsable",
    "Frágil":"fragil",
    "contaminante":"poluant",
    "contaminado":"polué",
    "ecologista":"écologique",
    "en via de desarrollo":"en voie de développement", 
    "egoista":"égoiste",
    "irresponsable":"irresponsable",
    "reponsable":"responsable",
    "inconsciente":"inconsient",
    "consciente":"consient",
    "en viá de extincción":"en voie d'extinction"



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
    
