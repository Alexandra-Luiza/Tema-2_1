// Avem un array care conține mai multe cuvinte. Pentru fiecare cuvânt, să se afișeze:

// - numărul total de litere
// - numărul vocalelor
// - numărul consoanelor

let a = ['cuvant', 'mama', 'TRATATA', 'tata'];
const vocale = 'aeiouy';
const consoane = 'qwrtpsdfghjklzxcvbnm';

for (let i = 0; i < a.length; i++) {
  let nLitere = a[i].length;
  console.log (`Cuvantul '${a[i]}':`);
  console.log(`Numarul de litere = ${nLitere}`);
  console.log (`Numarul de vocale = ${nVocale(a[i])}`);
  console.log (`Numarul de consoane = ${(nLitere - nVocale(a[i]))}`);
  console.log ('-----');
}

function nVocale(cuvant) {
  let n = 0;
  let m = 0;
  for (let i = 0; i < cuvant.length; i++) {
    if (cuvant [i] == 'A'|| cuvant[i] == 'E' || cuvant[i] == 'I' || cuvant[i] == 'O' || cuvant[i] == 'U' || cuvant[i] == 'Y' || cuvant[i] == 'a' || cuvant[i] == 'e' || cuvant[i] == 'i' || cuvant[i] == 'o' || cuvant[i] == 'u' || cuvant[i] == 'y') {
      n = n + 1;
    // console.log(`Vocale: ${cuvant[i]}`);
    }
    // console.log (cuvant[i]);
  }
  return n;
}



// ---------------------------------



// function nVocaleV2(cuvant) {
//   let n = 0;
//   for (let i = 0; i < cuvant.length; i++) {
//     let letter = cuvant[i].toLowerCase();
//     // console.log (vocale.indexOf(letter));
//     if (vocale.indexOf(letter) != -1) {
//       n = n + 1;
//     // console.log(`Vocale: ${cuvant[i]}`);
//     }
//     // console.log (cuvant[i]);
//   }
//   return n;
// }

// function nConsoaneC2(cuvant) {
//   let m = 0;
//   for (let i = 0; i < cuvant.length; i++) {
//     let letter = cuvant[i].toLowerCase();
//     // console.log (consoane.indexOf(letter));
//     if (consoane.indexOf(letter) != -1) {
//       m = m + 1;
//     // console.log(`Consoane: ${cuvant[i]}`);
//     }
//     // console.log (cuvant[i]);
//   }
//   return m;
// }

// console.log (nVocaleV2('cuvant'));
// console.log (nConsoaneC2('cuvant'));