

const navMenu=document.getElementById("nav-menu"),
 navToggle=document.getElementById("nav-toggle"),
 navClose=document.getElementById("nav-close")



 if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
 }

 if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")

    })
 }


 const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




const skillsContent=document.getElementsByClassName("skills-content"),
skillsHeader=document.querySelectorAll(".skills-header")

function toggleSkills(){
    let itemClass=this.parentNode.className

    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className="skills-content skills-close"
    }

    if(itemClass==="skills-content skills-close"){
        this.parentNode.className="skills-content skills-open"
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener("click",toggleSkills)
})

const tabs=document.querySelectorAll("[data-target]"),
    tabContents=document.querySelectorAll("[data-content]")

    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            const target=document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent=>{
                tabContent.classList.remove("qualification-active")
            })

            target.classList.add("qualification-active")

            tabs.forEach(tab=>{
                tab.classList.remove("qualification-active")
            })

            tab.classList.add("qualification-active")
        })
    })






    const modalViews=document.querySelectorAll(".services-modal"),
       modalBtns=document.querySelectorAll(".services-button"),
       modalCloses=document.querySelectorAll(".services-modal-close")


       let modal= function(modalClick){
        modalViews[modalClick].classList.add("active-modal")
       }

       modalBtns.forEach((modalBtn,i)=>{
        modalBtn.addEventListener("click",()=>{
            modal(i)
        })
       })

       modalCloses.forEach((modalClose)=>{
        modalClose.addEventListener("click",()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove("active-modal")
            })
        })
       })


       let swiperPortfolio = new Swiper(".portfolio-container", {
        cssMode: true,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
       
      });


// Add the CSS rule for '.swiper-button-next::after'
var styleNext = document.createElement('style');
styleNext.textContent = '.swiper-button-next::after { content: ""; }';
document.head.appendChild(styleNext);

// Add the CSS rule for '.swiper-button-prev::after'
var stylePrev = document.createElement('style');
stylePrev.textContent = '.swiper-button-prev::after { content: ""; }';
document.head.appendChild(stylePrev);




// Create a new style element
var styleElement = document.createElement('style');

// Add the CSS rule for '.swiper-portfolio-icon'
styleElement.textContent = '.swiper-portfolio-icon { font-size: 2rem; color: var(--first-color); }';

// Append the style element to the document's head
document.head.appendChild(styleElement);





// Create a new style element
var styleElement = document.createElement('style');

// Add the CSS rules for '.swiper-button-next', '.swiper-button-prev', and '.swiper-pagination-bullet'
styleElement.textContent = '.swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet { outline: none; }';

// Append the style element to the document's head
document.head.appendChild(styleElement);








let swiperTestimonial = new Swiper(".testimonial-container", {
   
    loop:true,
    grabCursor:true,
    spaceBetween: 48,


  


    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },
   
breakpoints:{
    568:{
        slidePerView: 2,
    }
}

  });


  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const menuLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (menuLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                menuLink.classList.add('active-link');
            } else {
                menuLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);




/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




/*==================== SHOW SCROLL TOP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

















window.addEventListener('resize', function () {
    var portfolioContent = document.querySelector('.portfolio-content');
    var screenWidth = window.innerWidth;

    // Adjust the class based on the screen width
    if (screenWidth >= 568) {
        portfolioContent.classList.add('responsive-grid');
    } else {
        portfolioContent.classList.remove('responsive-grid');
    }
});


window.addEventListener('resize', function () {
    var portfolioImg = document.querySelector('.portfolio-img');
    var portfolioContent = document.querySelector('.portfolio-content');
    var screenWidth = window.innerWidth;

    // Adjust the classes based on the screen width
    if (screenWidth >= 768) {
        portfolioImg.classList.add('responsive-width');
        portfolioContent.classList.add('responsive-align');
    } else {
        portfolioImg.classList.remove('responsive-width');
        portfolioContent.classList.remove('responsive-align');
    }
});



window.addEventListener('resize', function () {
    var portfolioContent = document.querySelector('.portfolio-content');
    var swiperIcon = document.querySelector('.swiper-portfolio-icon');
    var prevButton = document.querySelector('.swiper-button-prev');
    var nextButton = document.querySelector('.swiper-button-next');
    var screenWidth = window.innerWidth;

    // Adjust the classes based on the screen width
    if (screenWidth >= 1024) {
        portfolioContent.classList.add('responsive-gap');
        swiperIcon.classList.add('responsive-font-size');
        prevButton.classList.add('responsive-left');
        nextButton.classList.add('responsive-right');
    } else {
        portfolioContent.classList.remove('responsive-gap');
        swiperIcon.classList.remove('responsive-font-size');
        prevButton.classList.remove('responsive-left');
        nextButton.classList.remove('responsive-right');
    }
});