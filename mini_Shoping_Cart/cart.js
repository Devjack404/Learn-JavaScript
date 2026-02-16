let items_display = document.querySelectorAll('.items-display')

//logic for cart 
items_display.forEach(row => {  
  let inc_sign = row.querySelector('.inc-sign');
  let dec_sign = row.querySelector('.dec-sign');
  let remove_btn = row.querySelector('.remove-btn');
  let quantity_display = row.querySelector('.quantity_num');
  let quantity_value = 1;
  let 
  //function update quantity
  function update_quantity(){
    quantity_display.innerHTML = quantity_value;
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
   row.remove();
  })
});
