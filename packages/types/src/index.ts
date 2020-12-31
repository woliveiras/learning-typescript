// TypeScript types hierarchy

// unknown 
//     -> any - null - void - undefined
//         -> number
//             - number enums
//         -> bigint
//         -> boolean
//         -> string
//             - string enums
//         -> symbol
//             - unique symbol
//         -> object types
//             - array types
//                 * tuple types
//             - function types
//             - constructor types
//            
//             all come to -> never

// Type Aliases
type Age = number

type Person = {
    name: string,
    age: Age
}

const age: Age = 30

const driver: Person = {
    name: 'William',
    age: age
}

console.log(driver)

// Unions and Intersections
// Unions |
// Intersections &
type Cat =  {
    name: string,
    purrs: boolean
}

type Dog = {
    name: string,
    barks: boolean,
    wags: boolean
}

type CatOrDogOrBoth = Cat | Dog

type CatAndDog = Cat & Dog

// Cat
const kleber: CatOrDogOrBoth = {
    name: 'Kléber Maurício',
    purrs: true
}

// Dog
const titio: CatOrDogOrBoth = {
    name: 'Titio',
    barks: true,
    wags: true
}

// Both
const superPet: CatAndDog = {
    name: 'superPet',
    barks: true,
    purrs: true,
    wags: true
}

console.log({ kleber, titio, superPet })