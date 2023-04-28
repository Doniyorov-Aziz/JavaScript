// String | All you need to know about String

// constraktor bizga doim objectni qaytaradi
// 2 ta stringni birbiriga taqqoslash uchun localeCompare() bilan taqqoslaymiz
// localeCompare() bizga -1 , 0 , 1 qaytaradi 
// -1 umuman o'xshamaydi  , 0 100% bir biriga teng , 1 qisman to'g'ri

//===============

// index[] doim 0 dan boshlanadi  va minus qiymat qabul qilmaydi
// charAt() bu index ni chiqarib beradi va minus qiymat qabul qilmaydi
//at() bu indexni chiqarib beradi va minus qiymatam qabul qiladi

// let str1 = "webbrain"
// console.log(str1[3]);             // b
// console.log(str1[-3]);            // undefined
// console.log(str1.at(2));          // b
// console.log(str1.at(-2));         // i
// console.log(str1.charAt(2));      // b
// console.log(str1.charAt(-2));     // bo'sh joy (sababi charAt minus qiymat qabul qilmaydi)

//===============
// String Metods

// length bu stringni uzunligini chiqarib beradi va hattoki bo'sh joyni ham inobatga oladi
// at() bu harfni chiqarib beradi va minus qiyamtniyam qabul qiladi
// toUpperCase() bu harflarni barini katta harfga o'tkazib beradi
// toLowerCase() bu harflarni barini kichkina harfga o'tkazib beradi
// toLocaleUpperCase bu qaysi til bo'yicha so'zni kattartirish va o'zining default holati inglizcha
// toLocaleLowerCase bu qaysi til bo'yicha so'zni kichraytirish va o'zining default holati inglizcha
// indexOf() bu malumotimz bir xil va qisman to'gri bo'ladigan bo'lsa 0 qaytadi , xato bo'lsa -1 , " " stringda bo'sh joy bo'ladigan bo'lsa 8 qayatdi
// lastIndexOf() bu malumotni o'xshashligini oxiridan boshlab qidiradi 
// includes() biz yozgan malumot bor yoki yoqligini qidirb beradu va true va false qaytaradi
// startsWith() malumot haqqatdanam biz yozgan so'zdan boshlanadimi boshlansa true boshlanmasa false
// endsWith  malumot haqqatdanam biz yozgan so'z bilan tugaydimi, tugasa true tugamasa false
// padStart() malumotga boshidan nechta so'z qo'shilishi
// padEnd() malumotga oxiridan nechta so'z qo'shilishi
// slice() bu malumotlarni qirqb olish uchun ishlatiladi , 2 ta qiymat qabul qiladi va pilus minusli qiymatni ham qabul qiladi
// subsstring () bu minusli qiymat qabul qilmaydi , bu ham malumotni qirqb olish uchun ishlatiladi va logika jihatidan to'g'ri kelmaydigan buyruq berilsa o'zi aftomaticski svipe(svayp) qib oladi
// substr ()  // dublicate bo'b ketishi mumkin  va qulaylik jihati hohlagan indexdan boshlab hohlagan indexgacha qirqib olsa bo'ladi
// eval bu string ichidagi arifmetik amallarni bajaradi
// trim() bu malumotlarni boshi va oxirisidagi ortiqcha bo'sh joylarni ignor qivoradi
// trimStart() bowidagi bo'sh joylarni o'chirib tashlaydi
// trimEnd() oxiridagi bo'sh joylarni o'chirib tashlaydi
// split bu malumotlarni arrayga o'tkazib beradi
// concat (concationation) bu 2 ta stringni bir biriga qo'shib beradi va vergil bilan ixtiyory so'zni qo'shib ketsak bo'ladi
// new Stringni faqat gina valeusini olish uchun valueOf() dan foydalanamiz
// replace() bu string ichidagi malumotni o'zgartirmoqchi bo'lsak foydalanamiz va u 2 ta qiymat qabul qiladi 1-si o'zgartirmoqchi bo'lgan qiyamt 2-si yangi qiymat
// for da char of bu har bir elementga birma bir kirsa bo'ladi



