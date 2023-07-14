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

  $('.team__slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 800,
    appendDots: $('.team__dots-list')
  });

  $('.team__slider-prev').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickPrev');
  })
  $('.team__slider-next').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickNext');
  })

  $('.reviews__slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 800,
    appendDots: $('.reviews__dots-list')
  });

  $('.reviews__slider-prev').on('click', function(e){
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev');
  })
  $('.reviews__slider-next').on('click', function(e){
    e.preventDefault()
    $('.reviews__slider').slick('slickNext');
  })

  $('.questions__acc-link').on('click', function(e){
    e.preventDefault()
    if($(this).hasClass('questions__acc-link--active')){
    $(this).removeClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideUp()
    }
    else{
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })

  let center = [55.757188537709844, 37.617801465576164];

  function init() {
    let map = new ymaps.Map('info__map-test', {
      center: center,
      zoom: 12
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }
  ymaps.ready(init);
  
  $(".header__link-logo, .header__nav-list a, .header__geo, .hero__btn, .footer a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1000)
  })

  $('.overlay, .header__link-logo, .header__burger, .header__nav-list a, .header__geo, .header__btn').on('click', function(e){
    e.preventDefault()
    $('.header__inner').toggleClass('header__inner-show')
    $('.header__burger').toggleClass('open__menu')
    $('.overlay').toggleClass('overlay-show')
  })
});