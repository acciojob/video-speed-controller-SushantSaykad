const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;

    // Limit between 0 and 1
    const boundedPercent = Math.min(Math.max(percent, 0), 1);

    // Playback speed range: 0.4x to 4x
    const min = 0.4;
    const max = 4;
    const height = `${boundedPercent * 100}%`;
    const playbackRate = boundedPercent * (max - min) + min;

    speedBar.style.height = height;
    speedBar.textContent = `${playbackRate.toFixed(2)}×`;

    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);