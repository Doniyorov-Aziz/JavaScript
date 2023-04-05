// JS nima ?
/// JS bu Html va Css da yozilgan malumotlarni harakatga keltirib beradi
/// Js haqida malumot : 1- bo'lib 1995 yilda chiqgan va nomi liveScript bo'lgan
/// Keyinchalik 1997 yilda EcmaScript nomiga o'zgargan

// JS single thredda ishlaydi
// singlethred bu (JS) bir vaqni o'zida faqatgina bitta ekshin bajara olishi

// Variable
/// Variable bu o'zgaruvchi malumotlarni saqlash (saxranit qilish) uchun ishlatamiz
/// Varibale yasash uchun 3 ta keyworddan foydalanimz   yani rezorvid keyword
/// Let Var Const
///  let var const bu variableni declear qilish uchun belgilash uchun kerak bo'ladi
/// rezorvdkeyword bu band qilingan sozlar

// Undefined
// bizda qandaydur o'zgaruvchi bor lekin qiymati bo'lmasa (ichi bo'sh bo'lsa) undefined qaytaradi

// Data type
/// JS da 8 ta data type bor va ular 2 guruxga bo'linadi
/// 1-gurux Primitive  2-gurux Non primitive

// Primitive ga 7ta data type kiradi ular
// Number       // let num = 321
// Bigint       // let bigint = 9007199254740992n  (2ni 53-darajasi)
// String       // let text = "Webbrain"
// Booline      // let boolian = true/false
// Null         //
// Undefined    //
// Symbols       // symbol bizga unik id yasab berishda ishlatiladi

// NonPrimitive ga 1ta data type kiradi
// Objects
// Object bu nonprimitive data typelar reference ga qarab turib malumotni chaqirshga aytiladi  yani bunga array object function kiradi
//objects deganda butun boshli array nazarda tutiladi

// Null objectmas lekin typeofi object chiqadi

// Object
//  object 3 qismga bo'linadi yani ular
/// object array function

// let obj = {};
// let ar = [];
// let func = function () {};

// console.log(typeof(obj));

// !!!!

// Primitive va Nanprimitive ni farqi

// Primitive da call by value
// qachonki primitive malumotlarini chaqiradigan bo'lsak hardoim value chaqiradi

// Nanprimitive da call by referince
// qachonki Nanprimitive malumotlarini chaqiradigan bo'lsak referince qaytaradi yani link

// Primitiveni malumotlarini chaqiradigan bo'lsak valuesi STACK ga borib joylashadi
// NaNprimitiveni malumotlarini chaqiradigan bo'lsak linki (adreess) STACK da bo'ladi uni valuesi (malumoti) HEAP ga borib joylashadi

// console.log da bitta o'zgaruvchini chaqirsak lekin u o'zgarurvchi mavjud bo'lmasa bizga consoleda is not defenid beradi

// let scope
// var global
// const - constanta yani o'zgarmas

// const
// constga bir qiymat berib keyinchalik uni o'zgartirb bo'lmaydi (error beradi) chunki constanta faqat bitta qiymatni oladi
// const text = 1;
// console.log(text);

// text="Webbrain academy"   // <-- error beradi !
// console.log(text);

//  Stringda 3 xil case bor : '' ; " " ; ` ` (oddiy qo'shtrnoq , ikkitalik qo'shtrnoq va bektik)

// let ar = ["Iqboljon", 12, "Dilmurod"]; // <-- malumotni indexga qarab chaqiradi
// let obj = { name: "Webbrain", status: "It centre" }; // <-- key orqlai ifodalanadi

// console.log(ar[0]);
// console.log(obj.name);

// let ar = ["Iqboljon", 12, "Dilmurod"]; 
// let obj = { name: "Webbrain", status: "It centre" }; 
// function test (){
//     console.log(ar[0]);
//     console.log(obj.name);
// }
// test ()