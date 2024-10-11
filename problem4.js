const numbers = [1, 2, 3, 4, 5];


const evenNumbers = numbers.filter(num => num % 2 === 0);

const squaredNumbers = evenNumbers.map(num => num * num);


const sumOfSquares = squaredNumbers.reduce((acc, num) => acc + num, 0);

console.log(sumOfSquares);