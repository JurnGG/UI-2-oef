const str = 'Dit is een String';
const num = 42;
const boolean = true;
const unknown: unknown = 'Dit is een string of een nummer';

console.log(str, num, boolean, unknown);

function multiplyWithLength(str: string, num: number) {
  return str.length * num;
}

function DoesNothing(): void {
  console.log('This function gives nothing back');
}
// Str.length also counts spaces so here it is 17 instead of the 14 characters
console.log(multiplyWithLength(str, num));
DoesNothing();
