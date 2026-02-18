// variables in index.html
let lemon = document.querySelector(".lemonSoda");
let sprite = document.querySelector(".sprite");
let orginJuice = document.querySelector(".orginJuice");
const buttonsAddCart = document.querySelectorAll('.add-btn')

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


// cart variable 
let cart = JSON.parse(localStorage.getItem('cart')) || [];


//function when click button to add product into the cart
buttonsAddCart.forEach(button => {
  button.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.id);
    const product = products.find(item => item.id === id);

    addItemsCart(product); 
  })  
});

//function addItemsCart
function addItemsCart(product) {
const existing_product = cart.find(item => item.id === product.id)

  if(existing_product){
    existing_product.quantity += 1;
  }
  else{
    cart.push({...product, quantity : 1});
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart)
}



