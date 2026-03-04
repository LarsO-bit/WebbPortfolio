const songName = document.getElementById("song-name");

const songSlider = document.getElementById("song-slider");

const playAndPause = document.getElementById("playpause");

const prev = document.getElementById("backward");
const next = document.getElementById("forward");

const songs = [
    {
        name: "NR1",
        audio: "/Sounds/NR1.mp3"
    },
    {
        name: "NR2",
        audio: "/Sounds/NR2.mp3"
    },
    {
        name: "NR3",
        audio: "/Sounds/NR3.mp3"
    }
];   

const audio = document.createElement("audio")
let currentSongInd = 0;
update();

prev.addEventListener("click", function(){
    if (currentSongInd == 0){
        return;
    }
    currentSongInd--;
    update();
});

next.addEventListener("click", function(){
    if (currentSongInd == songs.length - 1){
        return;
    }
    currentSongInd++;
    update();
});

playAndPause.addEventListener("click", function(){
    audio.play();
})

function update() {
    const song = songs[currentSongInd];
    songName.innerText = song.name
    audio.src = song.audio
}