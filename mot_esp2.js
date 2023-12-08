const mot = {
    "La guerra": "La guerre",
  "Los jefes": "Les chefs",
  "Un dictador": "Un dictateur",
  "Víctimas": "Victimes",
  "La esclavitud": "L'esclavage",
  "El gobierno": "Le gouvernement",
  "Un genocidio": "Un génocide",
  "Un golpe de Estado": "Un coup d'État",
  "El franquismo": "Le franquisme",
  "La destrucción": "La destruction",
  "El comunismo": "Le communisme",
  "La fuerza": "La force",
  "Una revuelta": "Une révolte",
  "El poder": "Le pouvoir",
  "La democracia": "La démocratie",
  "Los crímenes": "Les crimes",
  "La potencia militar": "La puissance militaire",
  "La corrupción": "La corruption",
  "El tráfico": "Le trafic",
  "La cárcel": "La prison",
  "El fascismo": "Le fascisme",
  "Una ideología": "Une idéologie",
  "La propaganda": "La propagande",
  "El adoctrinamiento": "L'endoctrinement",
  "La hambruna": "La famine",
  "Los luchadores": "Les combattants",
  "El pueblo": "Le peuple",
  "El ejército": "L'armée",
  "Exterminar": "Exterminer",
  "Obedecer": "Obéir",
  "Matar": "Tuer",
  "Rendir homenaje": "Rendre hommage",
  "Ganar": "Gagner",
  "Defender": "Défendre",
  "Imponer": "Imposer",
  "Recordar": "Se souvenir",
  "Controlar a las poblaciones": "Contrôler les populations",
  "Luchar por": "Lutter pour",
  "Dirigir": "Diriger",
  "Temer": "Craindre",
  "Destruir": "Détruire",
  "Discriminar": "Discriminer",
  "Rebelarse": "Se rebeller",
  "Huir de": "Fuir de",
  "Criminales": "Criminels",
  "Torturar": "Torturer",
  "Perseguir": "Poursuivre",
  "Sufrir": "Souffrir",
  "Maldecir": "Maudire",
  "Difundir": "Diffuser",
  "Adoctrinar": "Endoctriner",
  "Negar los derechos humanos": "Nier les droits de l'homme",
  "Resistir": "Résister",
  "Manifestar": "Manifester",
  "Carismático": "Charismatique",
  "Un régimen totalitario": "Un régime totalitaire",
  "Autoritario": "Autoritaire",
  "Peligroso": "Dangereux",
  "Opresor / Opresivo": "Oppresseur / Oppressif",
  "Estricto": "Strict",
  "Político": "Politique",
  "Dominante": "Dominant",
  "Malo": "Mauvais",
  "Valiente": "Courageux",
  "Violento": "Violent",
  "Horrible": "Horrible",
  "Sangriento": "Sanglant",
  "Atroz": "Atroce",
  "Cruel": "Cruel",
  "Obedeciente": "Obéissant",
  "Manipulado": "Manipulé",
  "Partidario": "Partisan",
  "Controlado": "Contrôlé",
  "Condicionado": "Conditionné",
  "Adoctrinado": "Endoctriné",
  "Tiránico": "Tyrannique",
  "Aterrorizado": "Terrifié",
  "Atormentado": "Tourmenté",
  "Milicias": "Milices",
  "Tiempos oscuros": "Temps sombres",
  "Aterrorizar": "Terrifier"

    


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
    
