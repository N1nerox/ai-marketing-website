
// === Hamburger and mobile menu ===

// --- Mobile menu

const body = document.querySelector('body')

const mobileMenu = document.createElement('nav')
mobileMenu.classList.add('mobile-menu')

const topMenuContent = document.createElement('div')
topMenuContent.classList.add('mobile-menu_content')
const navSearch = document.querySelector('.nav_input__search').cloneNode(true)
topMenuContent.appendChild(navSearch)
const singInBtn = document.querySelector('#SingIn').cloneNode(true)
const singUpBtn = document.querySelector('#SingUp').cloneNode(true)
topMenuContent.appendChild(singInBtn)
topMenuContent.appendChild(singUpBtn)
mobileMenu.appendChild(topMenuContent)

const navList = document.createElement('ul')
navList.classList.add('nav_list')
const menuItems = ["Product", "Team", "Enterprise", "Explore", "Marketplace", "Pricing"];
menuItems.forEach(item => {
    const listItem = document.createElement('li')
    listItem.classList.add('nav_link')
    const navLink = document.createElement('a')
    navLink.textContent = item
    listItem.appendChild(navLink)
    navList.appendChild(listItem)
})

mobileMenu.appendChild(navList)

body.appendChild(mobileMenu)



// --- Hamburger

const hamburgerBtn = document.querySelector('.hamburger')

const mobileLinks = mobileMenu.querySelectorAll('a')
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
        hamburgerBtn.classList.remove('activated')
    })
})


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('activated')
    mobileMenu.classList.toggle('active')
    console.log("IT WORKS XDD")
})




// === Slider ===


const sliderTrack = document.querySelector('.main-box_slider_track')
const prevBtn = document.querySelector('#slidePrev')
const nextBtn = document.querySelector('#slideNext')

const totalSlides = document.querySelectorAll('.main-box_slider_card').length

let currentSlide = 0
nextBtn.addEventListener('click', () => {
    if( currentSlide < totalSlides - 1){
        currentSlide ++
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots()
    }
})
prevBtn.addEventListener('click', () => {
    if( currentSlide > 0) {
        currentSlide --
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots()
    }
})

console.log('track', sliderTrack);
console.log('totalSlides', totalSlides);


// --- Dots

const dots = document.querySelectorAll('.dot')

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === currentSlide)
    })
}