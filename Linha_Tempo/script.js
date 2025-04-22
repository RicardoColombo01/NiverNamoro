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
  window.addEventListener('DOMContentLoaded', function primeiraInteracao() {
      const audio = document.getElementById('audio');
      if (!tocando) {
        audio.play();
        document.getElementById('botaoMusica').textContent = "⏸️ Pausar Música";
        tocando = true;
      }
      // Remove o listener após o primeiro clique
      window.removeEventListener('click', primeiraInteracao);
    });
    

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
