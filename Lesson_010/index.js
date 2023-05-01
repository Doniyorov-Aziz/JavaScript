// let ar = [
//   2,
//   31,
//   6332,
//   "webbrain",
//   "academy",
//   false,
//   true,
//   undefined,
//   null,
//   function test() {
//     name: "aziz";
//   },
// ];
// console.log(ar);

// ===============

// let ar = [
//   2,
//   31,
//   6332,
//   "webbrain",
//   "academy",
//   false,
//   true,
//   undefined,
//   null,
//   function test() {},
// ];
// console.log(ar);
// console.log(ar.length);           // 10
// console.log(ar[ar.length - 1]);   // function: test
// console.log(ar[ar.length - 2]);   // null
// console.log(ar[0]);               // 2

// ===============

// let ar = new Array ()
// console.log(ar);          // []
// console.log(ar.length);   // 0

// let ar = new Array (5)
// console.log(ar);         // [ <5 empty items> ]
// console.log(ar.length);  // 5

// let ar = new Array(2, 1);
// console.log(ar);           // [ 2 , 1]
// console.log(ar.length);    // 2

// let ar = new Array("5");
// console.log(ar);          // [ '5' ]
// console.log(ar.length);   // 1

// let ar = new Array("2", "1");
// console.log(ar);             // [ '2' , '1' ]
// console.log(ar.length);      // 2

// ===============

// let ar = []
// console.log(ar);         // []
// console.log(ar.length);  // 0

// let ar = [];
// ar[0] = 1;
// console.log(ar);        // [1]
// console.log(ar.length); // 1

// let ar = [];
// ar[1] = 1;
// console.log(ar);         // [ <1 empty items> , 1]
// console.log(ar.length);  // 2

// let ar = [];
// ar[100] = 1;
// console.log(ar);         // [ <100 empty items> , 1]
// console.log(ar.length);  // 101

// let ar = [];
// ar[4] = 1;
// console.log(ar);           // [ <4 empty items>, 1]
// console.log(ar.length);    // 5

// =================

// let ar = [1, 2, 3, 4];
// ar[1] = 1;
// console.log(ar);    // [ 1 , 1 , 3 , 4]

// =================

// let ar1 = [1, 2, 3, 4, 5];
// console.log(ar1.toString()); // 1,2,3,4,5
// console.log(ar1.join(""));   // 12345

// let ar1 = [1, 2, 3, 4, 5];
// console.log(ar1.toString()); // 1,2,3,4,5
// console.log(ar1.join(" "));  // 1 2 3 4 5

// let ar1 = [1, 2, 3, 4, 5];
// console.log(ar1.toString()); // 1,2,3,4,5
// console.log(ar1.join(","));  // 1,2,3,4,5

// let ar1 = [1, 2, 3, 4, 5];
// console.log(ar1.toString()); // 1,2,3,4,5
// console.log(ar1.join("/"));  // 1/2/3/4/5

// =================
// concat()

// let ar1 = [1, 2, 3, 4];
// let ar2 = [5, 6, 7];
// console.log(ar1.concat(ar2));

// =================

// console.log(Array.isArray());   // false
// console.log(Array.isArray(0));  // false
// console.log(Array.isArray([])); // true

// =================

// let ar = [];
// console.log(ar == 0);   // true
// console.log(ar == "0"); // false

// =================

// let user = ["Abdulloh", "Bunyod", "Azizbek", "Sardor"];
// console.log(user[0]);
// console.log(user[1]);
// console.log(user[2]);
// console.log(user[3]);

// =================

// let user = ["Abdulloh", "Bunyod", "Azizbek", "Sardor"];
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

// =================

// let user = ["Abdulloh", "Bunyod", "Azizbek", "Sardor", "Webbrain"];
// for (let i = 0; i < user.length; i += 2) {
//   console.log(user[i]);
// }   // Abdulloh , Azizbek , Webbrain

// =================

// let user = ["Abdulloh", "Bunyod", "Azizbek", "Sardor", "Webbrain"];
// for (let i = 1; i < user.length; i += 2) {
//   console.log(user[i]);
// }   // Bunyod , Sardor

