let nowPlaying = document.querySelector(".now-playing");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

let playPauseBtn = document.querySelector(".play-pause-track");
let prevBtn = document.querySelector(".prev-track");
let nextBtn = document.querySelector(".next-track");
let repeatBtn = document.querySelector(".repeat-track");

let seekSlider = document.querySelector(".seek-slider");
let volumeSlier = document.querySelector(".volume-slider");
let currentTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");
let currentTrack = document.createElement("audio");

let trackIndex = 0;
let isPlay = false;
let updateTimer;

playPauseBtn.addEventListener("click", playPauseTrack());
prevBtn.addEventListener("click", playPrevTrack());
nextBtn.addEventListener("click", playNextTrack());
repeatBtn.addEventListener("click", repeatTrack());

let myRequest = new XMLHttpRequest();
myRequest.open("GET");
myRequest.send();
console.log(myRequest);

/* ------------- // button Functions ------------ */

function playPauseTrack() {
  if (playPauseBtn.classList.contains("play")) {
    playPauseBtn.classList.remove("play");
    playPauseBtn.classList.add("pause");
  } else {
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
  }
}

function playPrevTrack() {
  audio.currentTime = 0;
}

function playNextTrack() {
  audio.currentTime = 0;
}

function repeatTrack() {
  if (repeatBtn.classList.contains("repeat")) {
    repeatBtn.classList.remove("repeat");
    repeatBtn.classList.add("repeat-one");
  } else if (repeatBtn.classList.contains("repeat-one")) {
    repeatBtn.classList.remove("repeat-one");
    repeatBtn.classList.add("repeat");
  }
}

function seekTo(e) {
  let percent = e.offsetX / this.offsetWidth;
  audio.currentTime = percent * audio.duration;
}
function setVolume(e) {
  let percent = e.offsetX / this.offsetWidth;
  audio.volume = percent;
}

seekTo();
setVolume();
playPrevTrack();
repeatTrack();
