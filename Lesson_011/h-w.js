// let ar = "Azizbek";
// let res = ar.split("").reverse().join("");
// console.log(res);

//===========================
// array ichidagi sonlarni yig'indisini topish

//  console.log(eval([1,2,3,4,5].join("+")));  // 1-usul

// let ar = [1, 2, 3, 4, 5, 6, 7];
// let res = eval(ar.join("+"))
// console.log(res);    // 28              // 2-usul

//===========================
// ichma ich kelgan arraylarni yig'indisini topish usuli

// let num = [1, 2, [3, [4, 5, [6, [7, 8, [9]]]]]];
// let res = num.flat(Infinity).reduce((s, c) => s + c, 0);
// console.log(res);  // 45

// let ar = [1, [2, 3, [4, 5, [6, [7, 8, [9, [10]]]]]]];
// let res = ar.flat(Infinity).reduce((s, c) => s + c, 0);
// console.log(res); // 55

//===========================
// arrayni ichida bir xil bo'lgan sonlarni chiqarib tashlash

// let ar = [1, 2, 2, 3, 4, 5, 1, 6, 7, 8, 9, 8];
// let res = ar.filter((value, index, array) => array.indexOf(value) === index);
// console.log(res); // 1,2,3,4,5,6,7,8,9
