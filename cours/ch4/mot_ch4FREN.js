const mot = {
        "la presse écrite": "The press/ the print media",
        "un journal": "A newspaper/a paper",
        "un magazine de luxe": "A gloosy magazine",
        "un magazine (sérieux)": "A journal",
        "un journaliste": "A journalist/a newsman/a commentator",
        "un chroniqueur": "A columnist",
        "un correspondant": "A correspondent",
        "un reporter": "A reporter",
        "un reportage": "A report",
        "faire un reportage sur quelque chose": "To report on sth",
        "informer": "To inform",
        "mener une enquête": "To investigate",
        "couvrir un événement": "To cover an event",
        "la couverture médiatique": "Media coverage",
        "presse à sensation": "The gutter press",
        "une agence de presse": "A news agency, a press agency",
        "un kiosque à journaux": "A news-stand",
        "un marchand de journaux": "A newsagent",
        "un propriétaire de journal": "A newspaper proprietor",
        "dernier": "Latter",
        "un magnat des médias": "A press baron/a press tycoon/a press magnate/A media mogul",
        "publier": "To publish",
        "imprimer": "To print",
        "le battage médiatique": "Hype",
        "le jargon des journalistes": "Journalese",
        "un journal du matin/soir": "An evening/a morning paper",
        "un journal du dimanche": "A Sunday paper",
        "quotidien/hebdomadaire/mensuel": "Daily/weekly/monthly",
        "les gros titres": "The headlines",
        "faire les gros titres": "To hit the headlines",
        "la première page": "The front-page",
        "un éditorial": "An editorial/a leading article/a leader",
        "rédacteur en chef": "An editor, a chief editorial",
        "les pages affaires": "The business section",
        "une critique de livre/film": "A book/film review/A literary",
        "les petites annonces": "Small ads, personal ads",
        "le courrier du cœur": "Agony column",
        "un graphique/un diagramme": "A graph, a chart",
        "un diagramme camembert": "A pie chart",
        "un dessin humoristique": "A cartoon",
        "une légende (petit texte)": "A caption",
        "BD": "The comics",
        "corruption": "Bribery",
        "tollé": "Outcry",
        "s’abonner": "To subscribe to a magazine/to take out",
        "un abonné": "A subscriber",
        "le lectorat/nombre de lecteurs": "Readership",
        "tirage": "Circulation",
        "un exemplaire": "A copy",
        "un numéro": "An issue",
        "une coupure de journal": "A newspaper cutting",
        "roturiers": "Commoners",
        "l’actualité": "Current events/current affairs",
        "une information": "A news item",
        "un sujet d’actualité": "A topical issue",
        "un scoop": "A scoop",
        "dénoncer": "To reveal",
        "une fuite": "A leak",
        "vérifier/révéler ses sources": "Check/disclose one’s sources",
        "la révélation/divulgation": "A disclosure",
        "fiable": "Reliable",
        "partial": "Biased/prejudiced/partial",
        "version": "Draft",
        "fortement": "Steeply",
        "radio et télé": "Broadcast media",
        "la télé": "Satellite/cable television",
        "une émission": "A programme/a program",
        "les heures d’écoute": "Prime time",
        "une émission télé": "A TV show",
        "un débat": "A talk show/a chat show",
        "présentateur": "A host/an anchorman",
        "un feuilleton": "A soap/a serial",
        "fait participer les téléspectateurs": "A phone-in",
        "télé réalité": "Reality TV",
        "direct": "Live",
        "un bulletin d’information": "A news bulletin",
        "un flash d'information": "A news flash",
        "un présentateur du journal": "A newsreader/a newscaster",
        "regarder les infos": "To watch the news",
        "une émission d’actualités": "A current affairs programme",
        "un documentaire": "A documentary",
        "un téléspectateur": "A TV viewer",
        "quelqu’un qui reste dans son canapé": "A couch potato",
        "un auditeur": "A listener",
        "l’audimat": "Audience ratings/figures",
        "un spot publicitaire": "A commercial",
        "une page de pub": "A commercial break",
        "diffuser": "To broadcast",
        "la vie privée": "Privacy",
        "atteinte à la vie privée": "Breach of privacy",
        "la diffamation": "Libel",
        "la calomnie": "Slander",
        "censurer": "To censor",
        "la censure": "Censorship",
        "contourner la censure": "To circumvent/bypass censorship",
        "tirer la sonnette d’alarme": "To sound/to ring the alarm bell",
        "dénoncer quelqu’un": "To blow the whistle on sb",
        "un lanceur d’alerte": "A whistleblower"
      
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
    
