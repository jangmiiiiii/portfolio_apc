// 반응형 tablet 햄버거 메뉴 - 보였다 안보였다
const m_nav_open = document.querySelector('.m_nav_open')
const m_nav = document.querySelector('.logoNav .m_nav')
const nav_menu = document.querySelectorAll('.nav_menu')
const sub_menu = document.querySelectorAll('.sub_menu')
const m_sub = document.querySelectorAll('.m_sub')
const sub_list = document.querySelectorAll('.sub_list')
const list = document.querySelectorAll('.list')
// m_nav.addEventListener('click',function(){
//     m_nav_open.classList.toggle('showHide')
// })
// console.log(m_nav)

// // 네비메뉴 누르면 서브메뉴 리스트 나타나기
// nav_menu[0].addEventListener('click',function(){
//     m_sub[1, 2, 3, 4].style.display = 'none'
//     m_sub[0].style.display = 'block'
// })
// nav_menu[1].addEventListener('click',function(){
//     m_sub[0, 2, 3 ,4].style.display = 'none'
//     m_sub[1].style.display = 'block'
// })
// nav_menu[2].addEventListener('click',function(){
//     m_sub[0, 1, 3, 4].style.display = 'none'
//     m_sub[2].style.display = 'block'
// })
// nav_menu[3].addEventListener('click',function(){
//     m_sub[0, 1, 2, 4].style.display = 'none'
//     m_sub[3].style.display = 'block'
// })
// nav_menu[4].addEventListener('click',function(){
//     m_sub[0, 1, 2, 3].style.display = 'none'
//     m_sub[4].style.display = 'block'
// })
// // 서브메뉴 리스트 열기
// sub_menu[1].addEventListener('click',function(){
//     list[0].style.display = 'block'
// })
// sub_menu[2].addEventListener('click',function(){
//     list[1].style.display = 'block'
// })
// sub_menu[3].addEventListener('click',function(){
//     list[2].style.display = 'block'
// })
// sub_menu[4].addEventListener('click',function(){
//     list[3].style.display = 'block'
// })
// sub_menu[5].addEventListener('click',function(){
//     list[4].style.display = 'block'
// })
// sub_menu[6].addEventListener('click',function(){
//     list[5].style.display = 'block'
// })
// sub_menu[8].addEventListener('click',function(){
//     list[6].style.display = 'block'
// })
// sub_menu[9].addEventListener('click',function(){
//     list[7].style.display = 'block'
// })
// sub_menu[10].addEventListener('click',function(){
//     list[8].style.display = 'block'
// })
// sub_menu[11].addEventListener('click',function(){
//     list[9].style.display = 'block'
// })
// sub_menu[12].addEventListener('click',function(){
//     list[10].style.display = 'block'
// })