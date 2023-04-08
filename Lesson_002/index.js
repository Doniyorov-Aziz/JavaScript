// let a = 1;
// let b = "1";
// console.log(a+b);

//////////////////
// Malumotlarni bir biriga qo'shish

// let str1="webbrain"
// let str2="academy"
// console.log(str1+str2);

//////////////////
//NaN

// let b = "1c";
// console.log(+ b);

//////////////////
//isNaN

// let b = "1c";
// console.log(isNaN(+b));  // <-- bu NaN

//////////////////
//isNaN

// let b = "1";
// console.log(isNaN(+b));  // <-- bu NaN emas (yani not a number emas)

//////////////////
//sonlarni bir biriga qo'shish

// let a = 1;
// let b = "1";
// console.log(a + +b);

//////////////////
//sonlarni bir biriga ko'paytirish usuli

// let a = 2;
// let b = "3";
// console.log(a * b);

//////////////////
//sonlarni bir biridan ayirish usuli

// let a = 2;
// let b = "3";
// console.log(+a - b);

//////////////////
// parseInt

// let a = "13.5";
// console.log(Number(a));
// console.log(Number.parseInt(a));

//////////////////
// parsFloat

// let b = "12.7";
// console.log(Number(b));
// console.log(Number.parseFloat(b));

//////////////////
// true = !0,!null,!undefined
// true = 1  false = 0

// console.log(false == 0);          // true
// console.log(false == 1);          // false
// console.log(false == null);       // false
// console.log(false == undefined);  // false

// console.log(true == 0);           // false
// console.log(true == 1);           // true
// console.log(true == null);        // false
// console.log(true == undefined);   // false
// console.log(null == undefined);   // true
// console.log(true == "0");

//////////////////
//  + - * /

// let a = 12;
// let b = "15";

// console.log(a + +b);
// console.log(a - +b);
// console.log(a * +b);
// console.log(a / +b);

//////////////////
// % qoldiq (foiz)

// console.log(123 % 25);
// console.log(111 % 10);

//////////////////
// () qavs

// console.log(1 + (1 * 1) / 1);
// console.log(((3 + 1) * 1) / 2);
// console.log(5 + 2 * (6 / 3));
// console.log(5 + (4 * 7) / 2);

//////////////////
//  Icrement ++

// let a=1
// console.log(a++);
// console.log(a);

// let a=2
// a++
// console.log(a);

// let a = 3;
// a = a + 1;
// console.log(a);

// let a = 2;
// console.log(a++);
// console.log(a);

// let a=5
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a);
// console.log(a++);
// console.log(a++);

//////////////////
//  Decrement --

// let a=1
// console.log(a--);
// console.log(a);

// let a=2
// a--
// console.log(a);

// let a = 3;
// a = a - 1;
// console.log(a);

// let a = 2;
// console.log(a--);
// console.log(a);

// let a=5
// console.log(a--);
// console.log(a);
// console.log(--a);
// console.log(a);
// console.log(a--);
// console.log(a--);

//////////////////
// Obrivations

// let a = 50;
// a = a + 10;
// a += 10;
// console.log(a);

// let a = 40;
// a -= 20;
// a /= 2;
// a *= 50;
// console.log(a);

// let a = 2;
// a += 10;
// a *= 20;
// a /= 5;
// a -= 50;
// console.log(a);

//////////////////
// Comparision
// <,>,==,===,<=,>=,! malumotlarni compare qilish doim true yoki false qiymat qaytaradi

// let a = 10;
// let b = 12;
// console.log(a > b); // false

// let a = 3;
// let b = 4;
// console.log(a < b); // true

// let a = 5;
// let b = 12;
// console.log(a == b); // false  // == bir biriga tengmi deb soraydi

// let a = 20;
// let b = 20;
// console.log(a == b); //true 

// let a = 2;
// let b = "2";
// console.log(a === b); // false

// let a = 2;
// let b = 2;
// console.log(a === b); // true  // === tenglikda bir biriga tengligini va typeofigayam tengligiga qaraydi
