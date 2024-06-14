"use strict";
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = friends.join(",");
// console.log(string);
// let string;
// for (let i = 0; i >= friends.length; i += 1) {
//   string = + friends[i];
// }
// console.log(string);
//2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
//3
const cardToRemove = "Карточка-3";
console.log(cards.indexOf("Карточка-3"));
cards.splice(2, 1);
console.log(cards);
//4
const cardToInsert = "Карточка-6";
cards.splice(5, 0, "Карточка-6");
console.log(cards);
//5
const cardToUpdate = "Карточка-4";
console.log(cards.indexOf("Карточка-4"));
cards.splice(cards.indexOf("Карточка-4"), 1, "new card");
console.log(cards);
