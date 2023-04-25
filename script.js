let menuBtn = document.querySelector('.burger')
let menu = document.querySelector('.header-list')

menuBtn.addEventListener ('click', function (){
    menu.classList.toggle('active')
    menuBtn.classList.toggle('change')
})