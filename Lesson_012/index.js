// CRUD
//=======================

// sortByYear

// let students = [
//     { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//     { id: 2, year: 1996, name: "Tilovov Ilhom" },
//     { id: 3, year: 2002, name: "MuhammadImin" },
//     { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//     { id: 5, year: 2002, name: "Akobir" },
//     { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//     { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//     { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
//   ];
// const sortByYear = () => {
//   let res = students.sort((a, b) => a.year - b.year);
//   students = res;
// };
// sortByYear();
// console.log(students);

// let students = [
//     { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//     { id: 2, year: 1996, name: "Tilovov Ilhom" },
//     { id: 3, year: 2002, name: "MuhammadImin" },
//     { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//     { id: 5, year: 2002, name: "Akobir" },
//     { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//     { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//     { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
//   ];
// const sortByYear = () => {
//   let res = students.sort((a, b) => b.year - a.year);
//   students = res;
// };
// sortByYear();
// console.log(students);

//=======================

//sortByAlphabet

// let students = [
//     { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//     { id: 2, year: 1996, name: "Tilovov Ilhom" },
//     { id: 3, year: 2002, name: "MuhammadImin" },
//     { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//     { id: 5, year: 2002, name: "Akobir" },
//     { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//     { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//     { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
//   ];
// const sortByAlphabet = () => {
//   let res = students.sort((a, b) => a.name.localeCompare(b.name));
//   students = res;
// };
// sortByAlphabet()
// console.log(students);

//=======================
// deleteUser

// let students = [
//     { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//     { id: 2, year: 1996, name: "Tilovov Ilhom" },
//     { id: 3, year: 2002, name: "MuhammadImin" },
//     { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//     { id: 5, year: 2002, name: "Akobir" },
//     { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//     { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//     { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
//   ];
// const deleteUser = (id) => {
//   let res = students.filter((value) => value.id !== id);
//   students = res;
// };
// deleteUser(3);
// console.log(students);

//=======================
// addUser

// let students = [
//   { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, year: 1996, name: "Tilovov Ilhom" },
//   { id: 3, year: 2002, name: "MuhammadImin" },
//   { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, year: 2002, name: "Akobir" },
//   { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
// ];

// const addUser = (user) => {
//   students = [...students, { id: students.length + 1, ...user }];
// };
// addUser({ year: 2020, name: "webbrain academy" });
// console.log(students);

//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
//=======================
