
// عناصر الموقع
const music = document.getElementById("loveMusic");
const musicBtn = document.getElementById("musicBtn");
const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");
const messageSection = document.getElementById("messageSection");

// تاريخ بداية الحكاية
const startDate = new Date(2026, 10, 13, 0, 0, 0);

// عداد الحب
function updateCounter() {
    const now = new Date();
    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

// تشغيل وإيقاف الموسيقى
musicBtn.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicBtn.textContent = "♫ إيقاف الموسيقى";
        } catch (error) {
            musicBtn.textContent = "تعذر تشغيل الموسيقى";
        }
    } else {
        music.pause();
        musicBtn.textContent = "♫ تشغيل الموسيقى";
    }
});

// زر المفاجأة
startBtn.addEventListener("click", () => {
    document.getElementById("letterSection").scrollIntoView({
        behavior: "smooth"
    });
});

// فتح الظرف
envelope.addEventListener("click", () => {
    if (!envelope.classList.contains("open")) {
        envelope.classList.add("open");

        setTimeout(() => {
            messageSection.classList.add("show");

            messageSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 900);
    }
});

// صناعة القلوب المتحركة
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.opacity = 0.3 + Math.random() * 0.6;

    const duration = 5 + Math.random() * 6;
    heart.style.animationDuration = duration + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 450);
