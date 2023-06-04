// Задание 1

// let result = prompt("Введите число");
// let secondResult = prompt("Введите число");
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(result, secondResult));

// // Задание 2

// let question = prompt("Введите число");
// const test = (num) => {
//   if (num % 2 == 0) {
//     alert("Число четное");
//   } else {
//     alert("Число не четное");
//   }
// };
// test(question);

// Задание 3.1

// function squaerName(num) {
//   let mul = num * num;
//   console.log(mul);
// }
// squaerName(10);

// Задание 3.2

// let squaerNumber = function (num) {
//   return num * num;
// };
// console.log(squaerNumber(5));

// Задание 4

// let question = prompt("Сколько вам лет?");
// function userAge(age) {
//   if (age < 0) {
//     alert("Вы вели неправильное число");
//   } else if (age <= 12) {
//     alert("Привет,друг!");
//   } else {
//     alert("Добро пожаловать!");
//   }
// }
// userAge(question);

// Задание 5

// let numberOne = prompt("Введите число");
// let numberTwo = prompt("Введите число");
// function check(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return alert("Одно или оба значения не являются числом");
//   } else {
//     return alert(a * b);
//   }
// }

// check(numberOne, numberTwo);

// Задание 6

// let question = Number(prompt("Введите число"));
// function examination(num) {
//   alert(
//     isNaN(num)
//       ? "Переданный параметр не является числом"
//       : `${num} в кубе число равняется ${num ** 3}`
//   );
// }
// examination(question);

// Задание 7

// const circle1 = {
//   radius: 2,
//   getArea() {
//     return `Площадь круга через радиус равна${3.14 * circle1.radius}`;
//   },
// };
// console.log(circle1.getArea());

// const circle2 = {
//   radius: 2,
//   getPerimeter() {
//     return `Периметр круга через радиус равен${2 * circle2.radius * 3.14}`;
//   },
// };
// console.log(circle2.getPerimeter());

// Задание 8

// function numMoth() {
//   let userInput = prompt("Введите число");

//   if (userInput == 12 || userInput <= 2) {
//     alert("Зима");
//   } else if (userInput == 3 || userInput <= 5) {
//     alert("Весна");
//   } else if (userInput == 6 || userInput <= 8) {
//     alert("Лето");
//   } else if (userInput == 9 || userInput <= 11) {
//     alert("Осень");
//   } else {
//     alert("Вы ввели неверные данные");
//   }
// }
// numMoth();
