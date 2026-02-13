// variables in index.html
let lemon = document.querySelector(".lemonSoda");
let sprite = document.querySelector(".sprite");
let orginJuice = document.querySelector(".orginJuice");

// cart var 
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//function addItemsCart
function addItemsCart(itemName) {
  cart.push(itemName) 
  console.log(itemName)
}

lemon.addEventListener('click', () => {
  addItemsCart("Lemon Soda")
})

sprite.addEventListener('click', () => {
  addItemsCart("Sprite")
})

orginJuice.addEventListener('click', () => {
 addItemsCart("Orgin Juice")
})
