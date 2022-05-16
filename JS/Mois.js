// var Mois = Number(prompt("Quel mois ?"));
// switch (Mois) {
//   case 01:
//     document.write("Ce mois correspond a Janvier et possede 31j");
//     break;
//   case 02:
//     document.write("Ce mois correspond a Fevrier et possede 28j");
//     break;
//   case 03:
//     document.write("Ce mois correspond a Mars et possede 31j");
//     break;
//   case 04:
//     document.write("Ce mois correspond a Avril et possede 30j");
//     break;
//   case 05:
//     document.write("Ce mois correspond a Mai et possede 31j");
//     break;
//   case 06:
//     document.write("Ce mois correspond a Juin et possede 30j");
//     break;
//   case 07:
//     document.write("Ce mois correspond a Juillet et possede 31j");
//     break;
//   case 08:
//     document.write("Ce mois correspond a Aout et possede 31j");
//     break;
//   case 09:
//     document.write("Ce mois correspond a Septembre et possede 30j");
//     break;
//   case 10:
//     document.write("Ce mois correspond a Octobre et possede 31j");
//     break;
//   case 11:
//     document.write("Ce mois correspond a Novembre et possede 30j");
//     break;
//   case 12:
//     document.write("Ce mois correspond a Decembre et possede 31j");
//     break;
// }
// if (Mois > 13) {
//   document.write("Cette valeur ne correspond a aucun mois");
// } else if (Mois < 1) {
//   document.write("Cette valeur ne correspond a aucun mois");
// }
// var heures = parseInt(prompt("Quelle H ?"));
// var minutes = parseInt(prompt("Minutes ?"));
// var secondes = parseInt(prompt("Secondes ?"));
// if (secondes > 59) {
//   document.write("mauvaise valeur (secondes)");
// } else if (minutes > 59) {
//   document.write("mauvaise valeur (minutes)");
// }
// document.write(
//   "Heure saisis de base est : " +
//     " " +
//     heures +
//     "h" +
//     minutes +
//     "m" +
//     secondes +
//     "s" +
//     "<br>"
// );
// if (secondes < 59) {
//   secondes++;
// }
// if (secondes === 60) {
//   secondes = 0;
//   minutes++;
// }
// if (minutes === 60) {
//   minutes = 0;
//   heures++;
// }
// if (heures === 24) heures = 0;

// document.write(
//   "Dans une seconde il sera" +
//     " " +
//     heures +
//     "h" +
//     minutes +
//     "m" +
//     secondes +
//     "s"
// );
// var manege = 0;
// while (manege < 10) {
//   manege++;
//   document.write("C'est le tour de manege n°" + manege + "<br>" + "<hr>");
// }
var manege = parseInt(prompt("Combien de tour ?"));
var depart = 0;
while (depart < manege) {
  depart++;
  document.write("C'est le tour de manege n°" + depart + "<br>" + "<hr>");
}
