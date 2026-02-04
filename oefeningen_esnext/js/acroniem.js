function acroniem(sent) {
  let words = sent.split(' ').map((word) => word.charAt(0));
  return words.join('');
}

console.log(acroniem('Karel de Grote')); // KdG
