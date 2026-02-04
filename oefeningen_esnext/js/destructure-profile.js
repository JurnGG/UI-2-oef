let person = {
  name: {
    first: 'Elisabeth',
    family: 'de Grote',
  },
  birth: {
    year: 1982,
    month: 12,
    day: 3,
  },
};

let { familyName = person.name.family, birthYear = person.birth.year } = person;

console.log(familyName); // de Grote
console.log(birthYear); // 1982
