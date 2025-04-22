function assinarContrato() {
    const msg = document.getElementById("mensagem-final");
    const secreto = document.querySelectorAll('#aviso');
    const voltarBtn = document.getElementById("voltar-btn");
    msg.style.display = "block";
    voltarBtn.style.display = "block";
    secreto.forEach((elemento) => {
        elemento.style.display = 'block';
      });

      alert("Aviso sua alma foi vendida para mim AHAHHAHAHAHHA, brincadeira, porém agora não tem mais volta nunca maiss, e acho que você vai querer ler tudo denovo")
}

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
  