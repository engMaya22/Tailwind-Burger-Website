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
const scrollUp = ()=>{
    const scrollBtn = document.getElementById('scroll-up')
    if(this.scrollY>=250){
        scrollBtn.classList.remove('-bottom-1/2')
        scrollBtn.classList.add('bottom-4')
    }else{
        scrollBtn.classList.add('-bottom-1/2')
        scrollBtn.classList.remove('bottom-4')
    }
}
window.addEventListener('scroll',scrollUp)



const scrollHeader = () => {
    const header = document.getElementById("header");
  
    if (this.scrollY >= 50) {
      header.classList.add("border-b", "border-secondaryColor");
    } else {
      header.classList.remove("border-b", "border-secondaryColor");
    }
  };
  window.addEventListener("scroll", scrollHeader);
  




  
//   Dark Light Theme

const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');
function darkMode (){
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line','ri-sun-line');
    localStorage.setItem("mode",'dark');
}
function lightMode(){
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line','ri-moon-line');
    localStorage.setItem("mode",'light');
}

// for refresh
if(localStorage.getItem('mode') == 'dark'){
   darkMode();
}
if(localStorage.getItem('mode') == 'light'){
    lightMode();
 }

themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem('mode') == 'light')
       darkMode();
    else 
       lightMode();
})