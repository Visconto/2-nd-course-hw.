// Задание 1

// const people = [
//   { name: "Глеб", age: 29 },
//   { name: "Анна", age: 17 },
//   { name: "Олег", age: 7 },
//   { name: "Оксана", age: 47 },
// ];
// function sortArray(a, b) {
//   if (a.age > b.age) {
//     return 1;
//   }
//   if (a.age < b.age) {
//     return -1;
//   }
//   return 0;
// }
// console.log(people.sort(sortArray));

// Задание 2

// const people = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];
// function isPositive(arr) {
//   return arr > 0;
// }
// function isMale(people) {
//   return people.gender == "male";
// }
// function filter(arr, callback) {
//   const mass = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       mass.push(arr[i]);
//     }
//   }
//   return mass;
// }
// console.log(filter([3, -4, 1, 9], isPositive));
// console.log(filter(people, isMale));

// Задание 3

// let timer = setInterval(() => {
//   let currentDay = new Date();
//   console.log(currentDay);
// }, 300);
// setTimeout(() => {
//   clearInterval(timer);
//   console.log("30 секунд прошло");
// }, 3000);

// задание 4

// function delayForSecond(callback) {
//   setTimeout(callback, 1000);
// }

// Задание 5

// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log("Прошла одна секунда");
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }

// function sayHi(name) {
//   console.log(`Привет, ${name}!`);
// }

// sayHi("Глеб", delayForSecond());
