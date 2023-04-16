// ? Create a car object, which has properties for the following:
// ? brand(String)
// ? speed in mph(Number)

// ? And the following methods:// ? speedUp: which increments the car's current speed.
// ? slowDown: which decrements the car's current speed.

// ? Both methods should also console log the following string, passing in the brand name and new speed value: "The (brand) is travelling at (speed)mph"
// ? Test drive your cars by invoking their methods.

// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }

//     speedUp(amount){
//         this.speed += amount;
//         this.desc();
//     }

//     slownDown(amount){
//         this.speed -= amount;
//         this.desc();
//     }

//     desc(){
//         console.log(`The ${this.brand} is travelling at ${this.speed} mph`);
//     }
// }

const car = {
    brand: "Frarrie",
    speed: 90,
    speedUp: function(amount){
        this.speed += amount;
        this.desc()
    },
    slowDown: function(amount){
        this.speed -= amount;
        this.desc()
    },
    desc: function(){
        console.log(`The ${this.brand} is travelling at ${this.speed} mph`)
    }
};

car.speedUp(10)
car.slowDown(70)



// ? Create a monkey object, which has the following properties:
// ? name(String)
// ? species(String)
// ? foodsEaten(Array)

// ? And the following methods:

// ? eatSomething(thingAsString) which adds a new item into the monkey's foodsEaten array.
// ? introduce: returns a string introducing itself, including its name, species, and the last food it as eaten.

// ? Exercise your monkeys by retrieving their properties and using their methods.

const monkey = {
    name: "TryAdd",
    species: "Monkey",
    foodsEaten: ['🍌', '🍎', '🍉'],
    eatSomething: function(food){
        this.foodsEaten.push(food)
    },
    introduce: function(){
        return `My name is ${this.name} and I am a ${this.species}. Oh and the last thing I ate is ${this.foodsEaten[this.foodsEaten.length-1]}.`
    }
};
console.log(monkey.eatSomething('🍌'))
console.log(monkey.introduce())

// ? BONUS


// ? Create a bag object with the following property:
// ? contents(Array)

// ? The bag should have the following methods:
// ? addItem(String) - pushes a new item into the bag's contents array.
// ? removeItem(String) - removes a given item from the bag's contents array.
// ? listItems - lists all the current contents of the bag.
// ? emptyBag - removes all items from the bag.

// ? Test your methods, logging your bag after each on to make sure they are working!
// ? You may need to do some Googling for this one

const bag = {
    content: ['pen', 'charger', 'labtop'],
    addItem: function (item){
        this.content.push(item)
    },
    removeItem: function (item){
        delete this.content[item]
    },
    listItems: function (){
        this.content.forEach((item, index) => {
            console.log(`Item ${index+1} - ${item}.`)
        });
    },
    emptyBag: function (){
        this.content = []
    },
};

console.log(bag.addItem('pinkpen'))
console.log(bag.removeItem('charger'))
console.log(bag.listItems())
console.log(bag.emptyBag())
console.log(bag.content)