// =================
// for of bundan bizga faqatgina value keladi

// let user = ["Abdulloh", "Bunyod", "Azizbek", "Sardor", "Webbrain"];
// for (value of user){
//     console.log(value);
// }

// =================
// for in bundan bizga faqat index keladi yani nechtaligi

// let user = ["Abdulloh", "Bunyod", "Azizbek", "Sardor", "Webbrain"];
// for (index in user){
//     console.log(index);
// }

// =================
// push()  // array oxiridan yangi malumot qo'shish

// let ar = [1,2,3,4]
// ar.push(5)

// console.log(ar);   // 1,2,3,4,5

// let ar = [1, 2, 3, 4];
// ar.push(5);
// ar.push(6);

// console.log(ar); // 1,2,3,4,5,6

// let ar =[1,2,3,4]
// ar.push([5,6,7])

// console.log(ar); // 1,2,3,4, [ 5, 6, 7 ]

// =================
// pop()   // bu array ni eng oxirida turgan qiymatini o'chirib yuboradi

// let ar = [1,2,3,4,5,6]
// ar.pop()
// console.log(ar);  // 1,2,3,4,5

// let ar = [1,2,3,4,5,6]
// ar.push(7, 8);
// ar.pop()
// console.log(ar);  // 1,2,3,4,5,6,7

// =================
// unshift() bu array bowidan malumot qo'shadi

// let ar = [1,2,3,4]
// ar.unshift(0)
// console.log(ar);    // [ 0,1,2,3,4 ]

// =================
// unshift() bu array bowidan malumot o'chiradi

// let ar = [1,2,3,4]
// ar.shift()
// console.log(ar);    // [ 2,3,4 ]

// =================
// splice() bu arrayga yangi malumot qo'shadi , yangi malumot biriktiradi va ichidagi malumotni o'chiradi

// let ar = [1, 2, 3, 4, 5];
// ar.splice(0, 2);

// console.log(ar); // 3,4,5   // malumot qirqish

// let ar = [1, 2, 3, 4];
// ar.splice(0, 1, "webbrain academy");

// console.log(ar); // [ "webbrain academy" ,2,3,4]  // malumot qirqib va yangi malumot qo'shish

// let ar = [1, 2, 4, 5];
// ar.splice(2, 0, 3);

// console.log(ar); // [ 1,2,3,4,5]  malumot qo'shish

// =================
// indexOf() bu arrayni ichida malumot bor bo'lsa indexini chiqarib beradi yo'q bo'lsa -1 chiqaradi

// let ar = [1, 2, 3, 4];

// console.log(ar.indexOf(1));   // 0 - indexda 1 bor

// let ar1=[2,3,4,5]

// console.log(ar1.indexOf(1));   // -1 chunki 1 degan qiymat yo'q

// let ar1 = [2, 3, 4, 5, 2];

// console.log(ar1.indexOf(2, 2));  // 4  bunda 4-indexda ham 2 bor degani (2- bergan parametirimz qayerdan boshlash kerak ekanligini bildiradi)

// =================
// lastIndexOf() bu array ichidan eng oxiridan boshlab indexini chiqarib beradi

// let ar = [1, 2, 3, 4, 1];

// console.log(ar.indexOf(1)); // 0
// console.log(ar.lastIndexOf(1)); // 4 (sababi lastindexof oxiridan boshlab chiqaradi)

// =================
// split() bu stringni arrayga o'tkazadi

// let ar = "1,23,4,5"

// console.log(ar.split()); // [ '1,23,4,5' ]

// let ar = "1,23,4,5"

// console.log(ar.split(""));  // bunda harbir sonni va hattoki vergulniyam arrayga o'tkazadi

// let ar = "1,23,4,5"

// console.log(ar.split(",")); // bunda vergul ko'rishi bilan shungacha bo'lgan malumotni arrayga o'tkazadi

// =================
// reverse() bu malumotni teskarisiga chiqarib beradi

// let ar = [1, 2, 3, 4];
// ar.reverse();

// console.log(ar); // 4,3,2,1

// =================
// includes() bu biz qidirgan malumot bor bo'lsa true yo'q bo'lsa false qaytaradi
