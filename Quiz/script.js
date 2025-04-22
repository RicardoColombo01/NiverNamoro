

const perguntas = [
    {
        pergunta: "Quem é mais provável de esquecer uma data importante?",
        opcoes: ["Eu", "Você", "Os dois 😅"],
        resposta: 0
      },
    {
      pergunta: "Qual foi a primeira coisa que reparei em você?",
      opcoes: ["Sorriso", "Olhos", "Estilo"],
      resposta: 0
    },
    {
        pergunta: "Qual dessas coisas eu mais gosto que você faz?",
        opcoes: ["Quando me abraça do nada", "Quando me manda mensagem fofa", "Quando cuida de mim"],
        resposta: 2
      },
    {
      pergunta: "Você começou a me amar em que ano?",
      opcoes: ["2021", "2019", "2023"],
      resposta: 1
    },
    {
        pergunta: "Quem é mais carinhoso?",
        opcoes: ["Eu", "Você", "Empate"],
        resposta: 0
      },
    {
      pergunta: "Quem é mais ciumento?",
      opcoes: ["Eu", "Você", "Empate"],
      resposta: 1
    },
    {
      pergunta: "Qual comida que eu mais amo comer com você?",
      opcoes: ["Pizza", "Lanche", "você"],
      resposta: 1
    },
    {
        pergunta: "Qual dessas músicas combina mais com a gente?",
        opcoes: ["Vem Cá", "Primeiro Beijo", "Deixa em off"],
        resposta: 0
      },
      {
        pergunta: "Qual parte do dia eu mais gosto com você?",
        opcoes: ["De manhã", "De tarde", "De noite, só nós dois"],
        resposta: 2
      },
      {
        pergunta: "O que eu mais amo em você?",
        opcoes: ["Seu sorriso", "Seu jeitinho comigo", "Tudo"],
        resposta: 2
      },
    {
      pergunta: "Quando foi nosso primeiro beijo?",
      opcoes: ["Em um encontro", "Por acaso", "Planejado"],
      resposta: 1
    },
    {
        pergunta: "O que eu mais amo fazer com você?",
        opcoes: ["Assistir filmes juntinhos", "Conversar até dormir", "Te encher de beijos"],
        resposta: 2
      },
      {
        pergunta: "Qual dessas frases define a gente?",
        opcoes: [
          "Feitos um pro outro 💘",
          "sempre nós contra os problemas🤞",
          "Cúmplices até nas doideras 😂"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual dos dois faz mais drama?",
        opcoes: ["Eu", "Você", "Drama? Nós? 😇"],
        resposta: 2
      },
      {
        pergunta: "Qual dessas é a nossa maior força como casal?",
        opcoes: ["A gente se entende até no silêncio", "Sempre rimos juntos", "Nunca desistimos um do outro"],
        resposta: 2
      },
  ];
  
  let indiceAtual = 0;
  let pontos = 0;
  
  const perguntaTexto = document.getElementById("pergunta-texto");
  const opcoesDiv = document.getElementById("opcoes");
  const proximaBtn = document.getElementById("proxima-btn");
  const resultadoDiv = document.getElementById("resultado");
  
  function mostrarPergunta() {
    const atual = perguntas[indiceAtual];
    perguntaTexto.textContent = atual.pergunta;
    opcoesDiv.innerHTML = "";
  
    atual.opcoes.forEach((opcao, i) => {
      const botao = document.createElement("button");
      botao.textContent = opcao;
      botao.classList.add("opcao");
      botao.onclick = () => {
        if (i === atual.resposta) {
          pontos++;
          botao.style.backgroundColor = "#c8e6c9"; // verde
        } else {
          botao.style.backgroundColor = "#ffcdd2"; // vermelho
        }
        // Desativa botões após resposta
        document.querySelectorAll(".opcao").forEach(btn => btn.disabled = true);
      };
      opcoesDiv.appendChild(botao);
    });
  }
  
  function mostrarResultado() {
    perguntaTexto.style.display = "none";
    opcoesDiv.style.display = "none";
    proximaBtn.style.display = "none";
    resultadoDiv.classList.remove("escondido");
  
    let mensagem = "";
    if (pontos >= 13) {
      mensagem = "🏆 Dá para ver que conhece bastante ksksk! Vale o que você quiser pedir (que seja possível)💋🤗";
    } else if (pontos >= 9) {
      mensagem = "🥈 Esperava mais porém ainda conhece bastante! Vale abraços e beijos ilimitados 💋";
    } else if (pontos >= 5) {
      mensagem = "🥉 Mal conhece emmm, vidinha! Não merecia nada porém vale carinhos😘";
    } else {
      mensagem = " Humm... vamos conversar não conhece nada em, Mas te amo mesmo assim!";
    }
  
    resultadoDiv.textContent = `Você acertou ${pontos} de 15. ${mensagem}`;
    recomecarBtn.classList.remove("escondido");
    voltarBtn.style.display = "inline-block";

  }
  
  proximaBtn.addEventListener("click", () => {
    if (indiceAtual < perguntas.length - 1) {
      indiceAtual++;
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  });
  
  mostrarPergunta();
  
  const voltarBtn = document.getElementById("voltar-btn");
  const recomecarBtn = document.getElementById("recomecar-btn");

recomecarBtn.addEventListener("click", () => {
  indiceAtual = 0;
  pontos = 0;
  perguntaTexto.style.display = "block";
  opcoesDiv.style.display = "block";
  proximaBtn.style.display = "flex";
  resultadoDiv.classList.add("escondido");
  recomecarBtn.classList.add("escondido");
  voltarBtn.classList.add("escondido");
  mostrarPergunta();
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

  
