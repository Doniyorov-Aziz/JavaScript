// let title = "webbrain"
// for (let i = 0 ; i<title.length;i++){
//     console.log(title[i]);
// }

// let title = "webbrain";
// for (let i = 0; i < title.length; i++) {
//   if (title[i] === "b") continue;
//   console.log(title[i]);
// }

// let title = "webbrain";
// for (let i = 0; i < title.length; i++) {
//   if (title[i] === "b") break;
//   console.log(title[i]);
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(j);
//   }
// }

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (j == 3) continue;
//     console.log(j);
//   }
// }

// outer: for (let i = 0; i < 2; i++) {
//  inner: for (let j = 0; j < 5; j++) {
//     if (j == 3) break outer;
//     console.log(j);
//   }
// }

// outer: for (let i = 0; i < 2; i++) {
//  inner: for (let j = 0; j < 5; j++) {
//     if (j === 3) continue outer;
//     console.log(j);
//   }
// }

// let num = 12344;
// let sum = 0;
// for (i = 0; i < 5; i++) {
//   sum += num % 10;
//   num = parseInt(num / 10);   // 5 xonalik sonni bir biriga qo'shish
// }
// console.log(sum);

// let num =123276
// let sum =0
// while(num>0){
//     sum += num%10
//     num=parseInt(num/10)   // istalgan xonali sonlarni bir biriga qo'shish
// }
// console.log(sum);

// let num = 1;
// while (num > 0) {
//   console.log("testing");
//   break;
// }

// let sum = 0;
// do {
//   console.log("working");
// } while (sum > 0);

// let m = 12442;
// let sum = 0;
// while (m > 0) {
//   sum += m % 10;
//   m = parseInt(m / 10);
// }
// console.log(sum);

// function

// function decloration
// function getAvr(){
//     console.log("Abdulloh , Welcome to webbrain");
// }
// getAvr()   // 1- usul

// getAvr()   // 2- usul
// function getAvr(){
//     console.log("Aziz, Welcome to Webbrain");
// }

// function expression

// const getAvr = function (){
//     console.log("hello Abdulloh");
// }
// getAvr()

// getAvr()  // <-- mumkin emas HOISTIING ga uchraydi
// let getAvr = function(){
//     console.log("welcome to webbrain");
// }

// let getAvr = function (name){
//     console.log(`${name} , welcome to webbrain `);
// }
// getAvr("Abdulloh")
// getAvr("Najmiddin")
// getAvr("Iqboljon")
// getAvr("Azizbek")
// getAvr("Bunyod")

// let getAvr = function (name, surname, age) {
//   console.log(`Name : ${name}`);
//   console.log(`Surname : ${surname}`);
//   console.log(`Age : ${age}`);
//   console.log(`==========`);
// };
// getAvr("Azizbek", "Doniyorov", 20);
// getAvr("Lazizbek", "Doniyorov", 17);
// getAvr("Ozodbek", "Doniyorov", 10);

// let getAvr = function (name, age) {
//   console.log(`Name : ${name}`);
//   console.log(`Surname : `);
//   console.log(`Age : ${age}`); // age Doniyorov chiqadi
//   console.log(`==========`);
// };
// getAvr("Azizbek", "Doniyorov", 20);
// getAvr("Lazizbek", "Doniyorov", 17);
// getAvr("Ozodbek", "Doniyorov", 10);

// let getAvr = function (name, surname, age) {
//   console.log(`Name : ${name}`);
//   console.log(`Surname : ${surname}`);
//   console.log(`Age : ${age}`);  // age undefined chiqadi
//   console.log(`==========`);
// };
// getAvr("Azizbek", 20);
// getAvr("Lazizbek", 17);
// getAvr("Ozodbek", 10);

// let getAvr = function (name, surname, age) {
//   console.log(`Name : ${name}`);
//   console.log(`Surname : ${age}`); // f chiqadi
//   console.log(`Age : ${surname}`); // yoshi chiqadi
//   console.log(`==========`);
// };
// getAvr("Azizbek", 20 , "F");
// getAvr("Lazizbek", 17 , "F");
// getAvr("Ozodbek", 10 , "F");

// shadow variable
// let name = "webbrain";
// const test = () => {
//   name = "academy";
//   console.log(name);
// };
// test();
// console.log(name);

// Arrow function
// const test = () => {};

// ""
// let telegram = (name, surname = "") => {
//   console.log(name, surname);
// };
// telegram("Webbrain" , "Academy");

// if
// let telegram = (name, surname) => {
//     if(surname)console.log(name,surname);
//     else{console.log(name);}
// }
// telegram("webbrain")

// ? :
// let telegram = (name, surname) => {
//     surname ? console.log(name,surname):console.log(name);
// }
// telegram("webbrain","academy")

// || (or)
// let telegram = (name, surname) => {
//     console.log(name , surname || "");
// };
// telegram("Aziz")

// const gpa = (a = 0, b = 0, c = 0, d = 0) => {
//   let res = (a + b + c + d) / 4;
//   console.log(res);
// };
// gpa(2.5,5,4,3.5)
// gpa(5,3,4,2.5)
// gpa(3,2,5,3.5)

// foiz chiqarish

// const getNum = (a) => {
//   let total = 193;
//   return (a * 100) / total;
// };
// console.log(getNum(164));

// const getNum = (a) => {
//   let total = 193;
//   return (a * 100) / total;
// };
// console.log(parseInt(getNum(164)));

// const getNum = (a) => {
//   let total = 193;
//   console.log((a * 100) / total);
//   return (a * 100) / total;
// };
// console.log(parseInt(getNum(164)));