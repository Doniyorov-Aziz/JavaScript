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

