const puzzle = document.getElementById("puzzle");
const mensagem = document.getElementById("mensagem-final");

const LINHAS = 3;
const COLUNAS = 3;
const total = LINHAS * COLUNAS;

const ordemCorreta = Array.from(Array(total).keys());
let ordemAtual = [...ordemCorreta];

// Embaralha as peças
ordemAtual.sort(() => Math.random() - 0.5);

function criarPecas() {
  puzzle.innerHTML = "";
  ordemAtual.forEach((posicaoOriginal, i) => {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundPosition = getBackgroundPosition(posicaoOriginal);
    piece.dataset.index = i;
    piece.dataset.original = posicaoOriginal;

    piece.addEventListener("click", () => {
      moverPeca(i);
    });

    puzzle.appendChild(piece);
  });
}

function getBackgroundPosition(index) {
  const row = Math.floor(index / COLUNAS);
  const col = index % COLUNAS;
  return `-${col * 100}px -${row * 100}px`;
}

function moverPeca(i) {
  const proximo = (i + 1) % total;
  [ordemAtual[i], ordemAtual[proximo]] = [ordemAtual[proximo], ordemAtual[i]];
  criarPecas();

  if (checarVitoria()) {
    mensagem.classList.remove("escondido");
  }
}

function checarVitoria() {
  return ordemAtual.every((val, i) => val === ordemCorreta[i]);
}

criarPecas();

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

  
