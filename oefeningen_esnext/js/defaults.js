let examenDefaults = {
  tijd: 120,
  campus: 'Groenplaats',
  vorm: 'schriftelijk',
  hulpmiddelen: 'geen',
};

let examens = [
  {
    naam: 'Web Technologie 1',
    vorm: 'laptop',
  },
  {
    naam: 'Software Engineering 2, 2e Zit',
    tijd: 180,
  },
];

//TODO: Add code here that prints the exams with defaults for data that are not provided.
examens.forEach((exam) => {
  let examWithDefaults = { ...examenDefaults, ...exam };
  console.log(examWithDefaults);
});

// { tijd: 120,
//   campus: 'Groenplaats',
//   vorm: 'laptop',
//   hulpmiddelen: 'geen',
//   naam: 'Web Technologie 1' }
// { tijd: 180,
//   campus: 'groenplaats',
//   vorm: 'schriftelijk',
//   hulpmiddelen: 'geen',
//   naam: 'Software Engineering 2, 2e Zit' }
