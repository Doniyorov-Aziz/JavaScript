// let obj = {};
// let map = new Map();

// obj.name = "webbrain";
// map.name = "webbrain";

// console.log(obj, obj.name);
// console.log(map, map.name);

//==========================
// map.set()

// let map = new Map()

// map.set("name","It center")
// console.log(map);
// console.log(map.get("name"));  // mapni ichidagi valuesini olish uchun map.get() dan foydalanamiz

//==========================
// map.has()   biz izlagan malumotni mapni ichida bor yo'qligini tekshiradi va true false qaytaradi

// let map = new Map()

// map.set("name","It center")
// console.log(map.get("name")); // It center
// console.log(map.has("name")); // true

//==========================
// map.delete() bu malumotni o'chirish uchun ishlatamiz

// let map = new Map();

// map.set("name", "webbrain");
// map.set("title", "It center");
// map.set("founded", 2020);

// console.log(map.delete("title"));
// console.log(map);

//==========================
// map.clear()   bu parametr qabul qilmaydi va mapni ichidagi bari keylarni o'chirib yuboradi

// let map = new Map();

// map.set("name", "webbrain");
// map.set("title", "frontend");
// map.set("foundend", 2020);
// console.log(map.clear());
// console.log(map);

//==========================
// keys,values,entries

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
// ]);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

//==========================
// map bn for of ni ishlatish

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
// ]);

// for (let vl of map.keys()) {    // name , title
//   console.log(vl);
// }

// for (let vl of map.values()) {    // webbrain , it center
//   console.log(vl);
// }

// for (let vl of map.entries()) {
//   console.log(vl);
// }

//==========================
// map.next()

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
// ]);

// let gen = map.entries();
// gen.next();
// console.log(gen.next());

//==========================
// forEach

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
// ]);

// map.forEach((element) => {
//   console.log(element);
// });  // webbrain , it center

//==========================
// Object,fromEntries(map)  mapni odatiy objectga o'tkazish

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
// ]);
// console.log(Object.fromEntries(map)); 

// let map = new Map([
//   ["name", "webbrain"],
//   ["title", "it center"],
// ]);
// console.log(Object.fromEntries(map).title);   // it center 

//==========================
// Set

// let set = new Set()

// set.add("toshmat")
// set.add("eshmat")
// console.log(set);