// script.js

// Lista de frases que você ama na sua namorada
// script.js

// Lista expandida de frases que você ama na sua namorada
const frases = [
    "Seu sorriso.",
    "Sua dedicação em tudo o que faz.",
    "Como você me faz sentir especial todos os dias.",
    "O seu carinho e atenção.",
    "Seu jeito de me entender sem palavras.",
    "A forma como você sempre me apoia.",
    "Seu olhar.",
    "A maneira como você me faz rir até nos dias difíceis.",
    "A sua confiança em mim.",
    "Como você pensa no bem dos outros.",
    "Seu jeito único de ser.",
    "A sua voz.",
    "Seu jeito de cuidar de mim.",
    "Os momentos de silêncio que falam mais do que palavras.",
    "Sua coragem e força em tudo o que enfrenta.",
    "O seu coração cheio de bondade.",
    "A alegria que você traz para minha vida.",
    "Como você é criativa e sempre tem ideias incríveis.",
    "A forma como você me faz querer ser uma pessoa melhor.",
    "A beleza que você tem, por dentro e por fora.",
    "Como você sempre consegue me fazer sentir amado.",
    "Amo te cheirar (mesmo fedida kk).",
    "O carinho com que você me abraça.",
    "Nossas brincadeiras e bizarrices.",
    "Seu apoio incondicional em tudo o que faço.",
    "A forma como você cuida dos pequenos detalhes.",
    "O seu sorriso que ilumina meu dia.",
    "Como você está sempre disposta a aprender e crescer.",
    "Sua determinação e foco nos seus objetivos.",
    "A paz que você transmite apenas com a sua presença.",
    "Sua sabedoria e maturidade em lidar com situações difíceis.",
    "Amo suas chatices e dramas e birra.",
    "O jeito como você me chama.",
    "A força da nossa conexão, que é inquebrável.",
    "Como você sempre sabe o que dizer para me acalmar.",
    "O cuidado com que você escolhe palavras carinhosas em momentos de raiva.",
    "Como você sempre me surpreende com gestos de carinho.",
    "Seu senso de humor.",
    "O modo como você sempre está ao meu lado em tudo.",
    "A maneira como você vê o mundo e sempre me ensina algo novo.",
    "A energia positiva que você transmite para mim.",
    "A paciência e dedicação que você tem com as pessoas que ama.",
    "Como você se interessa pelo que eu gosto.",
    "Como você consegue me entender com apenas um olhar.",
    "O jeito que você me faz sentir acolhido.",
    "A gentileza que você demonstra em tudo o que faz.",
    "Como você sempre se preocupa com meu bem-estar.",
    "O brilho dos seus olhos quando fala sobre algo que ama.",
    "A forma como você compartilha seus sonhos e planos com tanta confiança.",
    "Sua beleza natural, que vai muito além da aparência.",
    "A sua sinceridade e autenticidade em tudo o que faz.",
    "Como você me inspira a ser uma pessoa melhor.",
    "O seu jeitinho carinhoso de me fazer sentir importante.",
    "Como você é tão divertida e animada com certas coisas.",
    "O seu jeito de criança de ser.",
    "A calma que você transmite mesmo nos momentos mais difíceis.",
    "Sua habilidade em me fazer sentir calmo e tranquilo.",
    "Sabe que o pepeto né kkk.",
    "Sua capacidade de transformar qualquer dia comum em algo especial.",
    "Como você sempre se esforça para entender minhas necessidades.",
    "O carinho que você coloca em cada pequena coisa que faz por mim.",
    "Sua carinha de safada.",
    "A forma como você me faz sentir tão amado todos os dias.",
    "Nossos banhos que já tivemos.",
    "O quanto você é incrível e única do jeitinho que é.",
    "O seu jeito de ser simples e profunda ao mesmo tempo.",
    "Como você sempre se dedica ao que ama fazer.",
    "Sua energia, que me inspira a fazer o meu melhor.",
    "A forma como você expressa seus sentimentos de forma tão linda.",
    "O seu jeito de ser tão paciente comigo.",
    "Sua fé e espiritualidade.",
    "Amo quando te vejo dançando.",
    "A forma como você sempre busca crescer como pessoa.",
    "Como você sempre se lembra dos detalhes que eu gosto.",
    "O quanto você é esforçada em tudo que pega para fazer.",
    "Amo suas fotos aleatorias do nada.",
    "Como você me faz sentir seguro e feliz.",
    "O seu jeito de dar sempre o seu melhor, sem pedir nada em troca.",
    "A forma como você acredita no nosso amor.",
    "O seu apoio nos meus desafios.",
    "Como você me faz sentir que sou capaz de tudo.",
    "Meu binquedo.",
    "Seu entusiasmo e paixão por tudo o que faz.",
    "O jeito que você me faz ver o mundo de uma nova forma.",
    "Sua presença, que torna tudo mais especial.",
    "A sua capacidade de trazer paz e serenidade à minha vida.",
    "Seu cabelo natural ou com tranças.",
    "Amo seu jeitinho de ser mimada (mesmo eu reclamando).",
    "O jeito como você confia em mim.",
    "Amo nossas noites de festas do pijama.",
    "Amo nossos momentos a sós.",
    "A paciência que você tem comigo, mesmo nas minhas falhas.",
    "O carinho com que você me trata todos os dias.",
    "Como você consegue me fazer sorrir mesmo nos dias mais difíceis.",
    "Amo nossa intimidade e como conquistamos ela.",
    "Como você sempre se lembra dos nossos momentos especiais.",
    "A beleza do seu coração, que é o mais importante para mim.",
    "Amo quando te ajudei no banho premium akakak",
    "A sua energia, que sempre me faz sentir bem.",
    "O seu modo de ser sempre tão cuidadosa e atenta aos detalhes.",
    "Como você sempre sabe como me fazer sentir especial.",
    "Sua sinceridade, que me faz confiar em você a cada dia mais.",
    "A forma como você me motiva a seguir em frente.",
    "Seu carinho, que faz com que eu me sinta tão amado.",
    "A maneira como você me faz querer ser uma pessoa melhor.",
    "O seu jeito de me fazer sentir seguro e protegido.",
    "Como você me faz rir até nos momentos mais sérios.",
    "Nossas calls.",
    "A sua habilidade em transformar o comum em algo extraordinário.",
    "Como você sempre me faz sentir que sou o único para você.",
    "A sua alegria contagiante, que ilumina os meus dias.",
    "Como você me faz sentir a pessoa mais importante do mundo.",
    "O jeito que você me faz sentir em casa, mesmo fora de casa.",
  ];
  
  
  
  // Função para criar um item na lista
  function createItem(frase) {
    const li = document.createElement('li');
    li.classList.add('item');
    
    const button = document.createElement('button');
    button.classList.add('reveal-btn');
    button.textContent = "Clique para ver!";
  
    const p = document.createElement('p');
    p.classList.add('reveal-text');
    p.textContent = frase;
  
    // Evento de click para revelar ou esconder o texto
    button.addEventListener('click', () => {
      p.classList.toggle('revealed');
      button.textContent = p.classList.contains('revealed') ? 'Clique para esconder!' : 'Clique para ver!';
    });
  
    li.appendChild(button);
    li.appendChild(p);
  
    return li;
  }
  
  // Gerar 100 itens dinamicamente
  const listaElement = document.getElementById('lista');
  for (let i = 0; i < 113; i++) {
    // Usando frases aleatórias para a lista
    listaElement.appendChild(createItem(frases[i % frases.length]));
  }
  
 
  let tocando = false;
let musicaAtual = null;

function toggleMusica() {
  const audio = document.getElementById('audio');
  const audio2 = document.getElementById('audio2');
  const audio3 = document.getElementById('audio3');
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
  const audio3 = document.getElementById('audio3');
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
      musicaAtual = audio3;
      audio3.play();
    });
    audio3.addEventListener("ended", () => {
      musicaAtual = audio;
      audio.play();
    });
  }

  // Remove o listener corretamente
  window.removeEventListener('DOMContentLoaded', primeiraInteracao);
}

// Adiciona o evento uma vez só
window.addEventListener('DOMContentLoaded', primeiraInteracao);
