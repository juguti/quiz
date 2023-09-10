const mot = {
    "Break a leg!": "Merde !",
    "It's raining cats and dogs.": "Il pleut des cordes.",
    "Don't cry over spilled milk.": "Ce qui est fait est fait.",
    "Piece of cake.": "C'est du gâteau.",
    "Bite the bullet.": "Prendre son courage à deux mains.",
    "Kill two birds with one stone.": "Faire d'une pierre deux coups.",
    "The ball is in your court.": "La balle est dans ton camp.",
    "Don't put all your eggs in one basket.": "Ne mets pas tous tes œufs dans le même panier.",
    "Read between the lines.": "Lire entre les lignes.",
    "The early bird catches the worm.": "L'oiseau qui se lève tôt attrape le ver.",
    "Actions speak louder than words.": "Les actes valent mieux que les paroles.",
    "Better late than never.": "Mieux vaut tard que jamais.",
    "A penny for your thoughts.": "Je donne ma langue au chat.",
    "Let the cat out of the bag.": "Vendre la mèche.",
    "Don't count your chickens before they hatch.": "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.",
    "When pigs fly.": "Quand les poules auront des dents.",
    "Once in a blue moon.": "Tous les trente-six du mois.",
    "It's a piece of cake.": "C'est du gâteau.",
    "The apple of my eye.": "La prunelle de mes yeux.",
    "Every cloud has a silver lining.": "Après la pluie, le beau temps.",
    "Don't judge a book by its cover.": "L'habit ne fait pas le moine.",
    "A dime a dozen.": "Monnaie courante.",
  "An arm and a leg.": "Coûte les yeux de la tête.",
  "Back to the drawing board.": "Retour à la case départ.",
  "Burning the midnight oil.": "Brûler la chandelle par les deux bouts.",
  "Caught between a rock and a hard place.": "Être entre l'enclume et le marteau.",
  "Cry over spilled milk.": "Pleurer sur du lait renversé.",
  "Don't throw the baby out with the bathwater.": "Ne jetez pas le bébé avec l'eau du bain.",
  "Get a taste of your own medicine.": "Goûter de sa propre médecine.",
  "Hit the nail on the head.": "Toucher dans le mille.",
  "It's not rocket science.": "Ce n'est pas sorcier.",
  "Jumping on the bandwagon.": "Suivre le mouvement.",
  "Keep an eye on the ball.": "Garder l'œil sur la balle.",
  "Let the chips fall where they may.": "Que les dés tombent où ils peuvent.",
  "Make a long story short.": "En fin de compte.",
  "No pain, no gain.": "Pas de douleur, pas de gain.",
  "On thin ice.": "Sur la corde raide.",
  "Piece of the pie.": "Part du gâteau.",
  "Read the riot act.": "Lire l'acte d'émeute.",
  "Saved by the bell.": "Sauvé par le gong.",
  "Sitting on the fence.": "Être assis sur la clôture.",
  "Speak of the devil.": "Quand on parle du loup.",
  "The ball's in your court.": "La balle est dans votre camp.",
  "The pot calling the kettle black.": "L'hôpital qui se moque de la charité.",
  "The straw that broke the camel's back.": "La goutte d'eau qui fait déborder le vase.",
  "The whole nine yards.": "Le tout, le grand jeu.",
  "Throw in the towel.": "Jeter l'éponge.",
  "Two heads are better than one.": "Deux têtes valent mieux qu'une.",
  "Under the weather.": "Pas dans son assiette.",
  "You can't judge a book by its cover.": "Il ne faut pas juger un livre à sa couverture.",
  "All bark and no bite.": "Tout feu, tout flamme.",
  "Beggars can't be choosers.": "On n'a pas le choix quand on est dans le besoin.",
  "Cut to the chase.": "Aller droit au but.",
  "Don't count your chickens before they hatch.": "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.",
  "Every cloud has a silver lining.": "Après la pluie, le beau temps.",
  "Go the extra mile.": "Faire un effort supplémentaire.",
  "Hit the hay.": "Aller au lit.",
  "In hot water.": "Dans de beaux draps.",
  "It's a piece of cake.": "C'est du gâteau.",
  "Jumping to conclusions.": "Tirer des conclusions hâtives.",
  "Keep your chin up.": "Garde la tête haute.",
  "Let the cat out of the bag.": "Vendre la mèche.",
  "Money talks.": "L'argent fait tout.",
  "No pain, no gain.": "Pas de douleur, pas de gain.",
  "On the ball.": "Être à la hauteur.",
  "Penny for your thoughts.": "Je donne ma langue au chat.",
  "Read between the lines.": "Lire entre les lignes.",
  "Seeing is believing.": "Il faut le voir pour le croire.",
  "The early bird catches the worm.": "L'oiseau qui se lève tôt attrape le ver.",
  "The last straw.": "La goutte d'eau qui fait déborder le vase.",
  "The pot calling the kettle black.": "L'hôpital qui se moque de la charité.",
  "Throw in the towel.": "Jeter l'éponge.",
  "Tooth and nail.": "Avec acharnement.",
  "When in Rome, do as the Romans do.": "Quand on est à Rome, il faut faire comme les Romains.",
  "You can't have your cake and eat it too.": "On ne peut pas avoir le beurre et l'argent du beurre.",
  "You can't judge a book by its cover.": "Il ne faut pas juger un livre à sa couverture.",
  "You scratch my back, I'll scratch yours.": "Tu me gratte le dos, je te gratterai le tien.",
  "Actions speak louder than words.": "Les actes valent mieux que les paroles.",
  "Don't bite the hand that feeds you.": "Ne mords pas la main qui te nourrit.",
  "Don't cry over spilled milk.": "Ce qui est fait est fait.",
  "Every dog has its day.": "Chacun a son jour de gloire."
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
    else{point--}
    nombre++
    game()
}
function verif2(){
    let reponse = zone_question.innerHTML
    if (bouton2.innerHTML == mot[reponse] ){point++}
    else{point--}
    nombre++
    game()
}
function verif3(){
    let reponse = zone_question.innerHTML
    if (bouton3.innerHTML == mot[reponse] ){point++}
    else{point--}
    nombre++
    game()
}
function verif4(){
    let reponse = zone_question.innerHTML
    if (bouton4.innerHTML == mot[reponse] ){point++}
    else{point--}
    nombre++
    game()
}



game()
bouton1.addEventListener("click",verif1)
bouton2.addEventListener("click",verif2)
bouton3.addEventListener("click",verif3)
bouton4.addEventListener("click",verif4)
