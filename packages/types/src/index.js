// TypeScript types hierarchy
var age = 30;
var driver = {
    name: 'William',
    age: age
};
console.log(driver);
// Cat
var kleber = {
    name: 'Kléber Maurício',
    purrs: true
};
// Dog
var titio = {
    name: 'Titio',
    barks: true,
    wags: true
};
// Both
var superPet = {
    name: 'superPet',
    barks: true,
    purrs: true,
    wags: true
};
console.log({ kleber: kleber, titio: titio, superPet: superPet });
