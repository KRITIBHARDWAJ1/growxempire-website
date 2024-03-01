document.addEventListener('DOMContentLoaded', function () {
    // Button to redirect to Calendly link
    const openFormBtn = document.getElementById('openFormBtn');
    openFormBtn.addEventListener('click', function () {
        window.location.href = 'https://calendly.com/growxempire/15-min-instagram-scaling-strategy-session';
    });
});
// Add this script to your existing JavaScript or in a separate file
function openCalendly() {
    window.location.href = 'https://calendly.com/growxempire/15-min-instagram-scaling-strategy-session';
}


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-item video');

    videos.forEach(video => {
        video.addEventListener('play', function () {
            pauseOtherVideos(video);
        });
    });
});

function pauseOtherVideos(currentVideo) {
    const allVideos = document.querySelectorAll('.video-item video');

    allVideos.forEach(video => {
        if (video !== currentVideo && !video.paused) {
            video.pause();
        }
    });
}
