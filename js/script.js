const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.arrows__item--next',
    prevEl: '.arrows__item--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },

  simulateTouch: true,
  grabCursor: true,

  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: ".swiper-slide"
  // },

  slidesPerView: "auto",

  watchOverflow: true,

  slidesPerGroup: 2,

  speed: 600,

  noSwiping: true,


  breakpoints: {
    320: {
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerGroup: 2,
    }
  },

});

//set cookie

const cookies_box = document.getElementById('cookies_box'),
cookies_button = document.getElementById('cookies_button');

cookies_button.addEventListener('click',function(){
  document.cookie = "CookieBy=InventionTricks; expires="+ new Date(2023, 0, 1).toUTCString();
  document.cookie = "Name=John; max-age="+60*60*24*30;
  document.cookie = "LastName=Deo; max-age="+60*60*24*30;

  if(document.cookie){
    cookies_box.classList.add('hide');
  }
})

function getCookieName(name){
  var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
  return r ? r[1]:'';
}

var getCookieName = getCookieName('CookieBy');

if(getCookieName == 'InventionTricks') {
  cookies_box.classList.add('hide');
}
