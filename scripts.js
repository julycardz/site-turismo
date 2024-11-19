
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.transform = 'translateX(100%)';
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.transform = 'translateX(0)';
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function goToSlide(n) {
    showSlide(n);
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Initial load
showSlide(0);


/*let burguer = true;
const menuContent = document.querySelector ('.content');
const menuToggle = menuContent.querySelector ('.menu-toggle');

menuToggle.addEventListener('click',() => {
    document.body.style.overflow = show? 'hidden' : 'initial'
   
    menuContent.classList.toggle('on', show);
    show = !show;
}) */


function mudaoTamanho() {
    if(window.innerWidth >= 768) {
        itens.style.display = 'block'
     } else{
        itens.style.display ='none'
     }
    }
 
     function clickMenu() {
    if(itens.style.display == 'block'){ 
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
 
 }