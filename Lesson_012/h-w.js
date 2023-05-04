// #1 birxil bo'lgan sonlarni dublicate yani chiqarib yuborish

// let ar = [1, 2, 3, 3, 2, 1, 5, 7, 6, 5, 8, 9, 7];
// let res = ar.filter((value, index, array) => array.indexOf(value) === index);
// console.log(res);

//========================

// #2 2 ta arrayni bir biriga taqqoslash

// let ar1 = [3, 4, 5];
// let ar2 = [3, 4, 5];

// console.log(ar1 == ar2); // false

//========================

// #3 berilgan malumotda nechta katta harf va nechta kichik harf borligini chiqarish kerak

// let str = "Azizbek";
// function kk(str) {
//   let katta = 0;
//   let kichik = 0;
//   for (o of str) {
//     if ((o == o.toUpperCase()) == true) {
//       katta += 1;
//     } else if ((o == o.toLocaleLowerCase()) == true) {
//       kichik += 1;
//     }
//   }
//   return `javob: ${katta}ta katta harf, ${kichik}ta kichiK harf`;
// }
// console.log(kk(str));

// #4  @ ni o'rniga a harfini chiqarib berish kerak

// let str = "webbr@in Ac@demy";
// function getName(str) {
//   let res = "";
//   for (i of str) {
//     if (i !== "@") {
//       res += i;
//     } else {
//       res += "a";
//     }
//   }
//   return res;
// }
// console.log(getName(str));

// #5 berilgan stringdagi bir xil harflarni dublicate qilish kerak

// let a = "Webbraaaain Acaaaddemmmyy";
// let res = "";
// for (i of a) {
//   if (res.slice(-1) !== i) {
//     res += i;
//   }
// }
// console.log(res);

// #6

// let str = "+998 93 000 0292";
// let res = str.split(" ");
// let obj = {
//   count1: res[0],
//   count2: res[1],
//   count3: res[2],
//   count4: res[3],
// };
// console.log(obj);

// #7  nechta harf qatnashganini chiqarish

// let str = "Webbrain Academy";
// let res = {};
// function getCount(text) {
//   for (i of text) {
//     res[i] ? (res[i] = res[i] + 1) : (res[i] = 1);
//   }
//   console.log(res);
// }
// getCount(str)

// #8  berilgan  malumotni har bir harfini 2 tadan qilib beradi

// let str = "webbrain";
// let res = "";
// Array.from(str, (v) => {             // 1-usul
//   res += v + v;
// });
// console.log(res);

// let str = "Webbrain";
// let res = "";
// for (let i of str) {                 // 2-usul
//   res += i + i;
// }
// console.log(res);

// #9 malumot ichidagi sonlarni toping

// let str = "we66ra1n a1c32ad4my";
// let res = "";
// for (let i of str){                   // 1-usul
//     if(+i){
//         res += i
//     }
// }
// console.log(res);

// let str = "we66rain acade4y";        // 2-usul
// let res = "";
// for (let i of str) {
//   if (i.toUpperCase() == i.toLowerCase() && i != ` `) {
//     res += i;
//   }
// }
// console.log(res);

// #10  2 ta stringni ichidagi harflar soni bir biriga tengligini tekshirish kerak

// let str1 = "web";
// let str2 = "ewb";
// function data(str1, str2) {
//   let res = str1.split("");
//   let res2 = str2.split("");
//   res.sort((a, b) => a.localeCompare(b));
//   res2.sort((a, b) => a.localeCompare(b));
//   res = res.toString();
//   res2 = res2.toString();
//   console.log(res == res2);
// }
// data(str1, str2);

// #11

// let str = "webbraaain";
// let obj = "";
// let count=0
// for (let i in str) {
//   if(obj[obj.length-1]===str[i]){
//     count++
//   }else {
//     obj+=str[i]
//   }
// }
// console.log(obj);

// #12

// let obj = { title: "webbrain", age: 2020 };
// for (let i in obj) {
//   console.log(i);
// }
