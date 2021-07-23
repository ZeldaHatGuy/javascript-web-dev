'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({starterIndex =1, mainIndex =0, time = '22:00', address}){
    console.log(`Order received! Your order of ${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]} will be delivered to ${address}, by ${time}`)
  },

  orderPasta: function( ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)

  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

function lineSep(){
  console.log('---------Next----------')
}

// Object destructuring

const {name, openingHours, categories} = restaurant
console.log(name,openingHours, categories)
// destruct with custom variables

const { name: restauranName, openingHours: hours, categories: tags} = restaurant
console.log( restaurant, hours, tags)

//setting default values
const { menu = [], starterMenu: starters = [] } =  restaurant
let a = 999;
let b = 777;
//mutating array variables. 
const obj = { a: 23, b: 7, c: 14};
({a,b} = obj);
console.log(a,b);

//nested objects
const {fri: {open, close} } = openingHours;
console.log (open, close)

// object destruction via delivery

restaurant.orderDelivery({
  time: '22:30',
  address: 'My house',
  mainIndex: 2,
  starterIndex: 0
})

// Destructuring an array
const arr = [1,2,3,4];

const [ w, x, y, z ] =  arr
console.log(z)


const [ first, second ] =  restaurant.categories

console.log(second)
// Skipping a value
const [ one, , two] = restaurant.categories

console.log(two)
//swapping values
let [main, ,secondary] = restaurant.categories
console.log(main, secondary)

// [main, secondary] = [secondary, main];


// unpacking values out of function calls. 
const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse)

const nested = [2,4,[5,6]];

console.log(nested[2][0])

//destructuring nested array
const [var1, ,[var2, var3]] = nested
console.log(var1, var2, var3)


// Default array values

const [p=1,q=1,r=1] = [8,9]
console.log(p,q,r)


//Spread operator

const arr2 = [7 , 8, 9]

const newArr = [ 1,2,3, ...arr2]

console.log(newArr)


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu)

//copy array
const mainMenuCopy = [...restaurant.mainMenu]

// //join arrays

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(fullMenu)


const str = 'Jonas';

const stuff = [...str, ' ', 's' ] 
console.log(stuff)
console.log(...str)
// // example

const ingredients = [prompt('Let\'s make pasta! Ingredient 1'), prompt('Ingredient 2?'), prompt('Ingredient 3?')]

console.log(ingredients)

restaurant.orderPasta(...ingredients);


// //Objects spread

const newRestaurant = {...restaurant, founder: 'Greg', foundedIn: 1993}
console.log(newRestaurant)

const restaurantCopy = {...newRestaurant}
restaurantCopy.name = 'Pizza Hut'
console.log(restaurantCopy)

//  spread on left side of operator

//  rest on right side of operator

 const [ a, b, ...others] = [ 1,22,3,4,5]



const [pizza, ,rizotto, ...otherFood] =  [...restaurant.mainMenu, ...restaurant.starterMenu]

console.log(pizza, rizotto, otherFood)


const add =  function(...numbers){
  let total = 0
  for(let i =0; i < numbers.length; i++){
   total +=numbers[i] 
  }
  return total


}

// const sum = add(2,3)
// console.log(sum)
console.log(add(5,3,7,2))

const blah = [23,5]


console.log(add(...blah))

restaurant.orderPizza('Pepperoni', 'cheese', 'sausage')

///short circuit && || values
// const guests1 = restaurant.numGuests ? restaurant.numGuests: 10
// console.log(guests1)
restaurant.numGuests = 0
const guest2 = restaurant.numGuests || 10
console.log(guest2)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect)

lineSep()

// And operator short circuit
// stops on first falsy value and reports that value

// prints the last value when both are true

// only true when both values are true

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach')

lineSep()

//Coding Challenge!!!!!


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// Create one player array for each team

const [players1, players2] = game.players;
console.log(players1, players2);
// For team 1 create a variable with the goalkeepers name and an array with the remaining players

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// Create all players array
const allplayers = [...players1, ...players2 ]
console.log(allplayers)

// Create players final array

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(playersFinal)

// create team1 draw and team 22 variables

const {team1, x:draw, team2} = game.odds

console.log(team1, draw,team2)

//write print goals function

function printGoals(...players){
  let goals = 0
  for(let i = 0; i < players.length; i++){
    // for each player loop through the scored array and incrememnt counter when they match
    for (let y = 0; y < game.scored.length; y++){
      if (players[i] === game.scored[y]){
        goals += 1
      }
    }
    console.log(players[i], goals)
    // zero out goals value before the next iteration of the loop
    goals = 0

  }
  console.log( `Total Goals Scored: ${players.length}`)
  
}

printGoals('Lewandowski', 'Gnarby')
printGoals('Lewandowski', 'Gnarby', 'Hummels')

//Print who is more likely to win without if/else or ternary operator

team1 < team2 && console.log("team 1 is more likely to win")

lineSep()
//for of loop

const menu1 = [ ...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu1.entries()){
  console.log(item)
}

for( const [i, el] of menu1.entries()){
  console.log(`item ${i + 1} is ${el}`)
}
