// Olea s-a entuziasmat și mai tare cu numerele palindrom și vrea să țină o evidență
// cu acestea. Ea s-a gândit să facă o listă cu toate numerele palindrom până la
// 10000 ca să îi fie mai ușor să le găsească mai târziu.
  
// Cerințe:
// 1. Folosiți implementarea anterioară pentru palindrom și includeți-o într-o
// funcție
// 2. Folosiți funcția pentru a verifica numerele care sunt palindrom
// 3. Creați un array care să conțină numerele palindrom.
// 4. Afișați numerele din array în consolă.




let a = [];

function palindrom (numar) {
	let nrString = numar.toString();
	let mesaj = '';  
	for (i = 0; i < nrString.length / 2; i++) {
	  let indexStanga = i;
	  let indexDreapta = (nrString.length - 1) - indexStanga;
	  if (nrString[indexDreapta] !== nrString[indexStanga]) {
	    mesaj = 'nu este palindrom';
	    break;
	  }
}

	if (mesaj == '') {
	  mesaj = 'este palindrom';
    a.push(numar);
	}
	return `Numarul ${nrString} ${mesaj}.`;
}

console.log(palindrom(171));
console.log(palindrom(1222223));
console.log(palindrom(1221));
console.log(palindrom(57));
console.log (palindrom(12321));

console.log (`Numerele palindrom sunt: ${a}.`);
// console.log (a);



//----------------------------------------------------



// let a = [];

// function isPalindrom (number) {
// 	let nrString = number.toString();
// 	let result = true;
	
// 	for (i = 0; i < nrString.length / 2; i++) {
// 	  let indexStanga = i;
// 	  let indexDreapta = (nrString.length - 1) - indexStanga;
// 	  if (nrString[indexDreapta] !== nrString[indexStanga]) {
// 	   	result = false
// 	    break;
// 	  }
// 	}
// 	return result;
// }


// let number = 1551;
// let result = isPalindrom(number);

// if (result == true) {
// 	a.push(number);
// }

// console.log (a);