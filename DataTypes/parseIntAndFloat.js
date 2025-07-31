//ParseInt
const num = parseInt('123');
console.log(num); // Output: 123

const num1 = parseInt('   123   ');
console.log(num1); // Output: 123

const num2 = parseInt('$123');
console.log(num2); // Output: NaN

const num3 = parseInt('00123');
console.log(num3); // Output: 123

const num4 = parseInt('-123');
console.log(num4); // Output: -123

const num5 = parseInt('xyz');
console.log(num5);  //output: NaN

const num6 = parseInt('123.90');
console.log(num); // Output: 123

//parseFloat
const num7 = parseFloat('123.90');
console.log(num7); // Output: 123.9
