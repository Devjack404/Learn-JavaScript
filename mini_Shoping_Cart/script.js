// variables in index.html
let lemon = document.querySelector(".lemonSoda");
let sprite = document.querySelector(".sprite");
let orginJuice = document.querySelector(".orginJuice");


//JSON products 
const products = [
  {
    id: 1,
    name: "Lemon Soda",
    price: 4,
    image: "https://i.pinimg.com/736x/b9/b5/8e/b9b58e650966f44bbf652539a07f7bff.jpg"
  },
  {
    id: 2,
    name: "Sprite",
    price: 4,
    image: "https://i.pinimg.com/736x/12/fc/71/12fc71846840d588c1a1f0dac92ef6db.jpg"
  },
  {
    id: 3,
    name: "Orgin Juice",
    price: 4,
    image: "https://i.pinimg.com/736x/8f/50/e5/8f50e58b4e6bb895923a0aa77fdd979d.jpg"
  }
];

const container = document.querySelector('.cart-board')


// cart var 
let cart = [];

//function addItemsCart
function addItemsCart(itemName) {
  cart.push(itemName) 
  console.log(itemName)
}

lemon.addEventListener('click', () => {
  addItemsCart("Lemon Soda");
})

sprite.addEventListener('click', () => {
  addItemsCart("Sprite");
})

orginJuice.addEventListener('click', () => {
 addItemsCart("Orgin Juice");
})


