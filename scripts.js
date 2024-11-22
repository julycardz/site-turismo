var itens = document.getElementById('itens');

var burguer = document.getElementById('botao-burguer')
function mudaoTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = 'none';  // Exibe o menu em telas grandes
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



const img = document.getElementById('img');


