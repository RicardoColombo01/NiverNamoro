window.onload = function() {
    confetti({
        particleCount: 500,
        spread: 360,
        startVelocity: 40,
        origin: { x: 0.5, y: 0.5 }
      });
      confetti({
        particleCount: 400,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 400,
        angle: 120,
        spread: 55,
        origin: { x: 1}
      });
  };

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
  