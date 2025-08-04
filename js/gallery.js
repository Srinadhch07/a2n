// Optional: Animate stats on scroll
const stats = document.querySelectorAll('.stat h2');
let started = false;

function animateStats() {
    stats.forEach(stat => {
        const target = +stat.innerText.replace(/\D/g,'');
        let count = 0;
        const increment = target / 100;
        const updateCount = () => {
            count += increment;
            if (count < target) {
                stat.innerText = Math.floor(count) + "+";
                requestAnimationFrame(updateCount);
            } else {
                stat.innerText = target + "+";
            }
        };
        updateCount();
    });
}

window.addEventListener('scroll', () => {
    const achievements = document.querySelector('.achievements-bar');
    const rect = achievements.getBoundingClientRect();
    if (!started && rect.top < window.innerHeight) {
        started = true;
        animateStats();
    }
});
