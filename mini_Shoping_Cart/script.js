let lemon = document.querySelector(".lemonSoda");
let sprite = document.querySelector(".sprite");
let orginJuice = document.querySelector(".orginJuice");

let addItems = [""];

lemon.addEventListener('click', () => {
  lemon = ["lemon"];
  addItems += lemon;
  console.log(addItems);
})

sprite.addEventListener('click', () => {
  sprite = ["sprite"];
  addItems += sprite;
  console.log(addItems);
})

orginJuice.addEventListener('click', () => {
  orginJuice = ["juice"];
  addItems += orginJuice;
  console.log(addItems);
})
