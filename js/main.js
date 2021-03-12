'use strict';
//글자애니메이션 splitting 데모사이트 그대로 작성 따라하기
// $(function(){
//   Splitting();
// });
//스크롤 반응하는 네비게이션 만들기
const navbar = document.querySelector('#navbar');
const navbarHeight =navbar.getBoundingClientRect().height;
document.addEventListener('scroll', function(){
if(window.scrollY > navbarHeight){
  navbar.classList.add('navbar--dark')
}
else{
  navbar.classList.remove('navbar--dark')
}
});

//핸들 스크롤링



//컨텍트버튼

// const homeContactBtn = document.querySelector('.home__contact');
// homeContactBtn.addEventListener('click',() =>{
//   scrollIntoView('#contact')
// });

//스크롤에 따라 바뀌는 것
// const home = document.querySelector('#div1');
// const homeHeight = home.getBoundingClientRect().height;
// const homeHeightFinal = homeHeight - 300;
// const about = document.querySelector('#about');
// const aboutHeight = about.getBoundingClientRect().height;
// const aboutHeightFinal = aboutHeight + homeHeightFinal + 1500;
// document.addEventListener('scroll', () =>{
//   home.style.opacity = 1 - window.scrollY / homeHeightFinal;
  // about.style.opacity = 1 - window.scrollY / aboutHeightFinal;
// });
//네비 액티브
$(function(){
  var sBtn = $('.navbar__menu > li');    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  sBtn.click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
   sBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
   $(this).addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
  })
 });

 //탭버튼 액티브
 $(function(){
  var tabBtn = $('.category__btn');    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  tabBtn.click(function(){   // sBtn에 속해 있는  a 찾아 클릭 하면.
   tabBtn.removeClass("active");     // sBtn 속에 (active) 클래스를 삭제 한다.
   $(this).addClass("active"); // 클릭한 a에 (active)클래스를 넣는다.
  })
 });



// 탭
$(document).ready(function(){

  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('active');
      $('.work__projects').removeClass('active');
  
      $(this).addClass('active');
      $("#"+tab_id).addClass('active');
  });
  
  });

  //설문조사 탭
  $(document).ready(function(){

    $('.purchase_tabs ul li').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('.purchase_tabs li').removeClass('active');
        $('.work__projects').removeClass('active');
    
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });
    
    });
  

// const toggleBtn = document.querySelector('.navbar__toggle');
// const menu = document.querySelector('.navbar__menu');
// const bodyBtn = document.querySelector('body');
// toggleBtn.addEventListener('click', () =>{
// toggleBtn.classList.toggle('open'); 
// menu.classList.toggle('active');
// });

const toggleBtn = document.querySelector(".navbar__toggle");
const modal = document.querySelector(".navbar__menu");
const navHeight = document.querySelector("#navbar")
//const close = document.getElementsByClassName("close");

toggleBtn.addEventListener('click', function(){
  modal.classList.toggle('active');
  toggleBtn.classList.toggle('open'); 
  // modal.style.visibility = "visible";
  // modal.style.opacity = 1;
});
//  = function(){
//   modal.style.visibility = "visible";
//   modal.style.opacity = 1;
// }
// close.onClick = function(){
//   modal.style.visibility = "hidden";
//   modal.style.opacity = 0;
// }

// window.onclick = function(e){
//   if(e.target == modal){
//     modal.classList.remove('active');
//     toggleBtn.classList.remove('open'); 
//   }
// }

//스크롤 애니메이션
$(function(){
  $('.animate').scroll({
  // default
  mobile: true, // disable animation on mobiles
  once: false, // only once animation play on scroll
  animateCssVersion: 4 // used animate.css version (3 or 4)
  });
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
};

//.top-visual 이미지 슬라이드
$(function(){
    $('.visual .slide').slick({
        infinite: true,
        arrows:false,//화살표
        dots:true,//인디케이터
        autoplay:false,//자동재생
        fade:false,//페이드인 효과
        autoplaySpeed:7000,//재생시간
        pauseOnHover:false,//호버시 멈춤 해제
        pauseOnFocus:false 
        
    });
});
