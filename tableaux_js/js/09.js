// Les tableaux en javascript

// shift = retire le 1st element du tableau
// pop retire le last elment du tableau
// push ajt un element a la fin du tableau
// unshift ajt un element au debut de tableau
// indexof donne la position d'un element du tableau

// // var tableauFruits = [];
// var tableauPays = ["France", "Espagne", "Suisse"];
// var tableauChiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(tableauChiffres);
// // console.log(tableauFruits);
// // console.log(tableauPays);

// var fruits = ["Apple", "Banana", "fraise", "poire", "abricot"];
// // console.log(fruits);
// // console.log(fruits.lenght);
// // console.log(tableauPays);
// // console.log(tableauPays.lenght);
// // console.log(tableauChiffres);
// // console.log(tableauChiffres.lenght);
// var First = fruits[fruits.length - 1];
// console.log(First);
// fruits.push("cerise", "framboise", "mangue");
// console.log(fruits);
// tableauChiffres.push(27, 05, 2002);
// tableauPays.push("Italie", "Suede", "Maroc");
// console.log(tableauChiffres);
// console.log(tableauPays);
// fruits.pop();
// tableauChiffres.pop();
// tableauPays.pop();
// console.log(fruits);
// console.log(tableauChiffres);
// console.log(tableauPays);
// fruits.shift();

// tableauChiffres.shift();
// tableauPays.shift();
// console.log(fruits);
// console.log(tableauChiffres);
// console.log(tableauPays);
// fruits.unshift("citron");
// tableauChiffres.unshift(27052002);
// tableauPays.unshift("Japon");
// console.log(fruits);
// console.log(tableauChiffres);
// console.log(tableauPays);
// var position = fruits.indexOf("cerise");
// console.log(position);
// var position2 = tableauPays.indexOf("Japon");
// console.log(position2);
// var position3 = tableauChiffres.indexOf(05);
// console.log(position3);
var Me = ["Mathieu", "A", "mathiouw@hotmail.fr", "19", "11-05-2002"];
console.log(Me);
Me.pop();
console.log(Me);
Me.unshift("11-05-2022");
console.log(Me);
var sauvegarde = Me.splice(2, 2, "94400", "MDPMDP");
console.log(Me);
// Me.shift();
// console.log(Me);
// Me.shift();
// console.log(Me);
// Me.unshift("11-05-2022", "94400", "mdpmdp");
// console.log(Me);
// Me.push("mathiouw@hotmail.fr");
Me.splice(1, 1, "A", "Mathieu");
console.log(Me);
for (var i = 0; i <= Me.length; i++) {
  document.write(Me[i] + "<hr>");
  console.log(Me);
}
