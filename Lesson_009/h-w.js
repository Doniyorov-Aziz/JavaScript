// #1 check degan funksiya tuzilsin ikkita stringni taqqoslaganda bir biriga mos bo'lsin qisman to'g'ri bo'lsin va xato malumot kiritilgan bo'lsin

// let str1="webbrain academy"
// let str2="webbrain"
// function check(str1,str2){
//     if(str1==str2)console.log("100% bir biriga mos");
//     else if(str1.includes(str2))console.log("qisman to'g'ri");
//     else console.log("xato");
// }
// check(str1,str2)

//=============
// #2 stringni ichida yozilgan malumotlarni harbir harfi nechta qatnashganligini topish kerak

// let str = "Doniyorov Azizbek";
// let res = {};
// function getCount(text) {
//   for (i of text) {
//     res[i] ? (res[i] = res[i] + 1) : (res[i] = 1);
//   }
//   console.log(res);
// }
// getCount(str)

//=============
// #3 funksiya tuzilsin va n ta harfni ajratib bersin

// function truncate(str, n) {
//   let res = str.slice(0, n);
//   console.log(res);
// }
// truncate("webbrain academy",12)

//=============
// #4 funksiya tuzilsin va ichidagi harbir harf , character , numberlarni chiqarib bersin

let obj = { num: 0, str: 0, char: 0 };
function res(str) {
  for (key of str) {
    if (isNaN(key) && key.toUpperCase() === key) {
      ++obj.char;
    } else if (!isNaN(key)) {
      ++obj.num;
    } else if (typeof key === "string") {
      ++obj.str;
    }
  }
}
res("web@brain!aca123421demy,");
console.log(obj);
