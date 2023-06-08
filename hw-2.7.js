// Задание 1

// let str = "js";
// console.log(str.toUpperCase());

// Задание 2

// const arrWord = ["Кошка", "Кит", "Комар", "Носорог"];
// let search = "ко";

// arrWord.forEach((arrWord) => {
//   if (arrWord.toLowerCase().includes(search.toLowerCase())) {
//     console.log(arrWord);
//   }
// });

// const arrWordTwo = ["яблоко", "груша", "гриб", "огурец"];
// let search = "гру";

// arrWordTwo.forEach((arrWordTwo) => {
//   if (arrWordTwo.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
//     console.log(arrWordTwo);
// });

// const newArrWord = ["Дом", "Банк", "Больница", "Театр"];
// let search = "Кино";
// newArrWord.forEach((newArrWord) => {
//   if (newArrWord.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
//     console.log(newArrWord);
// });

// Задание 3

// let numbers = 32.588884;
// console.log(Math.round(numbers));

// let numbers = 32.588884;
// console.log(Math.floor(numbers));

// let numbers = 32.588884;
// console.log(Math.ceil(numbers));

// Задание 4 :

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// Зажание 5

// function getRandomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInRange(1, 10));

// Задание 6

// let a = 15;

// const arr = Array.from({ length: a / 2 }, () =>
//   Math.floor(Math.random() * a + 1)
// );
// console.log(arr);

// Задание 7

// function getRandomInt(minValue, maxValue) {
//   return Math.round(Math.random() * maxValue);
// }
// console.log(getRandomInt(1, 10));

// Задание 8

// let currentDate = new Date();
// console.log(currentDate);

// Задание 9

// let currentDate = new Date();
// currentDate.setDate(73);
// console.log(currentDate);

// Задание 10

// function formatDateAndTime(date) {
//   let days = [
//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//   ];
//   let months = [
//     "Января",
//     "Февраля",
//     "Марта",
//     "Апреля",
//     "Мая",
//     "Июня",
//     "Июля",
//     "Августа",
//     "Сентября",
//     "Октября",
//     "Ноября",
//     "Декабря",
//   ];
//   let day = days[date.getDay()];
//   let month = months[date.getMonth()];
//   let year = date.getFullYear();
//   let dateStr = date.getDate();
//   let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//   let minutes =
//     date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//   let seconds =
//     date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//   let timeStr = `${hours}:${minutes}:${seconds}`;
//   console.log(`Дата: ${dateStr} ${month} ${year} - это ${day}.`);
//   console.log(`Время: ${timeStr}`);
// }
// formatDateAndTime(new Date());

// Задание 11

// function myFn() {
//   let fruits = [
//     "Яблоко",
//     "Груша",
//     "Дыня",
//     "Виноград",
//     "Персик",
//     "Апельсин",
//     "Мандарин",
//   ];
//   fruits = fruits.sort(() => Math.random() - 0.5);
//   let questions = alert(
//     `Запомни первый и последний фрукт из списка: ${fruits}!`
//   );
//   let questionsOne = prompt("Какой первый фрукт был в списке?");
//   let questionsTwo = prompt("Какой последний фрукт был в списке?");
//   if (
//     questionsOne.toUpperCase() == fruits[0].toUpperCase() &&
//     questionsTwo.toUpperCase() == fruits[6].toUpperCase()
//   ) {
//     alert("Поздравляю вы угадали оба фрукта из списка!");
//   } else if (
//     questionsOne.toUpperCase() !== fruits[0].toUpperCase() ||
//     questionsTwo.toUpperCase() !== fruits[fruits.length - 1].toUpperCase()
//   ) {
//     alert("Вы были близки к победе!");
//   } else "Увы вы ответили не верно!";
// }
