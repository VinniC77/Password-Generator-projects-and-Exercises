// const person = {
//     name: "Vinicius",
//     age: 34,
//     country: "Brazil"
// }
//---------------------------------------------------------------------------------------------------


// function logData(){
//     console.log(`${person.name} is ${person.age} old and lives in ${person.country}`);
// }
// logData();
//---------------------------------------------------------------------------------------------------


// let age = 17;

// if (age < 6) {
//     console.log("Free")
// } else if (age < 18) {
//     console.log("Child Discount")
// } else if (age < 27) {
//     console.log("Student Discount")
// } else if (age < 67) {
//     console.log("Full price")
// } else {
//     console.log("Senior Citizen Discount")
// }
//----------------------------------------------------------------------------------------------------


// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log('The 5 largest countries in the world:')
// for (let i = 0; i < largeCountries.length; i++) {
//     let paises = largeCountries[i];
//     console.log(`- ${paises}`);
// }
//----------------------------------------------------------------------------------------------------


// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.shift();               // This eliminates the first item
// largeCountries.unshift("China");      // This add an item to the first position
// largeCountries.pop();                 // This eliminates the last item
// largeCountries.push("Pakistan");      // This add an item to the last position

// console.log(largeCountries);
//----------------------------------------------------------------------------------------------------


// let dayOfMonth = 13;
// let weekDay = "Tuesday";

// if (dayOfMonth === 13 && weekDay === 'Friday') {
//     console.log("😱");
// }
//----------------------------------------------------------------------------------------------------


// let hands = ["rock", "paper", "scissor"];
// // Queremos que o JS sorteie um dos itens do array

// function game() {
//     // randomNumber = Math.floor(Math.random() * hands.length); Pra ter um número inteiro entre 1 e 3
//     // indexOfTheArrayItem = hands[randomNumber]; // Pra ver qual item o index sorteado representa.
    
//     let some = hands[Math.floor(Math.random() * hands.length)];
//     console.log(some);
// }

// game();
//-----------------------------------------------------------------------------------------------------


