//logic for cart 
let inc_sign = document.querySelector('.inc-sign');
let dec_sign = document.querySelector('.dec-sign');
let quantity_value = 0;

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
  quantity_value--;
  update_quantity();
  console.log(quantity_value);
})
