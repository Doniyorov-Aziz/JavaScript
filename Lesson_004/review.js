// switch || case
// default bu huddi else ga o'xshagan va biz qidirgan malumot chiqmasa default degan key worddan  foydalanamiz

// if bilan switch ni farqi
// / if da qiymati true yoki falsega qaytadi || switch caseda malumot birga bir mos kelsa

// Switch
// switch ifga alternativ sifatida ishlatida
// Case - bu holat yani o'zgaruvchini holati qanaqa bo'lsin degani

// ForLoop..-> ittaratsiya yani aylantirish
// / Loop....-> bitta narsani qayta qayta doimiy qilinishi yoki nimadur doimiy harakatda bo'lishi

// for ni uchta parametri mavjud (boshlanish;manzil;step)
// ikkinchi shartimz yani manzil false qaytargan vaqti forloop yuriwni toxtatadi

// let i = 1
// for (i; i < 10; i = i + 1) {  <-- birga oshirish yoli
//     console.log(i);
// }

// for(i=2;i<20;i=i+2){  <-- ikkiga oshirish yoli
//     console.log(i);
// }

// for (i=1;i<10;i++){   <-- birga oshirish yo'li
//     console.log(i);
// }

// log =1
// for (;;){
//     console.log(i);  <-- cheksiz bir chiqadi
// }

// let sum = 0
// for (i = 1; i < 20; i = i + 1) {
//     console.log(`Sum=${sum}+${i}=${(sum += i)}`)   <--sonni qoshishni korinishi
//     if (sum === 55) break;
// }

// let sum = 0
// for (i = 1; i < 20; i = i + 1) { //<-- ikkinchi hisoblash...|
//     console.log(i);                                    //   | <-- bunda ikki hisoblash ishlamoqda
//     i+=i //<--birnchi hisoblash.............................|
// }

// for (i = 1; i < 20; i = i + 1) {
//     if (i % 2 === 0) console.log(i);  // bunda 2 ga bolganda qoldigi 0 ciqadigan sonlarni chiqarib beradi
// }

// for (i = 1; i < 20; i = i + 1) {
//     if (i % 2 === 0) console.log(`Juft son ${i}`);
//     else console.log(`Toq son ${i}`);

// }     // toq va juft son chiqarish yoli

// for (i = 1; i <= 20; i++) {
//     if (i % 3 === 0) continue;   // 3 ga bo'lganda 0 qoldiq qoladigan sonlarni consoldan ob tashlaydi va continue bor vaqti biz belgilagan qiymatgacha boradi
//     console.log(`${i}`);

// }

// for (i=1;i<10;i=i+1){
//     if(i%3===0)break;     // break da o'sha javobni korgandan kn toxtaydi konsolda yurmaydi javobi hozir 1 bn 2 chiqadi
//     console.log(`${i}`);
// }

// for (i = 10; i >= 1; i = i - 1) {
//     console.log(i);                 // orqaga qaytish usuli yani 10dan 1 gacha
// }

//  Prime number - birga va oziga bolinadigan  sonlar prime number diyiladi !!!!!!!!!

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }
