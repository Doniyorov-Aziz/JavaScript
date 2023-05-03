// let num = [1, 2, 34, 21, 56, 3, 7];
// let res = num.filter((valeu, index) => {
//   return valeu < 10;
// });
// console.log(res);  // [ 1,2,3,7 ]

// let ar = [1, 2, 3, 42, 12, 31, 47];
// let res = ar.filter((valeu, index) => {
//   return valeu > 10;
// });
// console.log(res);   // [ 42,12,31,47 ]

// ===================
// filterni stringga nisbatan ishlatish

// let str = ["orange", "apple", "banana", "watermelon", "kiwi"];
// let res = str.filter(function (value, index) {
//   return value.length <= 5;
// });
// console.log(res);  // apple , kiwi

// ===================

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.filter((value) => value.years === 2002);
// console.log(res);

// ===================

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.filter((value) => value.id >= 5);
// console.log(res);

// ===================
// sort() bu malumotlarni tartiblab beradi

// let num = [1,4,7,5,2,6,9,3,8]
//  let res=num.sort()
//  console.log(res);  // 1,2,3,4,5,6,7,8,9

// let num = [22, 1, 3, 54, 34, 2, 6, 57];
// let res = num.sort((a, b) => a - b);
// console.log(res); // 1,2,3,6,22,34,54,57

// let str = ["orange", "apple", "banana", "watermelon", "kiwi"];
// let res = str.sort()
// console.log(res);

// let str = ["Orange", "Apple", "banana", "watermelon", "kiwi"];
// let res = str.sort((a,b)=>a.localeCompare(b))
// console.log(res);

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.sort((a, b) => a.years - b.years);
// console.log(res);

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.sort((a, b) => b.years - a.years);
// console.log(res);

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.sort((a, b) => a.name.localeCompare(b.name));
// console.log(res);

// ===================
// find() bu birga bir mos bo'ladigan qiymat bo'lsa true qaytaradi va biz qidirgan qiymatni chiqradi agar yo'q bo'lsa undefined chiqradi

// let num = [1, 32, 4, 5, 76, 29];
// let res = num.find((value) => {
//   return value === 5;
// });
// console.log(res);   // 5

