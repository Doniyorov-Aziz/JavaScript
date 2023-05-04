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

// updateUser

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

// const updateUser = (data) => {
//   let res = students.map((value) =>
//     value.id === data.id ? { ...value, [data.type]: data.value } : value
//   );
//   students = res;
// };
// updateUser({ id: 3, type: "year", value: 2005 });
// updateUser({ id: 3, type: "name", value: "Sardor Shuxratov" });
// console.log(students);

//=======================

//filter

// let students = [
//   { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, year: 1996, name: "Tilovov Ilhom" },
//   { id: 3, year: 2002, name: "MuhammadImin" },
//   { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, year: 2002, name: "Nematov Shaxboz" },
//   { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
// ];

// const getFilter = (key) => {
//   let res = students.filter((value) =>
//     value.name.toLowerCase().includes(key.toLowerCase())
//   );
//   students = res;
// };
// getFilter("shaxboz");
// console.log(students);

//=======================

// id ga nisbatan filter qilish

// let students = [
//   { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, year: 1996, name: "Tilovov Ilhom" },
//   { id: 3, year: 2002, name: "MuhammadImin" },
//   { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, year: 2002, name: "Nematov Shaxboz" },
//   { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
// ];

// const getFilterId = (key) => {
//   let res = students.filter((value) => value.id === key);
//   students = res;
// };
// getFilterId(4)
// console.log(students);

//=======================

// let students = [
//   { id: 1, year: 2002, name: "Doniyorov Azizbek" },
//   { id: 2, year: 1996, name: "Tilovov Ilhom" },
//   { id: 3, year: 2002, name: "MuhammadImin" },
//   { id: 4, year: 2005, name: "Abdulahad Turg'unaliyev" },
//   { id: 5, year: 2002, name: "Nematov Shaxboz" },
//   { id: 6, year: 2002, name: "Xabibullaev Dilmurod" },
//   { id: 7, year: 2005, name: "Doniyorov Lazizbek" },
//   { id: 8, year: 2007, name: "Doniyorov Ozodbek" },
// ];

// const getFilter = ({key, value}) => {
//   let res = students.filter((usr) =>
//     `${usr[key]}`.toLowerCase().includes(`${value}`.toLowerCase())
//   );
//   students = res;
// };
// // getFilter({ value: 3, key: "id" });
// getFilter({ value: "ilhom", key: "name" });
// console.log(students);

//=======================
