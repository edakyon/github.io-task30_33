$(function(){

  // drawer
  $('.drawer').drawer();
  $('.drawer-menu li').on('click', function() {
    $('.drawer').drawer('close');
  });

  // swiper
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    slidesPerView:'auto',
    loop: true,
    loopedSlides: 6,
  });

  // アコーディオン
  jQuery('.qa-question').on("click",function(){
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-icon').toggleClass('is-open');
  });

  // トップへ戻るボタン
  jQuery(window).on("scroll",function(){

    if (100 < jQuery(this).scrollTop()){
      jQuery(".to-top").addClass("is-show");} else {
        jQuery(".to-top").removeClass("is-show");
      }
  });

  // スムーススクロール
  jQuery('a[href^="#"]').on('click',function(){

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    
    if (id !='#'){
      position = jQuery(id).offset().top - header;  
    }
    jQuery('html,body').animate({
      scrollTop:position
    },
    300);
  });

  // wow.js
  new WOW().init();

  // google form
  let $form = $('#js-form')
  $form.submit(function(e){
    $.ajax({
      url:$form.attr('action'),
      data:$form.serialize(),
      type:"POST",
      dataType:"xml",
      statusCode:{
        0:function(){
          $form.slideUp()
          $('#js-success').slideDown()
        },
        200:function(){
          $form.slideUp()
          $('#js-error').slideDown()
        }
      }
    });

    return false;
  });
  
  // formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input').on('change',function(){
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[name="entry.465359855"]').prop('checked') === true
    ){
      $submit.prop('disabled',false)
      $submit.addClass('-active')
    } else{
      $submit.prop('disabled',true)
      $submit.removeClass('-active')
    }
  })
});
