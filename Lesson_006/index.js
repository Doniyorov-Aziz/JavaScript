// let account = { name: "Webbrain Academy", major: "Frontend,bunker" };
// console.log(account);

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
// };
// console.log(account.founded);

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
// };
// console.log(account.name);  // <-- 1-usul

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
// };
// console.log(account["major"]);   // <-- 2-usul

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
//   'full name': "Webbrain It Centre"
// };
// console.log(account["full name"]);

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
//   'full name': "Webbrain It Centre",
//   10:2314
// };
// console.log(account[10]);

//==================

// let newObj1 = {};
// let newObj2 = {};
// console.log(newObj1,newObj2);

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
//   "full name": "Webbrain It Centre",
//   10: 2314,
// };
// let key = "major";
// console.log(account[key]);       // 3 ta console ham bir biriga teng
// console.log(account.major);
// console.log(account["major"]);

//==================

// let account = {
//   name: "Webbrain Academy",
//   major: "Frontend,bunker",
//   founded: 2020,
//   "full name": "Webbrain It Centre",
//   10: 2314,
// };
// let name = "major";
// console.log(account.name);
// console.log(account[name]);
// console.log(account["name"]);

//==================

// let account = {
//   name: "webbrain",
//   major: "frontend",
// };
// account.name = "Webbrain It academy"
// console.log(account);

//==================

// let account = {
//   name: "webbrain",
//   major: "frontend",
// };
// account.name = "Webbrain It academy";  // malumotni o'zgartirish
// account.founded = 2020;        // ichiga yangi malumot creat qilish
// console.log(account);

// !!! agar objectni ichida malumot bo'lsa biz uni o'zgartirsak bo'ladi agar yo'q malumotni o'zgartirmoqchi bo'lsak avtomaticski uziga yangi malumot creat qivoladi

//==================

// let account = {
//   name: "webbrain",
//   major: "frontend",
//   name: "webbrain it academy",
// };
// console.log(account);
// qachonki bir xil malumot yoziladigan bo'lsa hardoim bizga eng oxirida yozilgan malumotni consoleda chiqaradi

//==================

// let account = {
//   name: "webbrain",
//   major: "frontend",
//   name: "webbrain it academy",
//   founded: 2020,
// };
// delete account.major;   // malumotni o'chirish
// console.log(account);

//==================

// let account = {
//   name: "webbrain",
//   major: "frontend",
//   name: "webbrain it academy",
// };
// Object.freeze(account)  // malumotni muzlatib qo'yish

// account.founded = 2020;
// delete account.major;
// console.log(account);

// muzlatib qo'ygan vaqtimz ichiga yangi malumot qo'shibam va ichidagi malumotni o'chiribam bo'lmaydi

//==================

// let account = {
//   name: "webbrain",
//   major: "frontend",
// };
// Object.seal(account);

// account.major = "bunker";
// account.founded = 2020;
// delete account.major;
// console.log(account);

// seal da ichiga malumot qo'shibam va ichidagi malumotni o'chiribam bo'lmaydi faqatgina ichidagi malumotni o'zgartirsak bo'ladi

//==================

// const ac1 = {
//   name: "webbrain",
//   major: "frontend",
// };

// const ac2 = {
//   name: "webbrain",
//   major: "frontend",
// };

// const ac3 = ac1;
// console.log(ac1 == ac3);   // true
// console.log(ac1 === ac3);  // true

//==================

// const ac1 = {
//   name: "webbrain",
//   major: "frontend",
// };

// const ac2 = {
//   name: "webbrain",
//   major: "frontend",
// };

// const ac3 = ac1;
// ac1.founded = 2020;
// console.log(ac1);
// console.log(ac3);

//==================

// const ac1 = {
//   name: "webbrain",
//   major: "frontend",
// };

// const ac2 = structuredClone(ac1)
// console.log(ac2);

//==================

// let name = "webbrain academy";
// let major = "frontend";

// const ac1 = {
//   name: name,
//   major: major,
// };
// console.log(ac1);               -----------|
//                                            |
//==================                          |----- <-- 2 ta kod ham bir xil (2-si qisqa yozilgan)
//                                            |
// let name = "webbrain academy";  -----------|
// let major = "frontend";

// const ac1 = {
//   name,
//   major,
// };
// console.log(ac1);

// !!! agar valeu variable ko'rinishda keladigan bo'lsa va anashu variable nomi key nomi bilan birxil bo'ladigan bo'lsa bitta o'zini yozib ketsak bo'ladi (tepada 2- misolda ko'rsatilgan)

//==================

// const ac1 = {
//     name : "webbrain",
//     major : "frontend"
// }
// console.log("name" in ac1); // true
// console.log("namess" in ac1); // false

// in - ac1 ni ichida name bor yoki yo'qligini aniqlab beradi va bizga true false qaytaradi

//==================

// const ac1 = {
//   name: "webbrain",
//   major: "frontend",
// };
// const ac2 = {}
// Object.assign(ac2,ac1)
// console.log(ac2);

// assign bu malumot biriktirish

//==================

// const ac1 = {
//   name: "webbrain",
//   major: "frontend",
// };
// const ac2 = {};

// ac1.name = "test";  // name ni qiymati testga o'zgaradi

// Object.assign(ac2, ac1);
// console.log(ac2);

//==================

// for in

// const ac1 = {
//   name: "webbrain",
//   major: "frontend",
//   mentors: 5,
//   founded: 2020,
//   students: 1000,
// };
// for (let i in ac1){
//     console.log(i);
// }