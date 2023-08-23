// 초기 서브메뉴 숨기기
const nav = $('nav > ul > li ')
const sub = $('.sub')
sub.hide()
// 메뉴에 마우스 올렸을 때 서브 출력
nav.on('mouseover',function(){
    $(this).find('.sub').stop().slideDown()
})
nav.on('mouseout',function(){
    sub.stop().slideUp()
})
//로고변경
/* const logo1 = document.querySelector('.logo1')
const logo2 = document.querySelector('.logo2')
logo2.style.display = 'none'
logo1.addEventListener('click',function(){
    logo1.style.display = 'none'
    logo2.style.display = 'block'
}) */
