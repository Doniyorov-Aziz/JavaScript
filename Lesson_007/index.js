// let obj = {
//   name: "Aziz",
//   age: 21,
//   child: {
//     name: "Laziz",
//     age: 18,
//     child: {
//       name: "Ozodbek",
//       age: 11,
//     },
//   },
// };
// let sum = 0;
// while (1) {
//   if (obj) {
//     sum += obj.age;
//   } else {
//     break;
//   }
//   obj = obj.child;
// }
// console.log(sum);

//================

// let user = {
//   name: "webbrain",
//   sayHi: function () {
//     console.log("Hi");
//   },
// };
// user.sayHi();

//================

// function sayHi() {
//   console.log("Hello");
// }
// let user = {
//   name: "webbrain",
//   sayHi: sayHi,
// };
// user.sayHi()

//================

// let name = "Webbrain";
// let obj = {
//   name,
//   sayHi() {
//     console.log("I said Hi");
//   },
// };
// obj.sayHi();

//================

// let obj = {
//   name: "Webbrain",
//   sayHi() {
//     console.log(`Hi , ${this.name}`);
//   },
// };
// obj.sayHi();
//this parent -> obj ga teng

//================

// let user = {
//   name: "Webbrain",
//   sayHi() {
//     console.log(`Hi , ${this.name}`);
//   },
// };
// let usr = user;
// usr.sayHi();

//================

// let user = {
//   name: "Webbrain",
//   sayHi() {
//     console.log(`Hi , ${this.name}`);
//   },
//   getName: function () {
//     return () => {
//       console.log(`Hello , ${this.name}`);
//     };
//   },
// };
// let usr = user;
// usr.getName()();

//================

// function getName() {
//   this.name = "Webbrain";
//   console.log(this);
// }
// console.log(new getName().name);

//================

// function getName() {
//   this.name = "Webbrain";
//   this.sayHi = function () {
//     console.log(this);
//     return "hi";
//   };
// }
// console.log(new getName().sayHi());

//================

// function getName(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log(`Hi`, this.name);
//   };
// }
// new getName(`Aziz`).sayHi();
// new getName(`Laziz`).sayHi();

//================

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// let obj = {
//   [id1]: "webbrian",
// };
// console.log(obj[id1]);

//================

// let obj = {
//   name: "webbrain",
//   title: "Frontend",
//   age: 2020,
// };
// for (let i in obj){
//     console.log(i);
// }

//================

// let obj = {
//   name: "webbrain",
//   title: "Frontend",
//   age: 2020,
// };
// for (let i in obj){
//     console.log(obj[i]);
// }

//================
//distructr - ajratib olish

// let obj = {
//   name: "Aziz",
//   age: 21,
//   title: "Frontend",
// };
// const { name, age, title } = obj;
// console.log(name);
// console.log(obj.name);    // <-- obj.name deb yozmasdan faqat name dib consolega chiqarish usuli

//================

// let obj = {
//   name: "Aziz",
//   age: 21,
//   title: "Frontend",
//   child: {
//     name: "Webbrain",
//     age: 2020,
//   },
// };
// const { name, age, title, child } = obj;
// console.log(child.age);

//================

// let name = "web";
// let obj = {
//   name: "Aziz",
//   age: 21,
//   title: "Frontend",
//   child: {
//     name: "Webbrain",
//     age: 2020,
//   },
// };
// const { name: newName, age, title, child } = obj;  // : (ikki nuqta) bunda yangi nom berishda ishlatiladi
// console.log(child.name);

//================

// distructr (qirqb olish) bo'layotganda uni ichidan yana distructr qilish uchun :{} shundan foydalanamiz

// let name = "web";
// let obj = {
//   name: "Aziz",
//   age: 21,
//   title: "Frontend",
//   child: {
//     childname: "Webbrain",
//     childage: 2020,
//   },
// };
// const { name: newName, age, title, child:{childname,childage} } = obj;
// console.log(childname);

//================
//sprite opirator --> ...  ( 3ta nuqta)

// let obj = {
//   child: {
//     name: "webbrain",
//     age: 2020,
//   },
// };
// console.log(obj);
// obj = { ...obj.child };
// console.log(obj);

//================

// const obj = {
//   name: "webbrain",
//   age: 2020,
// };
// console.log({ ...obj, name: "It center" });
// sprite operatori bilan name ni qiymatini o'zgartirish 