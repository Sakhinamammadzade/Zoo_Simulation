interface IFeatures{
    id:number;
    typeName:string;
    requiredBiom:string;
    needReservoir:boolean;
    area:number;
    nutrition:string;
    type:"predator" | "herbivore";
}

interface IAnimal extends IFeatures{
    name:string;
    age:number;
    amountFood:number
}
interface ISettElement{
    id:number
    animals:IAnimal[];
    biom:string;
    space:number;
    animalType:"predator" | "herbivore";
    reservoir:boolean

}

let Bear:IAnimal={
    id:1,
    typeName:'Bear',
    name:"Coco",
    age:12,
    amountFood:5000,
    area:20,
    needReservoir:false,
    nutrition:'meet and fish',
    type:'predator',
    requiredBiom:'forest', 
 
}
let Lion:IAnimal={
    id:2,
    typeName:'predator',
    name:"Leo",
    age:20,
    amountFood:10000,
    area:30,
    needReservoir:false,
    nutrition:'meet',
    type:'predator',
    requiredBiom:'savanna', 
}
let Parrot:IAnimal={
    id:3,
    typeName:'herbivore',
    name:"kuku",
    age:5,
    amountFood:200,
    area:10,
    needReservoir:false,
    nutrition:'grain',
    type:'herbivore',
    requiredBiom:'forest', 
}


let Monkey:IAnimal={
    id:3,
    typeName:'herbivore',
    name:"merry",
    age:14,
    amountFood:1000,
    area:40,
    needReservoir:false,
    nutrition:'banana',
    type:'herbivore',
    requiredBiom:'forest', 
}

let Tigger:IAnimal={
    id:4,
    typeName:'predator',
    name:"Tigiy",
    age:15,
    amountFood:5000,
    area:100,
    needReservoir:false,
    nutrition:'meet',
    type:'predator',
    requiredBiom:'savanna', 
}


let duck:IAnimal={
    id:5,
    typeName:'herbivore',
    name:"ducky",
    age:3,
    amountFood:440,
    area:20,
    needReservoir:true,
    nutrition:'grain',
    type:'herbivore',
    requiredBiom:'lake', 
}

let Beaver:IAnimal={
    id:6,
    typeName:'herbivore',
    name:"cutty",
    age:4,
    amountFood:600,
    area:20,
    needReservoir:true,
    nutrition:'fish',
    type:'herbivore',
    requiredBiom:'lake', 
}

let cage1:ISettElement={
    id:1,
    animals:[],
    biom:"forest",
    animalType:"predator",
    reservoir:false,
    space:120
//bear
}
let cage2:ISettElement={
    id:2,
    animals:[],
    biom:"lake",
    animalType:"herbivore",
    reservoir:true,
    space:20

}

let cage3:ISettElement={
    id:3,
    animals:[],
    biom:"lake",
    animalType:"herbivore",
    reservoir:true,
    space:30

}

let cage4:ISettElement={
    id:4,
    animals:[],
    biom:"savanna",
    animalType:"predator",
    reservoir:false,
    space:70

}
let cage5:ISettElement={
    id:5,
    animals:[],
    biom:"savanna",
    animalType:"predator",
    reservoir:false,
    space:60
}

function choosenAnimal(animal:IAnimal,cage:ISettElement){
    if(animal.type===cage.animalType &&animal.needReservoir===cage.reservoir&&animal.requiredBiom===cage.biom&&animal.area<=cage.space){
        console.log(`the cage is fit for the ${animal.name} to live in`);
    }
    else{
        console.log(`the cage doesn't fit for the ${animal.name} to live in`);
    }
     cage.animals.push(animal)
     console.log(cage.animals);
   
}
choosenAnimal(Bear,cage1);
choosenAnimal(Tigger,cage4);
choosenAnimal(Lion,cage5);
choosenAnimal(Beaver,cage3)
choosenAnimal(duck,cage3)



let animals:IAnimal[]=[Bear,Tigger,Lion,Beaver,Monkey,Parrot,duck];
function checking(animal:IAnimal,animals:IAnimal[]){
  for(let someAnimal of animals){
    if(someAnimal.type===animal.type){
        console.log(`${animal.name} can live in predator animal `);
    }
    else{
        console.log(`${animal.name} cann't  live in herbivore animal `);
      }
   }
}

checking(Bear,animals)
console.log('************************');
checking(Lion,animals)
console.log('************************');
checking(Tigger,animals)
console.log('************************');
checking(duck,animals)







