const option = document.querySelector('.optional_title');
const optionDiv = document.querySelector('.optional');
const optionInput = document.querySelector('.optional_title input')


option.addEventListener('click', function(){
    console.log("optio  nDiv.style.display", optionDiv.style.display);
    var condition = (optionDiv.style.display === 'none') || (optionDiv.style.display === '')

    if(condition){
        console.log("in if true", optionInput);
        optionInput.checked = true;
        optionDiv.style.display='block';
    }else{
        console.log("in else", optionInput);
        optionInput.checked = false;
        optionDiv.style.display='none';
    }
   
});