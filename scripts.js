var itens = document.getElementById('itens');

function mudaoTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'block';  // Exibe o menu em telas grandes
    } else {
        itens.style.display = 'none';   // Esconde o menu em telas pequenas
    }
}

function clickMenu() {
    // Altera a visibilidade do menu quando o botão for clicado
    if (itens.style.display === 'block') {
        itens.style.display = 'none';  // Esconde o menu
    } else {
        itens.style.display = 'block'; // Exibe o menu
    }
}

// Chama a função para ajustar o menu com o tamanho da janela
window.addEventListener('resize', function() {
    mudaoTamanho(); // Chama mudaoTamanho sempre que a janela for redimensionada
});

// Chama a função de redimensionamento ao carregar a página para definir o estado inicial
window.onload = function() {
    mudaoTamanho();  // Ajusta o estado do menu no carregamento da página
};













document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        let currentIndex = 0;
        const images = slide.querySelectorAll('img');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');
        const intervalTime = 3000;

        // Função para mostrar a imagem atual
        function showSlide(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? '1' : '0';
            });
        }

        // Navegação para o próximo slide
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        // Navegação para o slide anterior
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        });

        // Slideshow automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }, intervalTime);

        // Exibe o slide inicial
        showSlide(currentIndex);
    });



});



const myObserver = new IntersectionObserver((entries)=>{
entries.forEach(  (entry) =>{
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    }
   
    else{
        entry.target.classList.remove('show')
    }


})

}) 

const elements = document.querySelectorAll('.hidden')



elements.forEach((element)  => myObserver.observe(element)) 