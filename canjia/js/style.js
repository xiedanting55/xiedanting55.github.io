// index
new Swiper('.ydy.swiper-container', {
    direction: 'vertical',
    loop: true,   //循环
    pagination: {
        el: '.ydy .swiper-pagination',
        clickable: true,
    }
});
// 菜单
$('.nav').click(function() {
    $('.mask').css('display', 'flex');
    $('.mask').addClass("showMask");
})

$('.btnClose').click(function() {
    $('.mask').css('display', 'none');
    $('.mask').removeClass("showMask");
})
// 搜索
$('.search').click(function() {
    window.location.href="search.html";
})
$('.close').click(function() {
    window.history.go(-1);
})