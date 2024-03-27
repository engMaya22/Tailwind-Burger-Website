const hamburger =  document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav__link');
// for each link in menu listen to this event , where i want to hide nav when select element in nav , as i select close
navLinks.forEach(link=>
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden');
    
    })

)
hamburger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden');

});
closeBtn.addEventListener('click',()=>{
    navMenu.classList.add('hidden');

});
