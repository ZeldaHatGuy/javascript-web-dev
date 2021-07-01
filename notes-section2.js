'use strict';


let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
    console.log("you can drive")
} else {
    hasDriversLicense = false;
    console.log("You cannot drive")

}




// Logging Function
function log(info) {
    console.log(info)
}


// calling/running function
log('test')

function cutFruitPieces(fruit) {
    return fruit * 4;

}
//arrow function
const cutFruitPieces = fruit => fruit * 4;

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}


console.log(fruitProcessor(3, 5));

let juice = fruitProcessor(3, 5);

log(juice);
log(fruitProcessor(3, 5));

const appleOrangeJuice = fruitProcessor(2, 4);


function calcAge1(birthYear) {
    return 2037 - birthYear;
}
//function expression example
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;

}

log(calcAge1(1982))
log(calcAge2(1991))


const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`

}

console.log(yearsUntilRetirement(1991, 'Greg'))




//Coding Challenge


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


function checkWinner(avgDolphins, avgKoalas) {
    // console.log(`Dolphins score: ${avgDolphins} and Koala's score: ${avgKoalas}`)
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins Win!! (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas Win!! (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("No Winner today!")

    }
}

// const avgDolphins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 41)
const avgKoalas = calcAverage(23, 34, 27);
const avgDolphins = calcAverage(85, 54, 41);

checkWinner(avgDolphins, avgKoalas);


// const friends = ['Micheal', 'Steven', 'Peter'];
// // add to list methods
const newLength = friends.push('Chris')
console.log(friends);
console.log(newLength);
friends.unshift('Bill');
console.log(friends);

// //remove from list methods
friends.pop();   //returns the value of the element removed
friends.shift();
console.log(friends)

//calling sub elements of array
console.log(friends.indexOf('Peter'))
console.log(friends.includes('Peter'))
if (friends.includes('Peter')) {
    console.log("You have a friend named Peter")
}

// console.log(friends)

// const years = new Array(1991, 1992, 1993)


// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[2] = 'Greg';

// console.log(friends)
// const firstName = 'Greg'
// const greg = [firstName, 'Singletary', 2021 - 1982, 'Engineer', friends]

// console.log(greg)

// const calcAge = birthYear => 2021 - birthYear;

// const years = [1990, 1960, 2002, 2010, 2018];

// const age1 = calcAge(years[0])
// console.log(age1)


// const ages = [calcAge(years[0]), calcAge(years[1])]
// alert(ages)

// function tipCalculator(bill) {
//     const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
//     return bill * tipPercentage;
// }````

// const bills = [125, 555, 44];

// const tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(tips, totals)

// Object section
const greg = {
    firstName: 'Greg',
    lastName: 'Singletary',
    birthYear: 1982,
    job: 'Engineer',
    friends: ['Ricky', 'Elliot', 'Jennifer'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        this.age = 2037 - this.birthYear
        return this.age


    },
    stats: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' :'no'} driver's license` 
        
    }
}

console.log(greg.calcAge())
console.log(greg.firstName);
console.log(greg['lastName'])
console.log(greg.stats())
    

const interestedIn = prompt('What do you want to know about Greg?')




if (greg[interestedIn]) {
    console.log(greg[interestedIn])
} else {
    console.log("That is not a valid entry")
}

greg.location = 'Bentonville';
greg['twitter'] = '@ZeldaHatGuy'
console.log(greg);


console.log(`${greg.firstName} has ${greg.friends.length} friends and his best friend is named ${greg.friends[0]}`)
// Coding Challenge 3



const mark = {
    firstName: 'Mark',
    lasName: 'Miller',
    mass: 78,
    height: 1.69,
    BMI: function (mass, height) {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}

const john = {
    firstName: 'John',
    lasName: 'Smith',
    mass: 92,
    height: 1.95,
    BMI: function () {
        this.BMI = this.mass / (this.height ** 2)
        return this.BMI
    }
}
mark.BMI()
john.BMI()
// console.log(`${mark.BMI() > john.BMI() ? mark.firstName + mark.lasName : john.firstName + john.lasName} 's BMI (${mark.BMI() > john.BMI() ? mark.BMI() : john.BMI() }) is higher than ${mark.BMI() > john.BMI() ? mark.firstName + mark.lasName : john.firstName + john.lasName}'s BMI (${mark.BMI() > john.BMI() ? mark.BMI() : john.BMI() })`)

if (mark.BMI > john.BMI) {
    console.log(`${mark.firstName + mark.lasName} 's BMI (${mark.BMI}) is higher than ${john.firstName + john.lasName} 's (${john.BMI})`)
    
} else {
    console.log(`${john.firstName + john.lasName} 's BMI (${john.BMI}) is higher than ${mark.firstName + mark.lasName} 's (${mark.BMI})`)

    
}

// console.log(mark)

for loops
for (let rep = 1; rep <=10; rep ++) {
    console.log(`lifting weights repetiion ${rep}`)
}

const friends = ['Thomas', 'Lindsay', 'Joe', 'Chris', 1982, true]

console.log(friends)


const types =[];

for( let i  = 0; i < friends.length ; i++){
    console.log(friends[i], typeof friends[i])
    // types[i] = typeof friends[i]
    types.push(typeof(friends[i]))
    
}

console.log(types)

const years = [ 'Hello', 2003, 1982, 1998, 2000]
const ages = []


for ( let i =0; i < years.length; i++){
    ages.push(2021 - years[i])

}


//continue and break

for ( let i =0; i < years.length; i++){
    if(typeof(years[i]) !== 'string') continue
    // ages.push(2021 - years[i])
    console.log(years[i], typeof(years[i]))

}

console.log(years)



for ( let i =0; i < years.length; i++){
    if(typeof(years[i]) === 'number') break
    // ages.push(2021 - years[i])
    console.log(years[i], typeof(years[i]))

}

for (let i = years.length -1; i >=0; i--){
    console.log(i, years[i])

}

for (let excercise = 1; excercise < 4; excercise++){
    console.log(`---------- Starting Excercise ${excercise}`)
    for (let rep = 1; rep < 6; rep ++){
        console.log(` Excercise ${excercise} Lifting weights, repitiion ${rep}`)
    }
}

let rep = 1
while (rep <= 10) {
    console.log(`Lifting weigts repetition ${rep}`)
    rep++
}


let dice = Math.trunc(Math.random() * 6) + 1
while ( dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6 + 1
    if(dice === 6) console.log("YOU WIN!!!")
    

}
   

//Final coding challenge
const bills = [222, 2295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

function tipCalculator(bill) {
    const tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.20;
    return bill * tipPercentage;
}


for(let bill = 0; bill < bills.length; bill++){
    let tip = tipCalculator(bills[bill])
    tips.push(tip)
    totals.push(tip + bills[bill])
}

console.log(bills)
console.log(tips)
console.log(totals)

function calcAverage(arr) {
    let total = 0
    for(let val = 0; val < arr.length; val++){
        total += arr[val]

    }
    return total / arr.length
}

const avg = calcAverage(totals)
console.log(avg)