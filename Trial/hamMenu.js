var icon = document.querySelector('.container');
var menu = document.querySelector('.menuItem');

icon.addEventListener('click',function(){

    menu.classList.toggle('showMenu');
    icon.classList.toggle('cross');
});