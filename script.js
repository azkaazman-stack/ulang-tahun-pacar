// GANTI NAMA DI BAWAH INI DENGAN NAMA PANGGILAN PASANGANMU
const namaPasangan = "Sayang";
document.getElementById("partnerName").textContent = namaPasangan;

// Musik hanya akan diputar setelah tombol disentuh (aturan browser).
const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add("playing");
      musicToggle.innerHTML = "♫ <span>Jeda musik</span>";
    } catch (error) {
      alert("Pastikan file music/lagu.mp3 sudah ditambahkan.");
    }
  } else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicToggle.innerHTML = "♫ <span>Putar musik</span>";
  }
});

// Animasi hati yang melayang.
const heartLayer = document.querySelector(".floating-hearts");
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 22) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 14500);
}
setInterval(createHeart, 650);

// Tiup lilin dengan klik.
const candles = [...document.querySelectorAll(".candle")];
const cakeMessage = document.getElementById("cakeMessage");
candles.forEach(candle => {
  candle.addEventListener("click", () => {
    candle.classList.add("blown");
    if (candles.every(item => item.classList.contains("blown"))) {
      cakeMessage.textContent = "Yeay! Semua lilin sudah padam. Semoga semua harapanmu terkabul! ✨💗";
      launchConfetti(90);
    } else {
      cakeMessage.textContent = "Satu harapan sudah kamu kirim ke semesta. Lanjutkan! 💕";
    }
  });
});
document.getElementById("relight").addEventListener("click", () => {
  candles.forEach(candle => candle.classList.remove("blown"));
  cakeMessage.textContent = "Lilin sudah menyala lagi. Buat harapan baru! 🎂";
});

// Confetti buatan CSS, tanpa library tambahan.
function launchConfetti(amount = 130) {
  const colors = ["#e77b9d", "#f6c5d4", "#ffd166", "#c8a2c8", "#ffffff"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 1.2) + "s";
    piece.style.animationDuration = (2.2 + Math.random() * 2) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}
document.getElementById("confettiBtn").addEventListener("click", () => {
  launchConfetti(180);
});
