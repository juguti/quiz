const mot = {
        "The press/ the print media": "la presse écrite",
        "A newspaper/a paper": "un journal",
        "A gloosy magazine": "un magazine de luxe",
        "A journal": "un magazine (sérieux)",
        "A journalist/a newsman/a commentator": "un journaliste",
        "A columnist": "un chroniqueur",
        "A correspondent": "un correspondant",
        "A reporter": "un reporter",
        "A report": "un reportage",
        "To report on sth": "faire un reportage sur quelque chose",
        "To inform": "informer",
        "To investigate": "mener une enquête",
        "To cover an event": "couvrir un événement",
        "Media coverage": "la couverture médiatique",
        "The gutter press": "presse à sensation",
        "A news agency, a press agency": "une agence de presse",
        "A news-stand": "un kiosque à journaux",
        "A newsagent": "un marchand de journaux",
        "A newspaper proprietor": "un propriétaire de journal",
        "Latter": "dernier",
        "A press baron/a press tycoon/a press magnate/A media mogul": "un magnat des médias",
        "To publish": "publier",
        "To print": "imprimer",
        "Hype": "le battage médiatique",
        "Journalese": "le jargon des journalistes",
        "An evening/a morning paper": "un journal du matin/soir",
        "A Sunday paper": "un journal du dimanche",
        "Daily/weekly/monthly": "quotidien/hebdomadaire/mensuel",
        "The headlines": "les gros titres",
        "To hit the headlines": "faire les gros titres",
        "The front-page": "la première page",
        "An editorial/a leading article/a leader": "un éditorial",
        "An editor, a chief editorial": "rédacteur en chef",
        "The business section": "les pages affaires",
        "A book/film review/A literary": "une critique de livre/film",
        "Small ads, personal ads": "les petites annonces",
        "Agony column": "le courrier du cœur",
        "A graph, a chart": "un graphique/un diagramme",
        "A pie chart": "un diagramme camembert",
        "A cartoon": "un dessin humoristique",
        "A caption": "une légende (petit texte)",
        "The comics": "BD",
        "Bribery": "corruption",
        "Outcry": "tollé",
        "To subscribe to a magazine/to take out": "s’abonner",
        "A subscriber": "un abonné",
        "Readership": "le lectorat/nombre de lecteurs",
        "Circulation": "tirage",
        "A copy": "un exemplaire",
        "An issue": "un numéro",
        "A newspaper cutting": "une coupure de journal",
        "Commoners": "roturiers",
        "Current events/current affairs": "l’actualité",
        "A news item": "une information",
        "A topical issue": "un sujet d’actualité",
        "A scoop": "un scoop",
        "To reveal": "dénoncer",
        "A leak": "une fuite",
        "Check/disclose one’s sources": "vérifier/révéler ses sources",
        "A disclosure": "la révélation/divulgation",
        "Reliable": "fiable",
        "Biased/prejudiced/partial": "partial",
        "Draft": "version",
        "Steeply": "fortement",
        "Broadcast media": "radio et télé",
        "Satellite/cable television": "la télé",
        "A programme/a program": "une émission",
        "Prime time": "les heures d’écoute",
        "A TV show": "une émission télé",
        "A talk show/a chat show": "un débat",
        "A host/an anchorman": "présentateur",
        "A soap/a serial": "un feuilleton",
        "A phone-in": "fait participer les téléspectateurs",
        "Reality TV": "télé réalité",
        "Live": "direct",
        "A news bulletin": "un bulletin d’information",
        "A news flash": "un flash d'information",
        "A newsreader/a newscaster": "un présentateur du journal",
        "To watch the news": "regarder les infos",
        "A current affairs programme": "une émission d’actualités",
        "A documentary": "un documentaire",
        "A TV viewer": "un téléspectateur",
        "A couch potato": "quelqu’un qui reste dans son canapé",
        "A listener": "un auditeur",
        "Audience ratings/figures": "l’audimat",
        "A commercial": "un spot publicitaire",
        "A commercial break": "une page de pub",
        "To broadcast": "diffuser",
        "Privacy": "la vie privée",
        "Breach of privacy": "atteinte à la vie privée",
        "Libel": "la diffamation",
        "Slander": "la calomnie",
        "To censor": "censurer",
        "Censorship": "la censure",
        "To circumvent/bypass censorship": "contourner la censure",
        "To sound/to ring the alarm bell": "tirer la sonnette d’alarme",
        "To blow the whistle on sb": "dénoncer quelqu’un",
        "A whistleblower": "un lanceur d’alerte"
      
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
    
