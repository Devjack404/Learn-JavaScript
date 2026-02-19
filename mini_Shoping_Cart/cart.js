//variable for save items-display 
let cartBody = document.getElementById('cart-body');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartBody.innerHTML = "";

  cart.forEach(item => {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>
      <div class="product-info">
        <img src="${item.image}" style="width: 100px;">
        <div>
          <h3>${item.name}</h3>
        </div>
      </div>
    </td>
    <td class="price">$${item.price}</td>
      <td>
        <div class="quantity-control">
          <button class="dec-sign">-</button>
          <span class="quantity_num">${item.quantity}</span>
          <button class="inc-sign">+</button>
        </div>
      </td>
      <td class="total">$${item.price * item.quantity}</td>
      <td><button class="remove-btn">&times;</button></td>
    `;

    //logic for cart 
    let inc_sign = row.querySelector('.inc-sign');
    let dec_sign = row.querySelector('.dec-sign');
    let remove_btn = row.querySelector('.remove-btn');
    let quantity_display = row.querySelector('.quantity_num');
    let quantity_value = 1;

    //function update quantity
    function update_quantity(){
      quantity_display.innerHTML = quantity_value;
    }
    
    //function to increas value +1
    inc_sign.addEventListener('click', ()=> {
      quantity_value++;
      update_quantity();
      console.log(quantity_value);
    })
    
    //function to decreas value -1
    dec_sign.addEventListener('click', ()=> {
      if(quantity_value > 1){
        quantity_value--;
      }
      update_quantity();
      console.log(quantity_value);
    })
     
    //function to delete items in cart
    remove_btn.addEventListener('click', ()=> {
     row.remove();
    });
    
    cartBody.appendChild(row);
  });
}

function updateCary() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();
