const mot = {
    "Le niveau de vie": "Standard of Living",
    "Le PIB par habitant": "GDP Per Head",
    "Mode de vie": "Lifestyle",
    "Le pouvoir d'achat": "Buying Power",
    "Riche": "Rich",
    "La richesse": "Wealth",
    "Aisé": "Well Off",
    "Nanti": "Well To Do",
    "Fortuné": "Well Heeled",
    "La société d'abondance": "Affluent Society",
    "Vivre dans l'aisance": "To Be Affluent",
    "Grippe": "Influenza",
    "Mot composé de deux autres": "Portmanteau Word",
    "Frustré": "Unfulfilled",
    "Dépit": "Spite",
    "Le bien-être": "Well Being",
    "Les riches": "Rich People",
    "Des richesses": "Riches",
    "Les grandes fortunes": "Super Rich",
    "Plein aux as": "Stinking Rich",
    "Parmi les riches": "In Moneyed Circles",
    "Amasser": "Amass",
    "Un millionnaire": "A Millionaire",
    "Un millionnaire en dollars": "Dollar Millionaire",
    "Un milliardaire": "A Billionaire",
    "Un multimilliardaire": "Zillionaire",
    "Un magnat du pétrole": "Oil Magnate",
    "Un baron de la presse": "Press Baron",
    "Un magnat des médias": "Media Mogul",
    "Un roi des logiciels": "Software Tycoon",
    "Le revenu": "Income",
    "L'impôt sur le revenu": "Income Tax",
    "Un paradis fiscal": "Tax Haven",
    "La fraude fiscale": "Tax Evasion",
    "Planquer de l'argent": "Stash Money Away",
    "Le blanchiment d'argent": "Money Laundering",
    "Familles à hauts revenus": "High Income Families",
    "Familles à bas revenus": "Low Income Families",
    "Un contribuable": "Taxpayer",
    "Les gains": "Earnings",
    "Sociétés écrans": "Shell Companies",
    "Laundromat": "The Laundromat",
    "La pauvreté": "Poverty",
    "Les pauvres": "Poor People",
    "Les travailleurs pauvres": "Working Poor",
    "Pauvre": "Poor",
    "Les nécessiteux": "The Needy",
    "La misère": "Dire Poverty",
    "La misère noire": "Destitution",
    "Les plus démunis": "Most Destitute",
    "Tomber dans la misère": "To Fall On Hard Times",
    "Sombrer dans la pauvreté": "To Sink Into Poverty",
    "En dessous du seuil de pauvreté": "Below The Poverty Line",
    "Au-dessus du seuil de pauvreté": "Above The Poverty Line",
    "Un ménage à revenu modeste": "Low Income Household",
    "Défavorisé": "Deprived",
    "Vivre avec 2 $ par jour": "To Live On 2 A Day",
    "Vivre d'allocations": "To Live On Benefit",
    "Le paupérisme": "Pauperism",
    "La paupérisation": "Pauperization",
    "Hallucinant": "Mind Bending",
    "Sauf": "Everyone But",
    "L'espace": "In The Span",
    "L'inégalité": "Inequality",
    "Inégal": "Unequal",
    "Partager": "To Share",
    "Répartir": "To Share Out",
    "La répartition des richesses": "Distribution Of Wealth",
    "Une société à deux vitesses": "Two Tier Society",
    "Le tissu social": "Social Fabric",
    "Le fossé entre les riches et les pauvres": "Gap Between Rich And Poor",
    "La fracture sociale": "Gap Between Haves And Have Nots",
    "Combler le fossé": "To Bridge The Gap",
    "Le fossé se comble": "Gap Closing",
    "Le fossé se creuse": "Gap Widening",
    "Un écart": "Discrepancy",
    "Un gouffre": "Chasm",
    "L'équilibre": "Balance",
    "Le déséquilibre": "Imbalance",
    "Équilibré": "Balanced",
    "Déséquilibré": "Unbalanced",
    "Rétablir l'équilibre": "Redress Balance",
    "Déchiré": "Torn",
    "Rivalités": "Strife",
    "La promotion sociale": "Social Advancement",
    "L'ascension professionnelle": "Career Advancement",
    "L'ascenseur social": "Social Ladder",
    "Monter dans l'échelle sociale": "To Move Up Social Ladder",
    "L'ascension sociale": "Upward Social Mobility",
    "Une personne qui s'est faite elle-même": "Self Made Man",
    "L'histoire d'un pauvre devenu riche": "Rags To Riches Story",
    "Partir de rien": "To Start From Scratch",
    "Faire fortune": "To Strike Gold",
    "L'égalité des chances": "Equality Of Opportunity",
    "Égalitaire": "Egalitarian",
    "L'égalitarisme": "Egalitarianism",
    "Le niveau social": "Social Standing",
    "Le statut social": "Social Status",
    "Le déclassement": "Fall In Status",
    "Bouleversée": "Scrambled",
    "Une baisse du niveau de vie": "Decline In Living Standards",
    "Peiner à s'en sortir": "To Struggle To Get By",
    "Avoir du mal à payer les factures": "Difficulty Paying Bills",
    "Joindre les deux bouts": "To Make Ends Meet",
    "Vivre le jour le jour": "To Live Hand To Mouth",
    "Vivoter": "To Scrape By",
    "Survivre": "To Survive",
    "Sans abris": "Homeless",
    "Il y a de plus en plus de sans abris": "Homelessness Is On The Rise",
    "Un clodo": "Tramp",
    "Une clocharde": "Bag Lady",
    "Une soupe populaire": "Soup Kitchen",
    "Le quart-monde": "Underclass",
    "Un taudis": "Slum",
    "Se serrer la ceinture": "To Tighten Your Belt",
    "Vivre avec peu d'argent": "To Be On Shoestring",
    "Passer de la misère à la richesse": "From Rags To Riches",
    "Un gros richard": "Fat Cat"
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
    
