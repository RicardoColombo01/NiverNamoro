
document.getElementById('revelarBtn').addEventListener('click', function () {
    const declaracao = document.getElementById('texto-declaracao');
    const btn = document.getElementById('revelarBtn');
    const titulo = document.getElementById('titulo');
    const voltarBtn = document.getElementById('voltar-btn')

    declaracao.style.display = 'block';
    btn.style.display = 'none';
    titulo.innerText = 'Só queria te dizer que...';
    btn.disabled = true;
    voltarBtn.style.display = 'inline-block';
});


let tocando = false;

function toggleMusica() {
  const audio = document.getElementById('audio');
  const botao = document.getElementById('botaoMusica');

  if (!tocando) {
    audio.play();
    botao.textContent = "⏸️ Pausar Música";
  } else {
    audio.pause();
    botao.textContent = "🎵 Tocar Música";
  }

  tocando = !tocando;
}

// Tocar música após o primeiro clique em qualquer lugar
window.addEventListener('click', function primeiraInteracao() {
    const audio = document.getElementById('audio');
    if (!tocando) {
      audio.play();
      document.getElementById('botaoMusica').textContent = "⏸️ Pausar Música";
      tocando = true;
    }
    // Remove o listener após o primeiro clique
    window.removeEventListener('click', primeiraInteracao);
  });

  // Função para gerar corações animados
function criarCoracao() {
    const coracoesContainer = document.querySelector('.coracoes');
    const coracao = document.createElement('div');
    coracao.className = 'coracao';
    coracao.innerText = '❤️';
  
    // Posicionamento e tamanho aleatórios
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.fontSize = (Math.random() * 10 + 15) + 'px';
    coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';
  
    coracoesContainer.appendChild(coracao);
  
    // Remover depois que terminar a animação
    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }
  
  // Criar um novo coração a cada 300ms
  setInterval(criarCoracao, 300);
  