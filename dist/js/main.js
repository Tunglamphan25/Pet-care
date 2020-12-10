//**======== 1, Responsive Menu ============== *//
var toggleMenu = document.querySelector(".header__info-button");
var topNav = document.querySelector(".header__info-menu");
var toggleClose = document.querySelector(".header__info-close");
var topList = document.querySelectorAll(".list");
var topBackDrop = document.querySelector(".menu-backdrop");
toggleMenu.addEventListener("click", function () {
  topNav.classList.add("active");
  toggleClose.classList.add("show");
  topBackDrop.classList.add("backdrop");
})
toggleClose.addEventListener("click", function () {
  topNav.classList.remove("active");
  this.classList.remove("show");
  topBackDrop.classList.remove("backdrop");
})

topBackDrop.addEventListener("click", function () {
  topNav.classList.remove("active");
  this.classList.remove("backdrop");
  toggleClose.classList.remove("show");
})
topList.forEach(function(i){
i.addEventListener('click', function(){
  this.querySelector(".menu-item__list").classList.toggle("show");
  $(".list").not(this).querySelector(".menu-item__list").removeClass("show");
  
})
});
/* ============ 2, Sticky Menu ========== */ 
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    document.querySelector(".header").classList.add("record");
  } else {
    document.querySelector(".header").classList.remove("record");
  }
}
/* ============ 3, Owl Carousel ========== */ 
$('.banner__content').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.feedback-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText    : ['<span class="fal fa-chevron-left"</span>', '<span class="fal fa-chevron-right"</span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//**================== 4, Back to top ==================== **//
// Show or hide the sticky footer button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
// 5, Number auto run
const counters = document.querySelectorAll(".counters");
console.log(counters);
const speed = 30; 

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
// Isotope
// var $grid = $('.grid').isotope({
  
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });
// $('.filter').on("click", "a", function(){
//   var value = $(this).attr('data-filter');
//   $grid.isotope({ filter: value });
// });

// Loader
// $(window).on("load", function (event) {
//   $(".preloader").delay(200).fadeOut(200);
// });

//page preloader
	jQuery(".preloaderimg").fadeOut();
	jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
		jQuery(this).remove();
  });
  
var $grid = $(".grid").imagesLoaded(function () {
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    gutter: 0,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".grid-sizer",
    },
  });
});

/* ========== Isotope =========*/ 
$(".iso-nav a").click(function () {
    $(".iso-nav a").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    console.log(selector);
    $(".grid").isotope({
      filter: selector,
    });
    return false;
  });

//Input subscribe form processing
	jQuery('.single-form').on('submit', function( e ) {
		e.preventDefault();
		var $form = jQuery(this);
		$form.find('.response').html('Adding email address...');
  });
  
      
    /*=========== Menu Activeion =========*/
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage == "" || curpage == "/" || curpage == "admin") && hash=="")
        {
        //$("nav .navbar-nav > li:first-child").addClass("active");
        } else {
            $(".header__info-menu li").each(function()
        {
            $(this).removeClass("showBox");
        });
        if(hash != "")
            $(".header__info-menu li a[href*='"+hash+"']").parents("li").addClass("showBox");
        else
        $(".header__info-menu li a[href*='"+curpage+"']").parents("li").addClass("showBox");
    }
    $('.collapse').collapse()