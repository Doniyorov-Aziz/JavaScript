// 1

// const user = {
//   name: "John",
//   surname: "Smith",
// };
// user.name="Pete"
// delete user.name
// console.log(user);

// 2 -> obj bo'sh bolsa true chiqsin bo'sh bolmasa false chiqsin

// let obj = {}
// function isEmpty(obj){
//     let num=Object.keys(obj)
//     if(num[0])console.log(false);
//     else console.log(true);
// }
// isEmpty(obj)

// 3 -> sonni eng kattasinin topish kerak

// let obj = {
//     John: parseInt((Math.random() * 1000)),
//     Anna: parseInt((Math.random() * 1000)),
//     Lusi: parseInt((Math.random() * 1000)),
// }
// let res = 0
// if(res<obj.John) res=obj.John;
// if(res<obj.Anna) res=obj.Anna;
// if(res<obj.Lusi) res=obj.Lusi;
// console.log(obj);
// console.log(res);

// 4

// let menu = {
//     width:250,
//     height:250,
//     title:"my job"
// }
// for(i in menu){
//     if(typeof menu[i]=="number"){
//         menu[i]*=2
//     }
// }
// console.log(menu);