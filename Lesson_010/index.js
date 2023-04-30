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
