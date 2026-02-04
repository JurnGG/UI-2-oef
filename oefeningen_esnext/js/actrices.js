const actrices = [
  {
    naam: 'Zoe Kravitz',
    geboorteJaar: 1988,
  },
  {
    naam: 'Emma Stone',
    geboorteJaar: 1988,
  },
  {
    naam: 'Emma Watson',
    geboorteJaar: 1990,
  },
  {
    naam: 'Natalie Portman',
    geboorteJaar: 1981,
  },
  {
    naam: 'Angelina Jolie',
    geboorteJaar: 1975,
  },
  {
    naam: 'Nathalie Meskens',
    geboorteJaar: 1982,
  },
  {
    naam: 'Reese Witherspoon',
    geboorteJaar: 1976,
  },
  {
    naam: 'Kirsten Dunst',
    geboorteJaar: 1982,
  },
  {
    naam: 'Kate Winslet',
    geboorteJaar: 1975,
  },
  {
    naam: 'Jennifer Lawrence',
    geboorteJaar: 1990,
  },
  {
    naam: 'Anne Hathaway',
    geboorteJaar: 1982,
  },
  {
    naam: 'Pommelien Thijs',
    geboorteJaar: 2001,
  },
  {
    naam: 'Drew Barrymore',
    geboorteJaar: 1975,
  },
  {
    naam: 'Julia Roberts',
    geboorteJaar: 1967,
  },
  {
    naam: 'Tara Reid',
    geboorteJaar: 1975,
  },
  {
    naam: 'Katie Holmes',
    geboorteJaar: 1978,
  },
  {
    naam: 'Marie Vinck',
    geboorteJaar: 1983,
  },
];

function getAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function lastname(name) {
  return name.split(' ')[1];
}

function avg(...numbers) {
  let total = numbers.reduce((acc, num) => acc + num, 0);
  return total / numbers.length;
}

let table = document.getElementById('actrices-lijst');
console.log(getAge(actrices[0].geboorteJaar));
console.log(lastname(actrices[0].naam));
actrices
  .sort((a, b) => lastname(a.naam).localeCompare(lastname(b.naam)))
  .forEach((actrice) => {
    let row = table.insertRow();
    let nameCell = row.insertCell(0);
    let birthYearCell = row.insertCell(1);
    let ageCell = row.insertCell(2);
    nameCell.textContent = actrice.naam;
    birthYearCell.textContent = actrice.geboorteJaar;
    ageCell.textContent = getAge(actrice.geboorteJaar);
  });

console.log('Het gemiddelde moet 5 zijn. Resultaat: ' + avg(8, 4, 5, 3));
