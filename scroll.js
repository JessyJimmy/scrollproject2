const $slide = document.querySelectorAll('.slide-bg')
const $content = document.querySelectorAll('.according-content')
const $show = document.querySelector('.show')
const linksContainer = document.querySelector(".links-container")
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const date = document.querySelector(".date");
const $tour = document.querySelector(".about-tour");
date.innerHTML = new Date().getFullYear()

const rightBtn = document.getElementById("right-btn")
const img = document.getElementById("tour-img")
const leftBtn = document.getElementById("left-btn")


$slide.forEach((slide)=>{
slide.addEventListener('mouseover', function(e){
    const show = e.currentTarget.children[0].children[1]
    show.classList.add('show')   
})
})
$slide.forEach((slide)=>{
slide.addEventListener('mouseout', function(){
    $content.forEach((content) =>{
        content.classList.remove('show')
    })   
})
})


navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle("show-links")
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight =links.getBoundingClientRect().height
    if(containerHeight === 0)
    {
        linksContainer.style.height = `${linksHeight}px`
    }
    else
    {
        linksContainer.style.height = 0;
    }
})

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll',function(){
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-navbar')
    }
    else
    {
        navbar.classList.remove('fixed-navbar')
    }
    if(scrollHeight > 500){
        topLink.classList.add('show-topLink')
    }
    else
    {
        topLink.classList.remove('show-topLink')
    }


})

const scrollLinks = document.querySelectorAll('.scroll-link')


scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e) {
        e.preventDefault()
     
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id)
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-navbar');
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 150){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

const reviews = [
    {
        id: 1,
        img: "/images/pexels-jess-loiterton-4319753.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in voluptates quo reiciendis dolores quia culpa praesentium aliquam magni nostrum."
    },
    {
        id: 2,
        img: "/images/pexels-julian-lobo-2407070.jpg",
        text: "Lorem , sit amet consectetur adipisicing. Laborum debitis libero aut eius consequatur nisi!"
    },
    {
        id: 3,
        img: "/images/pexels-asad-photo-maldives-457882.jpg",
        text: "Lorem ipsum dolor,  Laborum debitis libero aut eius consequatur nisi!"
    },

    {
        id: 4,
        img: "/images/pexels-jess-loiterton-4321122.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur aut eius consequatur nisi!"
    }
]

let currentItem = 0;


function profile(){
    const item = reviews[currentItem]
    img.src = item.img
    $tour.textContent = item.text
}
rightBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    profile()
})
leftBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    profile()
})

// const tour = [
//     {
//         id: 1,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in voluptates quo reiciendis dolores quia culpa praesentium aliquam magni nostrum."
//     },
//     {
//         id: 1,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in voluptates quo reiciendis dolores quia culpa praesentium aliquam magni nostrum."
//     },
//     {
//         id: 1,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in voluptates quo reiciendis dolores quia culpa praesentium aliquam magni nostrum."
//     },
//     {
//         id: 1,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in voluptates quo reiciendis dolores quia culpa praesentium aliquam magni nostrum."
//     },
   

// ]





