// Inheritance between classes
const Animal = function(name, sound){
    this.name = name;
    this.sound = sound;
}


Animal.prototype.makeSound = function() {
    console.log(`The ${this.name} goes ${this.sound}`);
}

const Bird = function(name,sound,type){
    Animal.call(this,name,sound)
    this.type = type;
}

Bird.prototype = Object.create(Animal.prototype); // returns empty object and looks up prototype chain and sets Bird constructor to Animal 
Bird.prototype.constructor = Bird; // sets connstructor back to Bird

Bird.prototype.fly = function() {
    console.log(`The ${this.type} is flying!`);
}

const animal1 = new Animal('dog','woof');
const animal2 = new Bird('bird','chirp','sparrow');

animal1.makeSound();
animal2.makeSound();
animal2.fly();

