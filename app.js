$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(this).scrollTop() > 200){
            $('.back-to-top').show();
        }else{
            $('.back-to-top').hide();
        }
    });

    $('.back-to-top').click(()=>{
        $("html, body").animate({scrollTop: 0}, 800);
    })


})