const mot = {
        "Food": "la nourriture",
        "Foodstuffs": "les denrées alimentaires/les aliments",
        "To feed oneself on sth": "se nourrir de qch",
        "To cook": "cuisiner",
        "To do the cooking": "faire la cuisine",
        "Eating habits": "les habitudes alimentaires",
        "Eating patterns": "les habitudes alimentaires",
        "Fruit and vegetable intake": "la consommation de fruits et de légumes",
        "Daily salt intake": "la consommation quotidienne de sel",
        "Diagnose": "diagnostiquer",
        "Obtained": "obtenu",
        "Weight": "le poids",
        "To weigh oneself": "se peser",
        "To weigh": "peser",
        "To put on weight": "prendre du poids",
        "To gain weight": "prendre du poids",
        "To lose weight": "perdre du poids",
        "Outbreak": "épidémie",
        "Disorder": "trouble",
        "Stomach": "l’estomac",
        "Gut": "l’intestin",
        "Liver": "le foie",
        "To be overweight": "être en surpoids",
        "To be ten kilos overweight": "avoir dix kilos de trop",
        "Fat": "gros/gras",
        "Obese": "obèse",
        "Obesity": "l’obésité",
        "Childhood obesity": "l’obésité des enfants",
        "Plump": "dodu",
        "Stout": "corpulent",
        "Corpulent": "corpulent",
        "The waistline": "le tour de taille",
        "Flab": "la graisse superflue",
        "A paunch": "une bedaine",
        "Bulimia": "la boulimie",
        "Bulimic": "boulimique",
        "To be a compulsive eater": "ne pas pouvoir s’empêcher de manger",
        "To binge on chocolate": "s’empiffrer de chocolat",
        "Binge eating": "l’excès de nourriture",
        "Binge drinking": "les excès de boisson",
        "To go on a binge": "faire des excès",
        "To resist temptation": "résister à la tentation",
        "To give in to temptation": "céder à la tentation",
        "Dined": "dîné",
        "Sampling": "goûtant",
        "Well-being": "bien-être",
        "Mood swings": "sautes d’humeur",
        "Liver damage": "problème de foie",
        "A chocolate bar": "une barre chocolatée",
        "A chocaholic": "un accro au chocolat",
        "To be addicted to sth": "être accro à qch",
        "Addiction": "l’accoutumance, la dépendance",
        "Addictive": "qui crée une accoutumance, addictogène",
        "Triggers": "déclenche",
        "Decipher": "déchiffrer",
        "Whether": "si",
        "Reigning": "régnante",
        "Thin": "maigre",
        "Skinny": "magrichon",
        "Scrawny": "magrichon",
        "To be lean and muscular": "être mince et musclé",
        "Bony": "décharné",
        "Slim": "mince",
        "Slender": "svelte",
        "Svelte": "svelte",
        "To be underweight": "être trop maigre",
        "How to stick to": "s’en tenir à",
        "Anorexia": "l’anorexie",
        "Anorexic": "anorexique",
        "To develop anorexia": "devenir anorexique",
        "To starve oneself to death": "se laisser mourir de faim",
        "Meat": "la viande",
        "Veggies": "les légumes",
        "Greens": "les légumes",
        "Carbohydrates": "glucides",
        "Carbs": "glucides",
        "Starch": "l’amidon",
        "Fiber": "fibre",
        "To go on a diet": "commencer un régime",
        "To be on a diet": "faire un régime",
        "A slimming diet": "régime amaigrissant",
        "A healthy diet": "une alimentation saine",
        "Balanced diet": "une alimentation bien équilibrée",
        "Unbalanced diet": "une alimentation mal équilibrée",
        "Diet foods": "aliments faibles en calories",
        "Health foods": "les aliments diététiques",
        "A health food shop": "un magasin de produits diététiques",
        "Organic food": "la nourriture biologique, les aliments bio",
        "An organic restaurant": "un restaurant diététique",
        "Vegetarian": "végétarien",
        "A nutritionist": "un nutritionniste",
        "A dietician": "un diététicien",
        "A dietitian": "un diététicien",
        "Sedentary": "sédentaire",
        "A sedentary lifestyle": "la sédentarité",
        "To be fit": "être en forme",
        "To watch one’s figure": "surveiller sa ligne",
        "To keep one’s figure": "surveiller sa ligne",
        "A fitness": "la santé",
        "A fitness freak": "un mordu de culture physique",
        "To go to the gym": "aller à la muscu",
        "To be all skin and bones": "avoir la peau sur les os",
        "To fight the flab": "lutter contre les bourrelets",
        "To hit the bottle": "picoler",
        "The morning after the night before": "le lendemain d’une beuverie"
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
    
