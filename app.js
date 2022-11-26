var Bear = {
    id: 1,
    typeName: 'Bear',
    name: "Coco",
    age: 12,
    amountFood: 5000,
    area: 20,
    needReservoir: false,
    nutrition: 'meet and fish',
    type: 'predator',
    requiredBiom: 'forest'
};
var Lion = {
    id: 2,
    typeName: 'predator',
    name: "Leo",
    age: 20,
    amountFood: 10000,
    area: 30,
    needReservoir: false,
    nutrition: 'meet',
    type: 'predator',
    requiredBiom: 'savanna'
};
var Parrot = {
    id: 3,
    typeName: 'herbivore',
    name: "kuku",
    age: 5,
    amountFood: 200,
    area: 10,
    needReservoir: false,
    nutrition: 'grain',
    type: 'herbivore',
    requiredBiom: 'forest'
};
var Monkey = {
    id: 3,
    typeName: 'herbivore',
    name: "merry",
    age: 14,
    amountFood: 1000,
    area: 40,
    needReservoir: false,
    nutrition: 'banana',
    type: 'herbivore',
    requiredBiom: 'forest'
};
var Tigger = {
    id: 4,
    typeName: 'predator',
    name: "Tigiy",
    age: 15,
    amountFood: 5000,
    area: 100,
    needReservoir: false,
    nutrition: 'meet',
    type: 'predator',
    requiredBiom: 'savanna'
};
var duck = {
    id: 5,
    typeName: 'herbivore',
    name: "ducky",
    age: 3,
    amountFood: 440,
    area: 20,
    needReservoir: true,
    nutrition: 'grain',
    type: 'herbivore',
    requiredBiom: 'lake'
};
var Beaver = {
    id: 6,
    typeName: 'herbivore',
    name: "cutty",
    age: 4,
    amountFood: 600,
    area: 20,
    needReservoir: true,
    nutrition: 'fish',
    type: 'herbivore',
    requiredBiom: 'lake'
};
var cage1 = {
    id: 1,
    animals: [],
    biom: "forest",
    animalType: "predator",
    reservoir: false,
    space: 120
    //bear
};
var cage2 = {
    id: 2,
    animals: [],
    biom: "lake",
    animalType: "herbivore",
    reservoir: true,
    space: 20
};
var cage3 = {
    id: 3,
    animals: [],
    biom: "lake",
    animalType: "herbivore",
    reservoir: true,
    space: 30
};
var cage4 = {
    id: 4,
    animals: [],
    biom: "savanna",
    animalType: "predator",
    reservoir: false,
    space: 70
};
var cage5 = {
    id: 5,
    animals: [],
    biom: "savanna",
    animalType: "predator",
    reservoir: false,
    space: 60
};
// function choosenAnimal(animal:IAnimal,cage:ISettElement){
//     if(animal.type===cage.animalType &&animal.needReservoir===cage.reservoir&&animal.requiredBiom===cage.biom&&animal.area<=cage.space){
//         console.log(`the cage is fit for the ${animal.name} to live in`);
//     }
//     else{
//         console.log(`the cage doesn't fit for the ${animal.name} to live in`);
//     }
//      cage.animals.push(animal)
//      console.log(cage.animals);
// }
// choosenAnimal(Bear,cage1);
// choosenAnimal(Tigger,cage4);
// choosenAnimal(Lion,cage5);
// choosenAnimal(Beaver,cage3)
// choosenAnimal(duck,cage3)
//Predators can only live with members of the same species.
//Herbivores can live with any herbivore.
var animals = [Bear, Tigger, Lion, Beaver, Monkey, Parrot, duck];
function checking(animal, animals) {
    for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
        var someAnimal = animals_1[_i];
        if (someAnimal.type === animal.type) {
            console.log("".concat(animal.name, " can live in predator animal "));
        }
        else {
            console.log("".concat(animal.name, " cann't  live in herbivore animal "));
        }
    }
}
checking(Bear, animals);
console.log('************************');
checking(Lion, animals);
console.log('************************');
checking(Tigger, animals);
console.log('************************');
checking(duck, animals);
