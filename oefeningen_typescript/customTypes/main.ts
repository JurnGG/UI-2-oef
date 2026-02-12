import type { Employee } from './type';

const employee: Employee = {
  name: 'Jan Janssen',
  age: 35,
  job: 'Software Engineer',
};

console.log(employee);

function printEmployee(emp: Employee) {
  return `De medewerker heet een ${emp.name} en is ${emp.age} jaar oud en werkt als ${emp.job}`;
}

console.log(printEmployee(employee));
