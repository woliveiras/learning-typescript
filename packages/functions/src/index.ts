// Contextual typing
function add(a: number, b: number): number {
    return a + b
}

console.log(add(20, 20))

// Named Function
function greet(name: string) {
    return `Hello ${name}`
}

// Function Expression
const square = function(n: number) {
    return n * n
}

// Arrow Function Expression
const logger = (error: string) => { 
    console.log(error)
}

// Shorthand Arrow Function Expression
const greeter = (name: string) => `Hiii, ${name}` 

// Function Constructor
const greets = new Function('name', 'return `Hello ${name}`')

// Optional and default parameters
// Optional
function log(message: string, user?: string) {
    console.log(message, user || "Not signed in")
}

// Default
// function log(message: string, user = "Not signed in") {
//     console.log(message, user)
// }
// 

// Rest parameters
function sumVariadic(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sumVariadic(1, 2, 3))

// Overloaded Function Types
// A function with multiple call signatures
// type Reservation = {
//     from: Date,
//     to: Date,
//     destination?: string
// }

// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation,
//     (from: Date, destination: string): Reservation
// }

// const reserve: Reserve = (
//     from: Date, 
//     toOrDestination: Date | string, 
//     destination?: string
// ) => {
//     if (toOrDestination instanceof Date && destination !== undefined) {
//         // ...
//     }

//     // return ...
// } 