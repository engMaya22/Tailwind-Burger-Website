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

const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');
tabs.forEach(tab=>
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active');
        } );
        tab.classList.add('active');
        const tabVal = tab.getAttribute('data-tabs')
        console.log(tabVal)
        all.forEach(item=>{
            item.style.display = 'none';

        } );
        if(tabVal == 'food'){
            foods.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }
        else if (tabVal == 'snack'){
            snacks.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }
        else if (tabVal == 'beverage'){
            beverages.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }
        else {
            all.forEach(item=>{
                item.style.display = 'block';
                
            } );
        }



    
    })

)
