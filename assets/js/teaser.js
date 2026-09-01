function updateCountdown() {
    const targetDate = new Date('2026-10-01T00:00:00');
    const now = new Date();
    const diff = targetDate - now;

    const totalSeconds = Math.floor(diff / 1000);

    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor((totalSeconds % 86400) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    if (diff <= 0) {
        days = hours = minutes = seconds = 0;
    }

    const pad = n => String(n).padStart(2, '0');

    document.getElementById('countdown').textContent =
        `Faltam ${days} dias, ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
