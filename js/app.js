// creo un array vuoto

var array = [];

// stampo nella console i numeri da 1 a 100 e trovo i miltipli di 3 e di 5
for (var i = 1; i <= 100; i++) {
  if ((i % 5) === 0 && (i % 3) === 0) {
    array.push('FizzBuzz')
  } else if ((i % 3) === 0) {
    array.push('Fizz');
  } else if ((i % 5) === 0) {
    array.push('Buzz');
  } else {
    array.push(i);
  }
}
console.log(array);
