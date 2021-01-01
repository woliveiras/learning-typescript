function sumVariadic(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}
console.log(sumVariadic('1', '2', '3'))

const congrats = (name: string) => `Congrats, ${name}!!!` 
console.log(congrats(['William']))

function add(a: number, b: number): number {
    return `${a + b}`
}

console.log(add(20, 20))