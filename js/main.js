'use strict';
//탭버튼 액티브
$(function () {
  var tabBtn = $('.category__btn');    //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
  tabBtn.click(function () {   // sBtn에 속해 있는  a 찾아 클릭 하면.
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
$(document).ready(function () {
  $('.purchase_tabs ul li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('.purchase_tabs li').removeClass('active');
    $('.work__projects').removeClass('active');

    $(this).addClass('active');
    $("#" + tab_id).addClass('active');
  });
});
