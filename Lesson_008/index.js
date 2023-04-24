// console.log(Number(.1+.2));
// console.log(Number(.1+.2).toFixed(1)); // sonni butun qismini olib beradi (qayerigacha kerak bo'lsa)

//==============
// stringni numberga o'tqazish uchun + dan foydalanamz yoki barini Numberga o'rab qo'yishimz kerak
// let num = 0.1 + 0.2;
// console.log(Number(num.toFixed(1)));  // <-- 1-usul

// let num = 0.1 + 0.2;
// console.log(+(num.toFixed(1)));      // 2-usul

//==============
// eval

// let num = "0.1 + 0.2";
// console.log(eval(num));

//==============

// let num = "0.1 + 0.2"
// console.log(parseFloat(num));  // string ichidagi arifmetik amallarni bajarishda parseFloat sonni yaxlitlab beradi
// console.log(parseInt(num));  // string ichidagi arifmetik amallarni bajarishda parseInt faqat birinchi sonni oladi

//==============

// numberni benaryga o'tqazish
// let num = 5
// console.log(num.toString(2));

// benarydan numberga o'tqazish
// console.log(parseInt("101",2));
// console.log(parseInt("11010",2));

//==============
// isNaN
// console.log(isNaN(+"1_000"));

//==============
// Object.is
// let res = Object.is("web" , "web")  // true
// console.log(res);

// let res = Object.is("web" , "webbd")  // false
// console.log(res);

//==============
// toPrecision
// let num = 5.214143;

// console.log(num.toPrecision(1));  // 5
// console.log(num.toPrecision(2));  // 5.2
// console.log(num.toPrecision(3));  // 5.21
// console.log(num.toPrecision(4));  // 5.214

//==============
// toPrecision

// let num2 = 0.234121;

// console.log(num2.toPrecision(1));  // 0.2
// console.log(num2.toPrecision(2));  // 0.23
// console.log(num2.toPrecision(3));  // 0.234
// console.log(num2.toPrecision(4));  // 0.2341

//==============
// toPrecision

// let num3 = 0.002034121;

// console.log(num3.toPrecision(1));  // 0.002
// console.log(num3.toPrecision(2));  // 0.0020
// console.log(num3.toPrecision(3));  // 0.00203
// console.log(num3.toPrecision(4));  // 0.002034

//==============

// console.log(9_999_999_999_999_999);    // 10000000000000000

//==============
// PI
// console.log(Math.PI);  // 3.141592653589793

//==============
// abs()  absolyut musbat qiymat chiqaradi
// console.log(Math.abs(10));  // 10 (musbat)
// console.log(Math.abs(-10)); // 10 (musbat)

//==============
// round()  sonni yaxlitlash
// console.log(Math.round(2.4));  // 2
// console.log(Math.round(2.5));  // 3
// console.log(Math.round(2.7));  // 3

//==============
// floor()   butun qismini chiqaradi  yani o'zagini 
// console.log(Math.floor(10.1));   // 10
// console.log(Math.floor(10.999)); // 10

//==============
// ceil()  butun qismiga 1 qo'shib chiqaradi
// console.log(Math.ceil(10.001));  // 11
// console.log(Math.ceil(10.2));  // 11
// console.log(Math.ceil(10.7));  // 11

//==============


//==============

//==============

//==============

//==============
