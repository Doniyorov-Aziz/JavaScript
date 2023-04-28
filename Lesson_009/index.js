// let str1 = "1 webbrain 'Academiy'";
// let str2 = '"2 webbrain" Academiy';
// let str3 = `3 webbrain
// ${str1}
//  Academiy`;

// console.log(str3);

//===============

// let str1 = "webbrain";
// let str2 = new String("webbrain");

// console.log(str1 == "webbrain");  // true
// console.log(str2 == "webbrain");  // true
// console.log(str2 === "webbrain"); // false
// console.log(str2); // [String: 'webbrain']

//===============
//localeCompare() 2 ta stringni taqqoslash   (-1;0;1)

// let str1 = "webbrain";
// let str2 = new String("webbrain");

// console.log(str1.localeCompare(str2));

//===============

// let str1 = "webbrain"
// console.log(str1[3]);             // b
// console.log(str1[-3]);            // undefined
// console.log(str1.at(2));          // b
// console.log(str1.at(-2));         // i
// console.log(str1.charAt(2));      // b
// console.log(str1.charAt(-2));     // bo'sh joy (sababi charAt minus qiymat qabul qilmaydi)

//===============
// length

// let str = "webbrain"
// console.log(str.length); // 8

// let str = "webbrain academy"
// console.log(str.length);  // 16   // bo'sh joyniyam inobatga oladi

//===============
// at

// let str = "webbrain"
// console.log(str.at(0));   // w
// console.log(str.at(-1));  // n

//===============
// toUpperCase

// let str = "webbrain"
// console.log(str.toUpperCase());  // WEBBRAIN

// let str = "webbrain"
// console.log(`${str}`.toUpperCase());

// `${ }` bu malumotni hardoim stringda deb qabul qilishi uchun shu ko'rinishda yozamiz

//===============
// toLowerCase

// let str = "WEBbrain"             // webbrain
// console.log(str.toLowerCase());

// let str = "WEBbraiN1231"             // webbrain1231
// console.log(`${str}`.toLowerCase());

//===============
// toLocaleLowerCase bu qaysi til bo'yicha so'zni kichraytirish va o'zining default holati inglizcha

// let str= "WebbrAin"
// console.log(str.toLocaleLowerCase());

//===============
// toLocaleUpperCase bu qaysi til bo'yicha so'zni kattartirish va o'zining default holati inglizcha

// let str= "WebbrAin"
// console.log(str.toLocaleUpperCase());

//===============
// indexOf

// let str = "webbrain academy"
// console.log(str.indexOf("webbr")); // 0

// let str = "webbrain academy"
// console.log(str.indexOf("webbrain academy")); // 0

// let str = "webbrain academy"
// console.log(str.indexOf("webkasdnai"));  // -1

// let str = "webbrain academy"
// console.log(str.indexOf(" "));  // 8   // sababi stringni ichida bo'sh joy bor

// let str = "webbrain academy"
// console.log(str.indexOf("bb")); // 2  // sababi 2- indexdan bowlab bb bor

// let str = "webbrain academy";
// console.log(str.indexOf("bb", 5));  // -1   // yani xato 5- indexdan boshlab bb harf qatnashganmi deb sorepti yo'q bo'lgani uchun -1 qaytaradi
// ikkinchi parametr nechinchi indexdan boshlab qidirish kerakligini ko'rsatadi

//===============
// lastIndeexOf

// let str = "webbrain acadebbmy";
// console.log(str.indexOf("bb"));       // 2
// console.log(str.lastIndexOf("bb"));   // 14

//===============
// includes

// let str = "webbrain academy"
// console.log(str.includes("in"));

//===============
// startsWith

// let str = "webbrain academy"
// console.log(str.startsWith("in"));

//===============
// endsWith

// let str = "webbrain academy"
// console.log(str.endsWith("in"));  // false

// let str2 = "webbrain academy"
// console.log(str2.endsWith("emy")); // true

//===============
//padStart

// let str = "webbrain academy"
// console.log(str.padStart(24,"."));

//===============
//padEnd

// let str = "webbrain academy"
// console.log(str.padEnd(24,"."));

//===============
// slice

// let str = "webbrain academy"
// console.log(str.slice(3,6)); // bra

// let str = "webbrain academy"
// console.log(str.slice(0,-2)); // webbrain acade

//===============
// substring

// let str = "webbrain it academy";
// console.log(str.substring(0, 3)); // web

// let str = "webbrain it academy";
// console.log(str.substring(3, 0));  // logica jihatdan to'g'ri kelmaydigan buyruq berilgan va ozi svipe(svayp) qilib olgan

//===============
// substr       // dublicate bo'b ketishi mumkin  va qulaylik jihati hohlagan indexdan boshlab hohlagan indexgacha qirqib olsa bo'ladi

// let str = "webbrain it academy";
// console.log(str.substr(3, 3));  // bra

// let str = "webbrain it academy";
// console.log(str.substr(6, 12));  // in it academ

//===============
// eval  bu string ichidagi arifmetik amallarni bajaradi

// console.log(eval(2 * 3 + 5 / 5));  // 7
// console.log(eval(((125 / 5) * 10) / 5 + 20)); // 70

//===============
// trim

// let str = "    webbrain academy   "
// console.log(str);          //     webbrain academy
// console.log(str.trim());  // webbrain academy

//===============
// split

// let str = "webbrain academy"
// console.log(str.split(" "));   // 'webbrain' , 'academy' // bo'sh joy bolsa alohida elementga o'tkazib beradi

// let str = "webbrain academy"
// console.log(str.split(""));   // 'w', 'e', 'b', 'b', 'r', 'a' ,'i', 'n', 'a', 'c', 'a', 'd', 'e', 'm', 'y' // bo'sh joy bo'lmasa har bir harfini stringga o'tkazib beradi

// let str = "webbrain academy"
// console.log(str.split("a")); // 'webbr', 'in ', 'c','demy'   //  agar a harfini ko'rganda desak a harfi bor indexni alohida elementga o'tkazib beradi

//===============
// concat (concationation)

// let str = "webbrain"
// console.log(str.concat(" academy"));

// let str = "webbrain"
// console.log(str.concat(" academy" , " It" , " center"));

//===============
// valeuOf  // new stringni valuesini olish

// console.log(new String("webbrain").valueOf());

//===============
// replace

// let str = "web brain academy"
// console.log(str.replace("web","Web"));

// let str = "web brain web academy";
// console.log(str.replace(/Web/i, "WEB"));  

// let str = "web brain web academy"
// console.log(str.replace(/Web/gi,"WEB"));  
