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
// console.log(Math.floor(-10.3));  // 11

//==============
// ceil()  butun sondan bitta keyingi sonni chiqarib beradi
// console.log(Math.ceil(10.001));  // 11
// console.log(Math.ceil(10.2));    // 11
// console.log(Math.ceil(10.7));    // 11

//==============
// trunc() faqat butun qismini oladi kasr qismini qirqib tashlaydi
// console.log(Math.trunc(-21.4231));   // -21
// console.log(Math.trunc(11.999));     // 11
// console.log(Math.trunc(7.3));        // 7

//==============
// random() o bilan 1 orasidagi ixtiyoriy sonni chiqarib beradi
// console.log(Math.random());

// console.log(Math.trunc(Math.random() * 10));
// console.log(Math.trunc(Math.random() * 100));
// console.log(Math.trunc(Math.random() * 1000));
// console.log(Math.trunc(Math.random() * 10000));

//==============
// min() va max()  bu sonni eng kichigini va eng kattasini olib beradi

// console.log(Math.min(2,12,43,6,48,1)); // 1
// console.log(Math.max(2,12,43,6,48,1)); // 48

//==============
// pow()   darajaga ko'taradi

// console.log(Math.pow(2 , 3)); // 8
// console.log(Math.pow(5 , 3)); // 125

//==============
// sqrt() kvadrat ildizdan chiqaradi

// console.log(Math.sqrt(4));  // 2
// console.log(Math.sqrt(25)); // 5

//==============
// cbrt() kub ildizdan chiqaradi

// console.log(Math.cbrt(125));  // 5
// console.log(Math.cbrt(8)); // 2

//==============
// sign   bu bizga 3 ta qiymat qaytaradi (1 , -1 , 0)
// musbat bo'lsa 1 , manfiy bo'lsa -1 , 0 bo'lsa 0 qaytaradi

// console.log(Math.sign(23));   // 1
// console.log(Math.sign(-15));  // -1
// console.log(Math.sign(0));    // 0
// console.log(Math.sign(-0));    // -0

//==============

//==============

//==============
