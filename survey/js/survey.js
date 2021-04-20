const healthBtn = document.querySelectorAll(".health_div");
const healthLabel = document.querySelectorAll(".health_check input")
const healthImgAll = document.querySelectorAll(".health_img")
const disagreeDiv = document.querySelector(".none_check");
const disagree = document.querySelector(".none_check input");

function clickBtnHandler(){
    const healthImg = this.querySelector(".health_div img");
    const healthTxt = this.querySelector("input");
    disagree.checked = false;

    if(healthImg.classList.contains('open')){
        healthImg.classList.remove('open');
        healthTxt.checked = false;
    }else{
        healthImg.classList.add("open");
        healthTxt.checked = true;
    }
}

    for(let i = 0; i < healthBtn.length; i++){
        healthBtn[i].addEventListener('click', clickBtnHandler);
    }


function clickLabelHandler(){
    const healthParent = this.parentNode.previousElementSibling;
    disagree.checked = false;
    
    if(healthParent.classList.contains('open')){
        healthParent.classList.remove('open');
    }else{
        healthParent.classList.add('open');
    }
}

    for(let i = 0; i < healthLabel.length; i++){
        healthLabel[i].addEventListener('click', clickLabelHandler);
    }

disagreeDiv.addEventListener('click',function(){
    disagree.checked =true;
    console.log(disagreeDiv);
    const healthImgs = document.querySelectorAll(".health_div img");
    const healthTxts = document.querySelectorAll("input");
    for (var i = 0; i<healthImgs.length; i++) {
        var healthImg = healthImgs[i]
        var healthTxt = healthTxts[i]
        if(healthImg.classList.contains('open')){
            healthImg.classList.remove('open');
            healthTxt.checked = false;
        }
    }
});



