'use strict';
const select = document.querySelector('.shipping_select')
const option = document.querySelectorAll('.shipping_select option');
const shippingInput = document.querySelector('.shipping_input');


select.addEventListener('change',function(){
    const directInputElem = document.querySelector('.direct_input');
    if (select.value === directInputElem.value) {
        console.log("hi")
    }
});


// const selectElems = document.querySelectorAll(".shipping_select")

// document.addEventListener("DOMContentLoaded", function() {
//     for (var i=0; i<selectElems.length; i++) {
//         console.log("selectElems[i]", selectElems[i])
//     }
// })
