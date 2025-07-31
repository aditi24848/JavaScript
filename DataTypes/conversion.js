//===>conversion of string into number
var age = "10";
console.log(typeof age); //output: string

//by adding + operator we can convert string into number
console.log(typeof +age); //output: number

//by Number method we can convert string into number
console.log(typeof Number(age)); //output : number

//by parseInt method we can convert string into number
console.log(typeof parseInt(age)); //output: number


//===>conversion of number into string
let str = 10;
console.log(typeof str); //output: number

// by adding + and quotes we can convert number into string
console.log(typeof (str + " ")); //output: string

//by String method we can convert number into string
console.log(typeof String(str)); //output: string

//by toString method we can convert number into string
console.log(typeof str.toString()); //output: string