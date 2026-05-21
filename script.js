const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const skip = document.querySelector('.skip');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress__filled');

// PLAY / PAUSE
toggle.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
});

// REWIND 10s
rewind.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

// SKIP 25s
skip.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

// VOLUME CONTROL
volume.addEventListener('input', () => {
    video.volume = volume.value;
});

// SPEED CONTROL
playbackSpeed.addEventListener('input', () => {
    video.playbackRate = playbackSpeed.value;
});

// PROGRESS BAR
video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + '%';
});