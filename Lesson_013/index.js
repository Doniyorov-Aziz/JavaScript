// let obj = { name: "webbrain", title: "It center" };
// let { name, title } = obj;
// console.log(name, obj.name);

// function getReverse(a) {
//   let res = a.split("");
//   console.log(res.reverse().join(""));
// }
// getReverse("webbrain");

//=======================

// let obj = { name: "webbrain", status: "offline", data: { year: 2023 } };
// let { name, status, data } = obj;
// console.log(data.year); // 2023

//=======================
// obj ichidagi boshqa bir obj ni distructure qilish

// let obj = { name: "webbrain", status: "offline", data: { year: 2023 } };
// let {
//   name,
//   status,
//   data: { year },
// } = obj;
// console.log(year);   // 2023

//=======================
// arrayda distructure qilish

// let ar = ["orange", "apple", "kiwi", "banana"];
// let [bir, ikki, uch, tort] = ar;
// console.log(tort);

//=======================

// let ar = ["orange", "pear", "apple", "banana", "kiwi"];
// let [bir, ikki, ...res] = ar;
// console.log(res);

//=======================
// functionda distructure qilish

// const getData = (data = {}) => {
//   console.log(data.name, data.id);
// };
// getData({ name: "webbrain", id: 7 });

//=======================
// objni arrayga o'tkazib distructure qilish va ularni key va value larini chiqarish

// let obj = { name: "Web", year: 2023, title: "Developer" };

// Object.entries(obj).map(([key, value], index) => {
//   console.log(key);
// }); // name,year,title

// let obj = { name: "Web", title: "Developer", year: 2023 };

// Object.entries(obj).map(([key, value], index) => {
//   console.log(value);
// }); // Web,Developer,2023

//=======================
//=======================

// new Date

// let date = new Date();
// console.log(date.getTime());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTimezoneOffset());

//=======================
// bugungi kun oy yilni chiqarish

// const getToday = () => {
//   let date = new Date();
//   return `Today:${date.getDate()}-kun ${
//     date.getMonth() + 1
//   }-oy ${date.getFullYear()}-yil`;
// };
// console.log(getToday());

// const getToday = (symbol) => {
//   let date = new Date();
//   return `Today:${date.getDate()}${symbol}${
//     date.getMonth() + 1
//   }${symbol}${date.getFullYear()}`;
// };
// console.log(getToday("/"));

//=======================
// JSON

// objectni Jsonga o'zgartirish

// let obj = { name: "webbrain", year: 2023 };
// console.log(JSON.stringify(obj));

//=======================

// let user = {
//   name: "webbrain",
//   status: "offline",
//   date: { fullname: "Webbrain It Academy", year: 2023, founded: 2020 },
// };
// let json = JSON.stringify(user);
// let obj = JSON.parse(json);
// console.log(obj);
// console.log(json);