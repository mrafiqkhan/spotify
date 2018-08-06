// function Audio(){   this.currentlyPlaying;   this.audio =
// document.createElement("audio");   this.setTrack = function (src){
// this.audio.src = src;   } }

// let currentPlaylist;
// let audioElement;

// currentPlaylist = new Array(<?php echo  $jsonArray; ?>);

const nowPlayingBarContainer = document.querySelector("#nowPlayingBarContainer");
const nowPlayingBarTrack = document.querySelector("#nowPlayingBarContainer .trackName");
const nowPlayingBarArtist = document.querySelector("#nowPlayingBarContainer .artistName");
const progressBar = document.querySelector("#nowPlayingBarContainer .progress");
