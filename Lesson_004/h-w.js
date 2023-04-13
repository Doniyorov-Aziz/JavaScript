// let num = "4728";
// let t = parseInt(num / 1000);
// num = num % 1000;
// let u = parseInt(num / 100);
// num = num % 100;
// let i = parseInt(num / 10);
// num = num % 10;
// b = num;

// (a = ""), (d = ""), (e = ""), (f = "");
// switch (t) {
//   case 1:
//     a = "bir ming";
//     break;
//   case 2:
//     a = "ikki ming";
//     break;
//   case 3:
//     a = "uch ming";
//     break;
//   case 4:
//     a = "to'rt ming";
//     break;
//   case 5:
//     a = "besh ming";
//     break;
//   case 6:
//     a = "olti ming";
//     break;
//   case 7:
//     a = "yetti ming";
//     break;
//   case 8:
//     a = "sakkiz ming";
//     break;
//   case 9:
//     a = "to'qqiz ming";
//     break;
// }
// switch (u) {
//   case 1:
//     d = "bir yuz";
//     break;
//   case 2:
//     d = "ikki yuz";
//     break;
//   case 3:
//     d = "uch yuz";
//     break;
//   case 4:
//     d = "to'rt yuz";
//     break;
//   case 5:
//     d = "besh yuz";
//     break;
//   case 6:
//     d = "olti yuz";
//     break;
//   case 7:
//     d = "yetti yuz";
//     break;
//   case 8:
//     d = "sakkiz yuz";
//     break;
//   case 9:
//     d = "to'qqiz yuz";
//     break;
// }
// switch (i) {
//   case 1:
//     e = "o'n";
//     break;
//   case 2:
//     e = "yigirma";
//     break;
//   case 3:
//     de = "o'ttiz";
//     break;
//   case 4:
//     e = "qiriq";
//     break;
//   case 5:
//     e = "ellik";
//     break;
//   case 6:
//     e = "oltmish";
//     break;
//   case 7:
//     e = "yetmish";
//     break;
//   case 8:
//     e = "sakson";
//     break;
//   case 9:
//     e = "to'qson";
//     break;
// }
// switch (b) {
//   case 1:
//     f = "bir";
//     break;
//   case 2:
//     f = "ikki";
//     break;
//   case 3:
//     f = "uch";
//     break;
//   case 4:
//     f = "to'rt";
//     break;
//   case 5:
//     f = "besh";
//     break;
//   case 6:
//     f = "olti";
//     break;
//   case 7:
//     f = "yetti";
//     break;
//   case 8:
//     f = "sakkiz";
//     break;
//   case 9:
//     f = "to'qqiz";
//     break;
// }
// console.log(a, d, e, f);

/////////////////////

// let m = 67238;
// let n = m.toString();
// let f = "";
// for (let i = 0; i < n.length; i++) {
//   switch (n[i]) {
//     case "1":
//       f += " bir";
//       break;
//     case "2":
//       f += " ikki";
//       break;
//     case "3":
//       f += " uch";
//       break;
//     case "4":
//       f += " to'rt";
//       break;
//     case "5":
//       f += " besh";
//       break;
//     case "6":
//       f += "olti";
//       break;
//     case "7":
//       f += " yetti";
//       break;
//     case "8":
//       f += " sakkiz";
//       break;
//     case "9":
//       f += " to'qqiz";
//       break;
//   }
// }
// console.log(f);

/////////////////////

// let n = 5232;
// let m = n.toString();
// let t = 0;
// for (let i = 0; i < m.length; i++) {
//   t += +m[i];
// }
// console.log(t);

/////////////////////

// for (let i = 2; i <= 100; i++) {
//   let tub = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       tub = false;
//       break;
//     }
//   }
//   if(tub){
//     console.log(i);
//   }
// }
