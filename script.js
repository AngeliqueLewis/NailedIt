document.addEventListener("DOMContentLoaded", () => {
    const emojiDisplay = document.getElementById("emoji");
    const resultDisplay = document.getElementById("result");
    const spinButton = document.getElementById("spin-btn");

  
    const options = [
      { color: "Baby Pink", design: "French Tips", emoji: "💗" },
      { color: "Lavender", design: "Swirls", emoji: "💜" },
      { color: "Mint Green", design: "Glitter", emoji: "☘️" },
      { color: "Nude", design: "Minimalist Lines", emoji: "🤎" },
      { color: "Red", design: "Hearts", emoji: "❤️" },
      { color: "Sky Blue", design: "Clouds", emoji: "☁️" },
      { color: "White", design: "French Tips", emoji: "🤍" },
      { color: "Peach", design: "Flowers", emoji: "🌸" }
    ];
  
    function spin() {
      let spinCount = 10;
      let interval = 100;
      let i = 0;
  
      const spinner = setInterval(() => {
        const temp = options[Math.floor(Math.random() * options.length)];
        emojiDisplay.textContent = temp.emoji;
        resultDisplay.textContent = "Spinning...";
        i++;
  
        if (i >= spinCount) {
          clearInterval(spinner);
          const final = options[Math.floor(Math.random() * options.length)];
  
          setTimeout(() => {
            emojiDisplay.textContent = final.emoji;
            resultDisplay.textContent = `Color: ${final.color} • Design: ${final.design}`;
            showSparkle();
          }, 300);
        }
      }, interval);
    }
  
    function showSparkle() {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.textContent = "✨";
      document.body.appendChild(sparkle);
  
      sparkle.style.top = `${Math.random() * window.innerHeight}px`;
      sparkle.style.left = `${Math.random() * window.innerWidth}px`;
  
      setTimeout(() => {
        sparkle.remove();
      }, 800);
    }
  
    spinButton.addEventListener("click", spin);
  });
  