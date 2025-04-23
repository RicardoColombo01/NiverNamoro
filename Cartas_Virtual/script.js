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
  



const mensagens = [
    "Você é a melhor parte dos meus dias. ❤️",
    "Mesmo longe, você sempre está pertinho do meu coração. 💌",
    "Te amo mais do que palavras conseguem explicar. 🌹",
    "Sabe que sempre será nós contra tudo e contra todos né. ❤️",
    "Você é o meu pensamento favorito antes de dormir e o meu melhor motivo pra sorrir ao acordar. 🌙",
    "Desde que te conheci, meu mundo ficou mais bonito — do jeitinho que você sorri até o jeito que me abraça. 💫",
    "Você não é só a minha namorada, é minha melhor amiga, minha paz e meu lugar favorito. 🌸",
    "Se amar fosse um superpoder, eu seria invencível... porque te amar é o que eu sei fazer de melhor. 💕",
    "Nosso amor é como uma música boa: mesmo quando repete, continua especial. 🎵",
    "Te ter comigo é como viver num sonho bom — e eu nunca quero acordar. 🧸",
    "A vida pode ter altos e baixos, mas com você do meu lado tudo fica mais leve e doce. ☁️",
    "Agradeço todos os dias por te ter em minha vida. 🌹",
    "Amo o jeito que nós somos e amo o que me tornei com você ao meu lado. 💕",
    "Você é e sempre será meu Mundo. ❤️",
    "Sempre te amarei do fundo da minha alma. 💕 "
  ];
  
  // Criar cartinhas dinamicamente
  window.onload = () => {
    const container = document.querySelector('.cartas');
    mensagens.forEach((_, index) => {
      const carta = document.createElement('div');
      carta.className = 'carta';
      carta.textContent = `📩 Cartinha ${index + 1}`;
      carta.onclick = () => mostrarMensagem(index);
      container.appendChild(carta);
    });
  };
  
  function mostrarMensagem(index) {
    document.getElementById('textoMensagem').innerText = mensagens[index];
    document.getElementById('mensagem').style.display = 'flex';
  }
  
  function fecharMensagem() {
    document.getElementById('mensagem').style.display = 'none';
  }
  

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
  