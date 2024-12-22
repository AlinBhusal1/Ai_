
// Number increasing effect
document.addEventListener("DOMContentLoaded", () => {
    const stats = [
        { id: "ai-uses", start: 0, end: 50, duration: 3000 },
        { id: "ai-tools", start: 0, end: 200, duration: 3000 }
    ];

    stats.forEach(stat => {
        const element = document.getElementById(stat.id);
        let current = stat.start;
        const increment = (stat.end - stat.start) / (stat.duration / 50);
        const timer = setInterval(() => {
            current += increment;
            if (current >= stat.end) {
                current = stat.end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 50);
    });
});

// 3D Scroll Animation
const canvas = document.getElementById("hero-animation");
const context = canvas.getContext("2d");
const frameCount = 148; // Total number of frames
const currentFrame = index => `frames/male${String(index).padStart(4, "0")}.png`;

const images = [];
const hero = { frame: 0 };

for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

images[0].onload = () => {
    context.drawImage(images[0], 0, 0);
};

const updateImage = index => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[index], 0, 0);
};

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    requestAnimationFrame(() => updateImage(frameIndex));
});

// Music box hover effect
const musicBox = document.querySelector(".music-hover");
const audio = document.getElementById("music");

musicBox.addEventListener("mouseover", () => {
    audio.play();
});

musicBox.addEventListener("mouseout", () => {
    audio.pause();
});
