//logic for cart 
let inc_sign = document.querySelector('.inc-sign');
let dec_sign = document.querySelector('.dec-sign');
let remove_btn = document.querySelector('.remove-btn')
let quantity_value = 0;
let items_display = document.querySelectorAll('.items-display')
//function update quantity
function update_quantity(){
  document.querySelector('.quantity_num').innerHTML = quantity_value;
}

//
inc_sign.addEventListener('click', ()=> {
  quantity_value++;
  update_quantity();
  console.log(quantity_value);
})

dec_sign.addEventListener('click', ()=> {
  if(quantity_value > 1){
    quantity_value--;
  }
  update_quantity();
  console.log(quantity_value);
})


//function to delete items in cart
remove_btn.addEventListener('click', ()=> {
 items_display.remove();
})
