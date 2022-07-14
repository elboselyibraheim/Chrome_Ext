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
let isPlaying = false;
let updateTimer;

playPauseBtn.addEventListener("click", playPauseTrack());
prevBtn.addEventListener("click", playPrevTrack());
nextBtn.addEventListener("click", playNextTrack());
repeatBtn.addEventListener("click", repeatTrack());

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET");
// myRequest.send();
// console.log(myRequest);

/* ------------- button Functions ------------ */

/* ------------------------------------ - ----------------------------------- */

function reset() {
  currentTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
  seekSlider.value = 0;
}

/* ------------------------------------ - ----------------------------------- */

function playPauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPauseBtn.classList.add("play");
  playPauseBtn.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPauseBtn.classList.add("pause");
  playPauseBtn.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}

function playPrevTrack() {
  audio.currentTime = 0;
  prevBtn.classList.add("active");
  prevBtn.innerHTML = "fas fa-step-backward-circle fa-2x";
}

function playNextTrack() {
  audio.currentTime = 0;
  nextBtn.classList.add("active");
  nextBtn.innerHTML = "fas fa-step-forward-circle fa-2x";
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

// function showTime(time) {
// 	let min = Math.floor(time / 60);
// 	let sec = Math.floor(time % 60);
// 	if (sec < 10) {
// 		sec = "0" + sec;
// 	}
// 	return min + ":" + sec;
// }
/* ------------- call function--------------- */
seekTo();
setVolume();
playPrevTrack();
repeatTrack();
playPauseTrack();
