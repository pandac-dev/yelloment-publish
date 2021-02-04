const cardButton = document.querySelector('.card');
const cardOpen = document.querySelector('.card_enrollment');
const cardInput = document.querySelector('.cardinput')



cardButton.addEventListener('click',function(){
    cardInput.setAttribute('checked', true);
if(cardOpen.classList.contains('open')){
    cardOpen.classList.remove('open');
}else{
    cardOpen.classList.add('open');
}
});

// $('.card').click(function(e) {
//     e.preventDefault();

//     if($('.card_enrollment').hasClass('open')) {
//         $('.card_enrollment').removeClass('open');
//     } else {
//         $('.card_enrollment').addClass('open');
//     }
// });