// let num = [1, 32, 4, 5, 76, 29];
// let res = num.find((value) => {
//   return value === 31;
// });
// console.log(res); // undefined   // sababi array ichida 31 yo'q

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.find((value) => {
//   return value.id === 7;
// });
// console.log(res);    // bunda id si 7 ga teng bo'lganini chiqarib beradi

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
//   { id: 6, years: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, years: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, years: 2007, name: "Doniyorov Ozodbek" },
// ];
// let res = students.find((value) => {
//   return value.id === 7;
// });
// console.log(res.name); // bunda id si 7 ga teng bo'lganini namemini chiqarib beradi // Doniyorov Lazizbek

// ===================
// findIndex() bu malumotni nechanchi indexda turganini chiqarib beradi

// let students = [
//   { id: 1, years: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, years: 1996, name: "Tilovov Ilhom" },
//   { id: 3, years: 2002, name: "MuhammadImin" },
//   { id: 4, years: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, years: 2002, name: "Akobir" },
// ];
// let res = students.findIndex((value) => {
//   return value.id === 4;
// });
// console.log(res); // 3 sababi 4 raqamli id 3- indexda turibdi

// ===================
// forEach() bunda faqat bitta amal bajarsak bo'ladi va boshqa return bo'lmaydi

// let num = [1, 32, 5, 7, 24, 55];

// let res = num.forEach((value, index) => {
//   console.log(value + 2);
// }); // 3,34,7,9,26,57

// ===================
// map() bu return bo'ladi va bir qancha amal bajarsak bo'ladi

// let num = [2, 1, 34, 25, 7, 6];
// let res = num.map((value, index) => {
//   return value + 3;
// });
// console.log(res); // 5,4,37,28,10,9

// ===================
// every() bu malumotlar biz bergan shartga mos keladimi mos kelsa true mos kelmasa false chiqaradi

// let num = [1, 2, 3, 4, 23, 14];
// let res = num.every((value) => typeof value === "number");
// console.log(res); // true

// let num = [1, 2, 3, "31", 23, 14];
// let res = num.every((value) => typeof value === "number");
// console.log(res); // false

// ===================
// some() bu everyni teskarisi yani ichida noto'g'ri malumot bo'lsa bizga true qaytaradi

// let num = [1, 2, 3, 14];
// let res = num.some((value) => typeof value === "string");
// console.log(res); // false

// let num = [1, 2, 3, "21", 14];
// let res = num.some((value) => typeof value === "string");
// console.log(res); // true

// ===================
// fill() malumotni o'zgartirish uchun ishlatamiz va u 3 ta qiymatgacha qabul qiladi

// let num = [1, 2, 43, 54, "66", 7];
// let res = num.fill("wba", 3);
// console.log(res);  // 1,2,43,'wba','wba','wba'

// let num = [1, 2, 43, 54, "66", 7];
// let res = num.fill(66, 4, 5);
// console.log(res); // 1,2,43,54,66,7

// ===================
// copyWithin  bu malumotni copy qilib qo'yadi va 3 ta qiymat qabul qiladi birinchisi qayerdan boshlashi 2- qiymat qaysi qiymatni copy qilishi 3- qiymat shu copy qilinadigan malumotni qayergacha copy qilishi

// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7];
// let res = a.copyWithin(0, 3, 6);
// console.log(res); // 1,2,3,1,2,3,4,5,6,7

// let a = [0, 0, 0, 1, 2, 3, 4, 5, 6, 7];
// let res = a.copyWithin(8, 3, 6);
// console.log(res); // 0,0,0,1,2,3,4,5,1,2

// ===================
// reduce()
// reduce(callback, initialvalue)

// let a = [2, 1, 4, 54, 3, 21];
// let res = a.reduce((sum, current) => {
//   console.log(sum);
//   return 1;
// }, 0);  // 0,1,1,1,1,1  // sababi biz birnchi qiymat berepmiz sum ga 0 deb kn returnga biz qanday shart bersak shu amalga oshadi

// let a = [2, 1, 4, 54, 3, 21];
// let res = a.reduce((sum, current) => {
//   console.log(sum);
//   return sum + current;
// });
// console.log(res); // 2,3,7,61,64,85  // returnga biz sum bilan currentni yig'indisini chiqarib berishini aytdik va shu qiymat chiqadi

// let num = [1, 2, 3, 4, 5];
// let res = num.reduce((sum, current, i) => {
//   console.log(i, sum, i - sum);
//   return i - sum;
// }, 0);
// console.log(res); // 2

// let num = [1, 2, 3, 4, 5];
// let res = num.reduce((sum, current, i) => {
//   console.log(sum, i, sum - i);
//   return sum - i;
// }, 0);
// console.log(res); // -10

// let num = [1, 2, 3, 4, 5];
// let res = num.reduce((sum, current, i) => {
//   console.log(current, i, current - i);
//   return current - i;
// }, 0);
// console.log(res); // 1

// ===================
// multidimentional bu array ichida array kelishiga aytiladi

// let ar = [1, [2, 3, 4], 5, 6, 7];
// console.log(ar[3]); // 6

// let ar = [1, [2, 3, 4], 5, 6, 7];
// console.log(ar[1]); // [2, 3, 4]

// let ar = [1, [2, 3, 4], 5, 6, 7];
// console.log(ar[1][0]); // 2

// let ar = [1, [2, 3, 4], 5, 6, 7];
// console.log(ar[1][1]); // 3

// let ar = [1, [2, 3, 4], 5, 6, 7];
// console.log(ar[1][2]); // 4  // bu array ichida array bo'lsa va shu 2- arrayni ichidagi indexni chaqirish usuli

// ===================
// flat bu ichma ich kelgan arraylarni parentidan chiqarish uchun ishlatamiz va cheksiz qiyamti kerak bo'lsa infinity qiymatini qabul qiladi

// let a = [1, 2, [3, 4, [5, [6, 7]]], 8];
// console.log(a.flat(3)); // 3 berganimni sababi chunki array ichida 3 ta array qatnashgan va barini arraydan chiqarib beradi

// let a = [1, 2, [3, 4, [5, [6, 7]]], 8];
// console.log(a.flat(Infinity)); // infinity bu cheksiz ichma ich array kelsaham barini ignor qib arraydan chiqarib beradi

// ===================
// from bu array bo'lmagan malumotni arrayga o'tkazib beradi

// console.log(Array.from("webbrain academy"));

// console.log(Array.from("webbrain", (v) => v.toUpperCase()));

// ===================
// new Array

// console.log(new Array(1, 2, 3)); // [ 1, 2, 3 ]

// ===================
// entries()

// let obj = new Map([
//   ["a", 1],
//   ["b", 2],
// ]).entries();

// console.log(obj.next()); //  ['a',1] done: false
// console.log(obj.next()); //  ['b',2] done: false
// console.log(obj.next()); //  undefined , done : true  
