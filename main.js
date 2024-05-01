document.addEventListener('click',function(){
    document.querySelector('.left-icon').onclick=function(){
        document.querySelector('.open-nav').style.display='flex'
    }
    document.querySelector('.exist').onclick=function(){
        document.querySelector('.open-nav').style.display='none'
    }
    
    
})



// swiper-section
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const backtop=document.querySelector(".backtop");

  backtop.addEventListener("click",function(){
    window.scrollTo(0,0);
  });