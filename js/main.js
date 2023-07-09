$(function(){
  $('.hero__cross').on('click', function(e){
    e.preventDefault()
    $('.hero__block-bottom').addClass('hero__block-bottom--hidden')
  })

  $('.problem__block-2').hide();

  $('.problem__btn').on('click',function(e){
    e.preventDefault()
    $('.problem__block-1').hide();
    $('.problem__block-2').show();
  })

  $('.problem__link').on('click',function(e){
    e.preventDefault()
    $('.problem__block-1').show();
    $('.problem__block-2').hide();
  })
});