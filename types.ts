//Boolean
let isDone: boolean = false;

//Number

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let color: string = "blue";
color = 'red';

//embedded expressions
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello,myname is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);


//array

let list: number[] = [1, 2, 3];
let lsit1: Array<number> = [1, 2, 3];

//Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

console.log(x[0].substr(2)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = "world";
console.log(x[3].toString());

//enum
enum Color { Red, Green, Blue };
let c: Color = Color.Blue;
console.log("c=" + c);

enum Color1 { Red = 1, Green = 2, Blue = 4 };
let c1: Color1 = Color1.Blue;
console.log("c1=" + c1);

enum Color2 { Red = 1, Green, Blue };
let colorName: string = Color[2];
console.log(colorName);

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
//notSure.ifItExists();

let list4:any[]=[1,true,"free"];

//void

let unusable:void = undefined;

//never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


//type assertios
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
console.log(strLength);

let strLength1: number = (someValue as string).length;
console.log(strLength1);