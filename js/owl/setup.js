$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$("nav ul li:eq(0)").click(function(){
    $("html, body").animate({scrollTop:$("div.container").offset().top},1000);
})

$("nav ul li:eq(1)").click(function(){
    $("html, body").animate({scrollTop:$("div.carrosel-series").offset().top},1000);
})

$("nav ul li:eq(2)").click(function(){
    $("html, body").animate({scrollTop:$("div.carrosel-filmes").offset().top},1000);
})