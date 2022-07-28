// Carolina trebuie să îl ducă pe Rudy la veterinar și nu vrea să îi mai explice doctorului tot istoricul lui. Ea vrea să creeze o evidență electronică pe care să o poată accesa ușor.

  
// Cerințe:
// 1. Creați un obiect care să conțină informații despre Rudy: rasă, culoarea părului, anul nașterii, vaccinuri și dacă are pașaport sau nu. 
//   Creați o funcție care afișează toate aceste informații într-un format care să fie citit ușor de către doctor.
  
// 2. Creați o funcție în obiect care calculează vârsta lui Rudy și afișați-o în mesaj.
  
// 3. Rudy a primit recent un vaccin pentru hepatită canină. Adăugați acest vaccin în istoricul medical.
  
// 4. Afișați un mesaj corespunzător dacă Rudy are voie sau nu să iasă din Moldova (dacă are pașaport).
  
// 5. Carolina a uitat când i-a făcut celelalte vaccinuri lui Rudy și acum știe că trebuie să pună în istoric data fiecărui vaccin.
  
//   Actualizați obiectul pentru a conține această informație și creați o funcție care afișează istoricul vaccinării. Dacă nu există niciun vaccin, să se afișeze “Rudy nu a făcut niciun vaccin până acum”.


// I.1
const informatiiRudy = {
  rasa: 'nedefinita',
  culoareaParului: 'roscata',
  anulNasterii: 2008,
  vaccinuri:  ['V1', 'V2', 'V3'],
  arePasaport: true,

// II
  calculeazaVarsta: function () {
    let currentDate = new Date();
    return currentDate.getFullYear() - this.anulNasterii;
 },

// I.2, IV
  show: function () {
    console.log (`Rasa: ${this.rasa}`);
    console.log (`Culoarea Parului: ${this.culoareaParului}`);
    console.log (`Anul Nasterii: ${this.anulNasterii}`);
    console.log (`Vaccinuri: ${this.vaccinuri}`);
    if (this.arePasaport == true) {
      console.log ('Pasaport: are =>')
      console.log ('Rudy are voie sa iasa din Moldova.')
    }
    else {
      console.log ('Pasaport: nu are =>');
      console.log ('Rudy nu are voie sa iasa din Moldova.')
  }
  }
}

informatiiRudy.show();
console.log(`Varsta: ${informatiiRudy.calculeazaVarsta()} ani`);

// III
informatiiRudy.vaccinuri.push ('Hepatita canina');
// console.log (informatiiRudy.vaccinuri);

// V.1
informatiiRudy.dataVaccinuri = '';

// V.2
function istoriculVaccinarii () {
if (informatiiRudy.vaccinuri == '') {
 console.log ('Rudy nu a făcut niciun vaccin până acum.'); 
}
  else {
informatiiRudy.dataVaccinuri = 
`${informatiiRudy.vaccinuri[0]}: 30.03.09', ${informatiiRudy.vaccinuri[1]}: 30.03.12', ${informatiiRudy.vaccinuri[2]}: 30.03.15', ${informatiiRudy.vaccinuri[3]}: 30.03.19'`;
console.log (`Istoricul vaccinarii: ${informatiiRudy.dataVaccinuri}`);
}
}

istoriculVaccinarii ();
