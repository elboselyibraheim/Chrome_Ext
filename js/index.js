let nowPlaying = document.querySelector(".now-playing");
let trackName = document.querySelector(".track-name");
let trackArtist = document.querySelector(".track-artist");

let playPauseBtn = document.querySelector(".play-pause-track");

let prevTrack = document.querySelector(".prev-track");
let nextTrack = document.querySelector(".next-track");
let repeatTrack = document.querySelector(".repeat-track");

// function to play/pause track
function playPauseTrack() {
	