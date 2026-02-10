export function getAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

export function lastname(name) {
  return name.split(' ')[1];
}

export function avg(...numbers) {
  let total = numbers.reduce((acc, num) => acc + num, 0);
  return total / numbers.length;
}
