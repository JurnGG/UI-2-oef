import type { Manager } from './interface';

const manager: Manager = {
  name: 'Jane Doe',
  age: 35,
  salaris: 50000,
  teamsize: 7,
};

function printManager(man: Manager) {
  console.log(man.name, man.age, man.salaris, man.teamsize);
}

printManager(manager);
