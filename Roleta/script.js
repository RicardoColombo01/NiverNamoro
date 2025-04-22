const frases = [
    "💋 Um beijo beijoo ksksks",
    "🎁 Eu embrulhado para você",
    "🎥 Você escolhe o filme",
    "💆 Massagem Completa",
    "📝 O que você quiser irei fazer",
  ];

  const som = document.getElementById('somRoleta');
  const win = document.getElementById('somWin');
  const voltarBtn = document.getElementById("voltar-btn");

  function girarRoleta() {
    const angulo = Math.floor(Math.random() * 360) + 720; // gira 2 voltas + aleatório
    som.currentTime = 0;
    som.play();
    document.getElementById("roda").style.transform = `rotate(${angulo}deg)`;

    const index = Math.floor((angulo % 360) / (360 / frases.length));
    setTimeout(() => {
      document.getElementById("resultado").innerHTML = frases[index]  + "<br><br> 💖 Aproveite e desfrute muito bem do que você ganhou! 💖 <br>(Me mande o Print para resgatar)";
      resultado.classList.remove("colorido");
      void resultado.offsetWidth;
      resultado.classList.add("colorido");  
      voltarBtn.style.display = "inline-block";
      som.pause();
      win.play();
      const duration = 2000;
      const animationEnd = Date.now() + duration;
      
      const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
          return clearInterval(interval);
        }
      
        confetti({
            particleCount: 300,
            spread: 360,
            colors: ['#ff69b4', '#ffe4e1', '#ff1493', '#ffffff'],
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          }
        });
      }, 250);
      
    }, 3000); // espera a roleta parar


   const botao = document.getElementById("girar");
   botao.onclick = () => {
    disable
   }
   botao.style.backgroundColor = "#f67280";
   botao.style.cursor = "auto";
  }
