let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}
//Theme Switch Toggle
themeSwitch.onclick = function(){
    body.classList.toggle('dark');
}
// Now, we fix menu active class issue for mobile devices
function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    navigation.classList.remove('active');
    main.classList.remove('active');
}