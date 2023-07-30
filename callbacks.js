const fs = require('fs');
// const data = fs.readFileSync('example.txt');

fs.readFile('example.txt', (error, data) => {
  if (error) return console.log(error);
  console.log(data.toString());
});

// console.log(data.toString());

console.log('Program ended');
