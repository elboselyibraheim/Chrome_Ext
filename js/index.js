let nowPlaying = document.querySelector(".now-playing");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

let playPauseBtn = document.querySelector(".play-pause-track");
let prevBtn = document.querySelector(".prev-track");
let nextBtn = document.querySelector(".next-track");
// let repeatBtn = document.querySelector(".repeat-track");

let seekSlider = document.querySelector(".seek-slider");
let volumeSlier = document.querySelector(".volume-slider");
let currentTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");
let currentTrack = document.createElement("audio");

let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

/* -------------- functions calling ----------- */
playPauseBtn.addEventListener("click", playPauseTrack());
prevBtn.addEventListener("click", playPrevTrack());
nextBtn.addEventListener("click", playNextTrack());
repeatBtn.addEventListener("click", repeatTrack());

/* --------------- loadTrack --------------- */
trackName.innerHTML = data.surahs[trackIndex].name;
loadTrack(trackIndex);


function loadTrack(trackIndex) {
  clearInterval(updateTimer);
  reset();

  currentTrack.src = data.surahs[trackIndex].name;
  trackName.textContent = data.surahs[trackIndex].name;

  currentTrack.src = suras_names[trackIndex].sura;
  currentTrack.load();

  updateTimer = setInterval(setUpdate, 1000);
  currentTrack.addEventListener("ended", playNextTrack);
}

get();
// /* ------------- button Functions ------------ */

function reset() {
  currentTime.textContent = "00:00";
  totalDuration.textContent = "00:00";
  seekSlider.value = 0;
}
function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  playNextTrack();
}
function pauseRandom() {
  isRandom = false;
  playNextTrack();
}

function repeatTrack() {
  let currentIndex = trackIndex;
  loadTrack(currentIndex);
  playTrack();
}

function playPauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}
function playTrack() {
  currentTrack.play();
  isPlaying = true;
  playPauseBtn.classList.add("play");
  playPauseBtn.innerHTML = '<i class="fas fa-play-circle fa-5x"></i>';
}
function pauseTrack() {
  currentTrack.pause();
  isPlaying = false;
  playPauseBtn.classList.add("pause");
  playPauseBtn.innerHTML = '<i class="fas fa-pause-circle fa-5x"></i>';
}

function playNextTrack() {
  if (trackIndex < suras_names.length - 1 && isRandom === false) {
    trackIndex += 1;
  } else if (trackIndex < suras_names.length - 1 && isRandom === true) {
    let randomIndex = Number.parseInt(Math.random() * sura_names.length);
    trackIndex = randomIndex;
  } else {
    trackIndex = 0;
  }
  loadTrack(trackIndex);
  playTrack();
}
function playPrevTrack() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    loadTrack(trackIndex);
    playTrack();
  }
}
function repeatTrack() {
  let currentIndex = trackIndex;
  loadTrack(currentIndex);
  playTrack();
}
function seekTo() {
  let seekTo = currentTrack * (seekSlider.value / 100);
  currentTrack.currentTime = seekTo;
}
function setVolume() {
  currentTrack.volume = volumeSlier.value / 100;
}
function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(currentTrack.duration)) {
    seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
    seekSlider.value = seekPosition;

    let currentMinutes = Math.floor(currentTrack.currentTime / 60);
    let currentSeconds = Math.floor(
      currentTrack.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(currentTrack.duration / 60);
    let durationSeconds = Math.floor(
      currentTrack.duration - durationMinutes * 60
    );
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationSeconds < 10) {
      durationMinutes = "0" + durationMinutes;
    }
    currentTime.textContent = currentMinutes + ":" + currentSeconds;
    totalDuration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

/* ------------- call function--------------- */
seekTo();
setVolume();
playPrevTrack();
repeatTrack();
playPauseTrack();
