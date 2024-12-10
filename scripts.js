var itens = document.getElementById('itens');
var burguer = document.getElementById('botao-burguer');

function mudaoTamanho() {
    if (window.innerWidth >= 768) {
        burguer.style.display = 'none';    // Esconde o botão burguer
        itens.style.display = 'none';      // Garante que o menu não apareça em telas grandes
    } else {
        burguer.style.display = 'block';   // Mostra o botão burguer
        itens.style.display = 'none';      // Esconde o menu por padrão em telas pequenas
    }
}

// Função para mostrar/ocultar o menu quando o botão burguer for clicado
function clickMenu() {
    if (itens.style.display === 'block') {
        itens.style.display = 'none';  // Esconde o menu se estiver visível
    } else {
        itens.style.display = 'block'; // Mostra o menu se estiver oculto
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
