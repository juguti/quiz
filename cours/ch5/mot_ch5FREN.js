const mot = {
        "la nourriture": "Food",
        "les denrées alimentaires/les aliments": "Foodstuffs",
        "se nourrir de qch": "To feed oneself on sth",
        "cuisiner": "To cook",
        "faire la cuisine": "To do the cooking",
        "les habitudes alimentaires": "Eating habits / Eating patterns",
        "la consommation de fruits et de légumes": "Fruit and vegetable intake",
        "la consommation quotidienne de sel": "Daily salt intake",
        "diagnostiquer": "Diagnose",
        "obtenu": "Obtained",
        "le poids": "Weight",
        "se peser": "To weigh oneself",
        "peser": "To weigh",
        "prendre du poids": "To put on weight / To gain weight",
        "perdre du poids": "To lose weight",
        "épidémie": "Outbreak",
        "trouble": "Disorder",
        "l’estomac": "Stomach",
        "l’intestin": "Gut",
        "le foie": "Liver",
        "être en surpoids": "To be overweight",
        "avoir dix kilos de trop": "To be ten kilos overweight",
        "gros/gras": "Fat",
        "obèse": "Obese",
        "l’obésité": "Obesity",
        "l’obésité des enfants": "Childhood obesity",
        "dodu": "Plump",
        "corpulent": "Stout / Corpulent",
        "le tour de taille": "The waistline",
        "la graisse superflue": "Flab",
        "une bedaine": "A paunch",
        "la boulimie": "Bulimia",
        "boulimique": "Bulimic",
        "ne pas pouvoir s’empêcher de manger": "To be a compulsive eater",
        "s’empiffrer de chocolat": "To binge on chocolate",
        "l’excès de nourriture": "Binge eating",
        "les excès de boisson": "Binge drinking",
        "faire des excès": "To go on a binge",
        "résister à la tentation": "To resist temptation",
        "céder à la tentation": "To give in to temptation",
        "dîné": "Dined",
        "goûtant": "Sampling",
        "bien-être": "Well-being",
        "sautes d’humeur": "Mood swings",
        "problème de foie": "Liver damage",
        "une barre chocolatée": "A chocolate bar",
        "un accro au chocolat": "A chocaholic",
        "être accro à qch": "To be addicted to sth",
        "l’accoutumance, la dépendance": "Addiction",
        "qui crée une accoutumance, addictogène": "Addictive",
        "déclenche": "Triggers",
        "déchiffrer": "Decipher",
        "si": "Whether",
        "régnante": "Reigning",
        "maigre": "Thin",
        "magrichon": "Skinny / Scrawny",
        "être mince et musclé": "To be lean and muscular",
        "décharné": "Bony",
        "mince": "Slim",
        "svelte": "Slender / Svelte",
        "être trop maigre": "To be underweight",
        "s’en tenir à": "How to stick to",
        "l’anorexie": "Anorexia",
        "anorexique": "Anorexic",
        "devenir anorexique": "To develop anorexia",
        "se laisser mourir de faim": "To starve oneself to death",
        "la viande": "Meat",
        "les légumes": "Veggies / Greens",
        "glucides": "Carbohydrates / Carbs",
        "l’amidon": "Starch",
        "fibre": "Fiber",
        "commencer un régime": "To go on a diet",
        "faire un régime": "To be on a diet",
        "régime amaigrissant": "A slimming diet",
        "une alimentation saine": "A healthy diet",
        "une alimentation bien équilibrée": "Balanced diet",
        "une alimentation mal équilibrée": "Unbalanced diet",
        "aliments faibles en calories": "Diet foods",
        "les aliments diététiques": "Health foods",
        "un magasin de produits diététiques": "A health food shop",
        "la nourriture biologique, les aliments bio": "Organic food",
        "un restaurant diététique": "An organic restaurant",
        "végétarien": "Vegetarian",
        "un nutritionniste": "A nutritionist",
        "un diététicien": "A dietician / A dietitian",
        "sédentaire": "Sedentary",
        "la sédentarité": "A sedentary lifestyle",
        "être en forme": "To be fit",
        "surveiller sa ligne": "To watch one’s figure / To keep one’s figure",
        "la santé": "A fitness",
        "un mordu de culture physique": "A fitness freak",
        "aller à la muscu": "To go to the gym",
        "avoir la peau sur les os": "To be all skin and bones",
        "lutter contre les bourrelets": "To fight the flab",
        "picoler": "To hit the bottle",
        "le lendemain d’une beuverie": "The morning after the night before"
      
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
    
