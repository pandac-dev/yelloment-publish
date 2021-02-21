const accodion = document.querySelector('.list_button_p button')
const productList = document.querySelector('.product_list')


accodion.addEventListener('click',function(){
  productList.classList.toggle('open')
})