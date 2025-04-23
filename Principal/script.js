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