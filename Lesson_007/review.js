// Advanced Object | Objects - 2

// Garbich collection - qachonki link bo'ladigan bo'lsa objectni joylashish o'rni o'zgaradigan bo'lsa Heapdan valuesini remote qiladi yani o'chirib yuboradi
// this objectga nisbatan ishlatiladi

// Objectni ichidagi istalgan keyga access qilish uchun this dan foydalanamiz
// new.target - constraktor bilan funksiya chaqirilgan yoki chaqirilmaganligini aniqlashtirib beradi

//==============

// symbols ni qiymatiyam objectni keysi bo'la oladi faqatgina []shuni ichida yoziladi
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// let obj = {
//     [id1] : "webbrain"
// }
// console.log(obj[id1]);

//==============

//distructr - ajratib olish

// let obj = {
//     name: "Aziz",
//     age: 21,
//     title: "Frontend",
//   };
//   const { name, age, title } = obj;
//   console.log(name);
//   console.log(obj.name);  // <-- obj.name deb yozmasdan faqat name dib consolega chiqarish usuli

//==============

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
// const { name: newName, age, title, child } = obj; // : (ikki nuqta) bunda yangi nom berishda ishlatiladi
// console.log(child.age);

//==============

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