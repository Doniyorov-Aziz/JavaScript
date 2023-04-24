// Numbers | All you need to know

//===============

// e == 0 (nol) ga
// 1e6 == 1000000
// 100000000 == 100_000_000
// 10 == 1e1
// 1e-1 == 0.1 
// 1e-4 == 0.001
// 9_999_999_999_999_999 == 1e16 yani (10000000000000000)

//===============

// toFixed - sonni kasr qismini yaxlitlab beradi va numberni stringga o'tqizb qo'yadi
// eval - string ichidagi arifmetik amallarni bajarib beradi va javobini number kurinishida chiqaradi
// Binary bu ikkilik sanoq sistemsi 0 va 1 dan tashkil topgan
// toString bu numberni stringga o'tqazib beradi
// isNaN bu NaN mi yoki NaN masligini tekshiradi
// Object.is 2 ta stringni bir biriga taqqoslaydi va bizga true false qaytaradi 
// ===============
// toPrecision

// let num2 = 0.234121;
// console.log(num2.toPrecision(1));  // 0.2
// console.log(num2.toPrecision(2));  // 0.23
//===============
// Math bu javascriptda amallarni bajarishda yordam beradigan qo'shimcha metod
// Math.PI == 3.141592653589793
// Math.abs() bu absolyut yani musbat sonniyam manfiy sonniyam bizga musbat son qib chiqarib beradi
// Math.round() bu sonni yaxlitlab beradi  // Math.round(2.4) -> 2   // Math.round(2.5) -> 3   // Math.round(2.7) -> 3 
// Math.floor() bu sonni butun qismini chiqaradi // Math.floor(10.999) -> 10
// 
//================

// stringni numberga o'tqazish uchun + dan foydalanamz yoki barini Numberga o'rab qo'yishimz kerak
// let num = 0.1 + 0.2;
// console.log(Number(num.toFixed(1)));  // <-- 1-usul

// let num = 0.1 + 0.2;
// console.log(+(num.toFixed(1)));      // 2-usul

//================

