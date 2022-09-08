////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

// const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

// const functionOne = function (numOne, numTwo) {
//   const sum = numOne + numTwo + x;
//   return sum;
// };

// console.log("Result of functionOne...", functionOne(5, 2));

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

// const functionTwo = (numOne, numTwo) => numOne + numTwo + x;

// console.log("Result of functionTwo...", functionTwo(5, 2));

// 3. Write a function that returns another function. (use arrow functions please)

// const functionThree = (numOneThree, numTwoThree) =>
//   functionOne(numOneThree, numTwoThree);

// console.log("Result of functionThree is...", functionThree(7, 9));

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

// const getFunction = () => {
//   const y = 5;

//   const insideFunc = (a) => y + a;

//   return insideFunc;
// };

// console.log(getFunction()(2));

//Because it is inside the scope of getFunction. insideFunc and the variable y are both within getFunction's closure.

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

// const couldThrowError = () => {
//   if (Math.ceil(Math.random() * 2) < 2) {
//     throw new Error("Error was thrown");
//   }
//   return "success";
// };

// const functionFive = () => {
//   try {
//     console.log(couldThrowError());
//   } catch (error) {
//     console.log("Sorry, there was an error  :/");
//   }
// };

// functionFive();

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

// const userData = [
//   {
//     id: "111",
//     name: "Peter",
//     favorites: {
//       food: ["burgers", "pizza"],
//       activites: ["basketball", "baseball"],
//     },
//   },
//   {
//     id: "222",
//     name: "John",
//     favorites: {
//       food: ["burgers", "tacos"],
//       activites: ["football", "golf"],
//     },
//   },
//   {
//     id: "333",
//     name: "Mary",
//     favorites: {
//       food: ["pizza", "tacos", "fried chicken"],
//       activites: ["volleyball", "softball"],
//     },
//   },
// ];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

// const userDataFunctionOne = () => {
//   let userFoods = [];

//   userData.map((person) => {
//     const personObject = {
//       id: person.id,
//       favFoods: person.favorites.food.length,
//     };
//     userFoods = [...userFoods, personObject];
//   });

//   return userFoods;
// };

// console.log(userDataFunctionOne());

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

// const pizzaBuddies = (pizzaFriendList, person) => {
//   if (person.favorites.food.includes("pizza")) {
//     pizzaFriendList.push(person.name);
//   }
//   return pizzaFriendList;
// };

// const pizzaReducer = userData.reduce(pizzaBuddies, []);

// console.log(pizzaReducer);

// 7. Show an an example of a switch statement being used

// const pizzaSwitch = () => {
//   userData.map((currentPerson) => {
//     let personName = currentPerson.name;

//     switch (personName) {
//       case "Peter":
//         console.log("Peter loves pizza!");
//         break;
//       case "Mary":
//         console.log("Mary loves pizza!");
//         break;
//       default:
//         console.log("I don't know if this person likes pizza.");
//         break;
//     }
//   });
// };

// pizzaSwitch();

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

// const userPersonalData = {
//   name: "peter",
//   age: "56",
//   birthday: "jan 1st",
// };
// const userGameData = {
//   score: 4546,
//   accomplishments: [
//     "won award for being good gamer",
//     "won 1st win",
//     "got good score on the weekend",
//   ],
// };

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

// const personalGameData = {
//   ...userPersonalData,
//   ...userGameData,
// };

// console.log("Here is your persoanl game data...", personalGameData);

// 9. Make a copy of your new user object but override the birthday to december 31st

// const updatedPersonalGameData = {
//   ...personalGameData,
//   birthday: "december 31st",
// };

// console.log(
//   "Here is your UPDATED personal game data...",
//   updatedPersonalGameData
// );

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

// const accomplishmentsList = [...updatedPersonalGameData.accomplishments];

// console.log("Here is your accomplishments list ...", accomplishmentsList);

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

// var user = {
//   name: "pete",
//   age: "32",
//   favoriteThings: {
//     food: ["pizza", "tacos", "burgers", "italian"],
//     movies: [],
//   },
// };

// let { name, age, favoriteThings } = user;
// let { food } = favoriteThings;

// console.log("food", food);

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

// let [firstFav, secondFav] = food;

// console.log("First two favorite foods...", firstFav, secondFav);

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
// const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

// let [name, age, ...food] = data;

// console.log(name);
// console.log(age);
// console.log(food);

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

// const userInfo = {
//   name: "Peter",
//   favorites: {
//     needs: {
//       food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
//     },
//     wants: {
//       things: ["cars", "jewelry"],
//     },
//   },
// };

// const {
//   name: userName,
//   favorites: {
//     needs: favoriteFood,
//     wants: {
//       things: [favoriteThing, secondFavoriteThing],
//     },
//   },
// } = userInfo;

// console.log("userInfo userName ...", userName);
// console.log("userInfo favfood ...", favoriteFood);
// console.log("userInfo favThing ...", favoriteThing);
// console.log("userInfo secfavThing ...", secondFavoriteThing);

// var fetchData = () =>
//   new Promise((resolve, reject) => {
//     console.log("fetchingData from imaginary database");
//     setTimeout(() => {
//       try {
//         // fetchingData from imaginary database
//         if (Math.ceil(Math.random() * 2) < 2) {
//           throw new Error("Error!");
//         }
//         resolve({ name: "john", age: 42 });
//       } catch (error) {
//         reject(error);
//       }
//     }, 5000);
//   });

// module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetchData().then(
//   function (value) {
//     console.log("your fethced value", value);
//   },
//   function (error) {
//     console.log("There was an error :/ ", error);
//   }
// );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function fetchSixteen() {
  const sixteenCandles = await fetchData();

  console.log("your sixteenCandles", sixteenCandles);
}

fetchSixteen();
