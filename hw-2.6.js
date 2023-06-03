// Задание 1

// const numbs = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//   if (numbs[i] == 10) break;
//   console.log(numbs[i]);
// }

// // Задание 2

// const arr = [1, 5, 4, 10, 0, 3];
// console.log(arr.indexOf(4));

// Задание 3

// let arr = [1, 3, 5, 10, 20];
// console.log(arr.join(" "));

// Задание 4

// let a = [];
// for (let index = 0; index < 3; index++) {
//   a[index] = [];
//   for (let indexOne = 0; indexOne < 3; indexOne++) {
//     a[index].push(1);
//   }
// }
// console.log(a);

// Задание 5
// let arrNumbs = [1, 1, 1];
// arrNumbs.push(2, 2, 2);
// console.log(arrNumbs);

// Задание 6

// let numbs = [9, 8, 7, "a", 6, 5];
// numbs.sort().pop();
// console.log(numbs);

// Задание 7

// let arrNumbs = [9, 8, 7, 6, 5];
// let userInput = Number(prompt("Введите число"));
// if (arrNumbs.includes(userInput)) {
//   console.log(`число ${userInput} число есть в массиве`);
// } else {
//   console.log("Такого числа нет");
// }

// Задание 8

// let string = "abcdef";
// string = string.split("");
// console.log(string);

// string = string.reverse();
// console.log(string);

// string = string.join();
// console.log(string);

// Задание 9
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// arr = arr.flat();
// console.log(arr);

// Задание 10

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length - 1; i++) {
//   console.log(arr[i - 1] + arr[i] + arr[i + 1]);
// }

// Задание 11
// const number = [2, 4, 5];
// let result = number.map((num) => num ** 2);
// console.log(result);

// Задание 12

// function nameLength(str) {
//   const words = str.split(" ");
//   return words.map((str) => `${str.length}`);
// }

// console.log(nameLength("слово  слог длинноепредложение буква"));

// Задание 13
// let array = [-1, 0, 5, -10, 56];
// const filterPositive = (array) => array.filter((i) => i < 0);
// console.log(filterPositive(array));

// let arrayNew = [-25, 25, 0, -1000, -2];
// const filterPositive = (arrayNew) => arrayNew.filter((i) => i < 0);
// console.log(filterPositive(arrayNew));
