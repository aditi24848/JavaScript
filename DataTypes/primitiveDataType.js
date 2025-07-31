
//1.number
var num = 5;
console.log(num); //output: 5
console.log(typeof num); //output: number

//2.string
var str = "Ram";
console.log(str); //output: Ram
console.log(typeof str); //output: string

//3.boolean
var isAvailable=true;
console.log(isAvailable); //output: true
console.log(typeof isAvailable); //output: boolean

//4.undefined
var Ram;
console.log(Ram); //output: undefined
console.log(typeof Ram); //output: undefined

//5.null
var badMemories = null;
console.log(badMemories); //output: null
console.log(typeof badMemories); //output: object

//6.bigInt
const bigNumber = 595790277154754275986480670973401690n;
console.log(bigNumber) //output: 595790277154754275986480670973401690n
console.log(typeof bigNumber); //output: bigint

//7.Symbol
const sym = Symbol("Hello");
console.log(sym); //output: Symbol(Hello)
console.log(typeof sym); //output: symbol