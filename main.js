// 102 >> 110

// التكليف الاول

// let PromptMsg = prompt("Print Number From – To", "Example: 5-20");
// let num = PromptMsg.split("-").sort((a, b) => a - b);
// for (let i = +num[0]; i <= num[1]; i++){
//     let promptnum = document.createElement("div");
//     promptnum.textContent = i;
//     document.body.append(promptnum);
// }

// ########################################################

// التكليف التاني

// let parent = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// let btn = document.createElement("button");

// function popUp() {
//   h1.textContent = "Welcome";
//   p.textContent = "Welcome To Elzero Web School";
//   btn.textContent = "X";

//   parent.append(h1, p, btn);

//   document.body.append(parent);

//   parent.addEventListener("click", function () {
//     btn.parentElement.remove();
//   });

//   document.body.style.cssText = "font-family : arial , Tahome";
//   parent.style.cssText =
//     "width : 350px; height : 150px; background-color : #eee; padding : 20px; border : 1px solid #ccc; margin : 20px auto; position : relative; text-align : center";
//   btn.style.cssText =
//     "position : absolute; background-color : red; border : none; color : white; font-weight : bold; top : -10px; right : -10px; border-radius : 50%; width : 30px; height : 30px; cursor : pointer; text-align : center;";
// }

// setTimeout(popUp, 5000);

// ########################################################

// التكليف التالت
// let divv = document.querySelector("div");

// let counter = setInterval(countdown, 1000);

// function countdown() {
//   divv.innerHTML -= 1;
//   // التكليف الخامس
//   if (divv.innerHTML === "5") {
//     open("https://elzero.org/", "_blank", "width=400,height=600");
//   } else if (divv.innerHTML === "0") {
//     clearInterval(counter);
//     // التكليف الرابع
//     // location.href ="https://elzero.org/";
//   }
// }

// ########################################################

//  111 >> 114

// التكليف الاول

// let font = document.querySelector("#font");
// let color = document.querySelector("#color");
// let size = document.querySelector("#size");

// font.onchange = function () {
//   window.localStorage.setItem("font", font.value);
//   document.body.style.fontFamily = font.value;
// };
// color.onchange = function () {
//   window.localStorage.setItem("color", color.value);
//   document.body.style.color = color.value;
// };
// size.onchange = function () {
//   window.localStorage.setItem("size", size.value);
//   document.body.style.fontSize = size.value;
// };

// document.body.style.fontFamily = window.localStorage.getItem("font");
// document.body.style.color = window.localStorage.getItem("color");
// document.body.style.fontSize = window.localStorage.getItem("size");

// font.value = window.localStorage.getItem("font");
// color.value = window.localStorage.getItem("color");
// size.value = window.localStorage.getItem("size");

// ########################################################

// التكليف التاني

// let one = document.querySelector("#one");
// let two = document.querySelector("#two");
// let three = document.querySelector("#three");
// let select = document.querySelector("#select");

// one.oninput = function () {
//   window.sessionStorage.setItem("text-1", one.value);
// };
// two.oninput = function () {
//   window.sessionStorage.setItem("text-2", two.value);
// };
// three.oninput = function () {
//   window.sessionStorage.setItem("text-3", three.value);
// };
// select.onchange = function () {
//   window.sessionStorage.setItem("select", select.value);
// };

// one.value = window.sessionStorage.getItem("text-1");
// two.value = window.sessionStorage.getItem("text-2");
// three.value = window.sessionStorage.getItem("text-3");
// select.value = window.sessionStorage.getItem("select");

// ########################################################

// 115 >> 122

// التكليف الاول

// let myNumbers = [1, 2, 3, 4, 5];

// const [a , , , , e] = myNumbers;

// console.log(a * e);

// ########################################################

// التكليف التاني

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// const [a , b , c , [d , e , [f , g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// ########################################################

// التكليف التالت

// let arr1 = ["Ahmed" , "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// const [ , a, b, c] = arr3.concat(arr1);

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// ########################################################

// التكليف الرابع

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, , h3],
// } = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);

// console.log(`I Live in ${c}`);

// console.log(`My Hobbies: ${h1} And ${h3}`);

// ########################################################

// التكليف الخامس

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// const {title : t , developer : d , releases } = game;

// const [o, a] = Object.keys(releases);
// const [[u, j], {US: u_price, JAP: j_price}, or] = Object.values(releases);

// console.log(`My Favourite Games Style Is ${t} Style`);

// console.log(`And I Love ${d} Games`);

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);

// console.log(`Although I Love ${a}`);

// console.log(`${a} Price in USA Is ${u_price}`);

// console.log(`${a} Price in Japan Is ${j_price}`);

// console.log(`Origin Price Is ${or}`);

// ########################################################

// التكليف السادس

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// const [f1, f2, f3] = myFriends;
// let friendDetails = function(friendObj){
//     const {title: t, age: a, available: av, skills:[, s2]} = friendObj;

//     console.log(t);
//     console.log(a);
//     console.log(av ? "available" : "Not Available");
//     console.log(s2);
// }

// if(chosen === 1) friendDetails(f1);
// if(chosen === 2) friendDetails(f2);
// if(chosen === 3) friendDetails(f3);

// ########################################################
