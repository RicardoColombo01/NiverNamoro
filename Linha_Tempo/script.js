// Função para adicionar animação ao rolar a página
window.addEventListener("scroll", function() {
    const eventos = document.querySelectorAll('.evento');
    const offset = window.innerHeight / 1.5; // A janela deve rolar mais de 1/3 para começar a animação
    eventos.forEach(evento => {
      if (evento.getBoundingClientRect().top < offset) {
        evento.classList.add('ativo');
      } 
    });
  });
  
  // Adiciona a classe 'evento-fixo' quando a página carregar, para garantir que os eventos já estejam prontos para serem animados
  document.querySelectorAll('.evento').forEach(evento => {
    evento.classList.add('evento-fixo');
  });
  

  let tocando = false;
let musicaAtual = null;

function toggleMusica() {
  const audio = document.getElementById('audio');
  const audio2 = document.getElementById('audio2');
  const botao = document.getElementById('botaoMusica');

  if (tocando) {
    if (musicaAtual) musicaAtual.pause();
    botao.textContent = "🎵 Tocar Música";
  } else {
    if (musicaAtual) {
      musicaAtual.play();
      botao.textContent = "⏸️ Pausar Música";
    }
  }

  tocando = !tocando;
}

function primeiraInteracao() {
  const audio = document.getElementById('audio');
  const audio2 = document.getElementById('audio2');
  const botao = document.getElementById('botaoMusica');

  if (!tocando) {
    musicaAtual = audio;
    musicaAtual.play();
    botao.textContent = "⏸️ Pausar Música";
    tocando = true;

    audio.addEventListener("ended", () => {
      musicaAtual = audio2;
      audio2.play();
    });
       audio2.addEventListener("ended", () => {
      musicaAtual = audio;
      audio.play();
    });
  }

  // Remove o listener corretamente
  window.removeEventListener('DOMContentLoaded', primeiraInteracao);
}

// Adiciona o evento uma vez só
window.addEventListener('DOMContentLoaded', primeiraInteracao);


let jaDisparou = false;

window.addEventListener("scroll", function () {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    if (!jaDisparou) {
      fogosDeArtificio();
      jaDisparou = true;
    }
  }
});

function fogosDeArtificio() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 300 * (timeLeft / duration);
    // Duas explosões em direções opostas
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: Math.random(), y: Math.random() * 0.6 }
    }));
  }, 250);
}
