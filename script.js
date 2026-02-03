// STEP 1: Calendar → Infinity
let year = 2023;
const yearEl = document.getElementById("year");

let interval = setInterval(() => {
  year++;
  yearEl.textContent = year;

  if (year === 2050) {
    clearInterval(interval);
    setTimeout(() => {
      yearEl.textContent = "∞";
      setTimeout(() => {
        document.getElementById("calendar").classList.add("hidden");
        document.getElementById("card").classList.remove("hidden");
      }, 1000);
    }, 800);
  }
}, 100);

// STEP 2 → STEP 3
function showQuestion() {
  document.getElementById("card").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");
}

// STEP 4: No button escape + swap
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // swap size
  yesBtn.style.fontSize = "26px";
});

noBtn.addEventListener("click", () => {
  let yesPos = yesBtn.getBoundingClientRect();
  let noPos = noBtn.getBoundingClientRect();

  noBtn.style.left = yesPos.left + "px";
  noBtn.style.top = yesPos.top + "px";
});
document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="yes-screen">
      <h1>Eeeeee! 💖🥰</h1>
      <h2>I love da my kiruka</h2>
      <img src="https://media.tenor.com/huBeO_j21zYAAAAi/iphone-12-emojis.gifs" />
    </div>
    <audio autoplay loop>
      <source src="https://www.bensound.com/bensound-music/bensound-love.mp3">
    </audio>
  `;

  createHearts();
});
