const songName = document.getElementById("song-name");

const songSlider = document.getElementById("song-slider");

const playAndPause = document.getElementById("playpause");

const prev = document.getElementById("backward");
const next = document.getElementById("forward");

const isGitHub = window.location.hostname.includes("github.io");
const BASE = isGitHub ? "/WebbPortfolio" : "";

const songs = [
    { name: "NR1", audio: `${BASE}/Sounds/NR1.mp3` },
    { name: "NR2", audio: `${BASE}/Sounds/NR2.mp3` },
    { name: "NR3", audio: `${BASE}/Sounds/NR3.mp3` },
];

const audio = document.createElement("audio")
let currentSongInd = 0;

updateSong();

prev.addEventListener("click", function(){
    if (currentSongInd == 0){
        return;
    }

    const wasPlaying = !audio.paused;

    currentSongInd--;
    updateSong();

    if (wasPlaying) {
        audio.play();
    }
});

next.addEventListener("click", function(){
    if (currentSongInd == songs.length - 1){
        return;
    }

    const wasPlaying = !audio.paused;

    currentSongInd++;
    updateSong();

    if (wasPlaying) {
        audio.play();
    }
});

playAndPause.addEventListener("click", function(){
    if (audio.paused) {
        audio.play();

        playAndPause.classList.remove("fa-circle-play");
        playAndPause.classList.add("fa-circle-pause");
    }
    else{
        audio.pause();

        playAndPause.classList.remove("fa-circle-pause");
        playAndPause.classList.add("fa-circle-play");
    }
})

audio.addEventListener("ended", function(){

    if (currentSongInd < songs.length - 1){
        currentSongInd++;
        updateSong();
        audio.play();
    }

});

function updateSong() {
    const song = songs[currentSongInd];
    songName.innerText = song.name
    audio.src = song.audio

    audio.onloadedmetadata = function () {
        songSlider.max = audio.duration;
        document.getElementById("total-time").innerText = formatTime(audio.duration);
    };
};

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function updateSlider() {
    songSlider.value = audio.currentTime
};

setInterval(updateSlider, 1000);

audio.addEventListener("timeupdate", function () {
    songSlider.value = audio.currentTime;
    document.getElementById("current-time").innerText = formatTime(audio.currentTime);
});

songSlider.addEventListener("change", function () {
    audio.currentTime = songSlider.value;
});


