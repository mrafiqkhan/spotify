// function Audio(){   this.currentlyPlaying;   this.audio =
// document.createElement("audio");   this.setTrack = function (src){
// this.audio.src = src;   } }

// let currentPlaylist;
// let audioElement;

// currentPlaylist = new Array(<?php echo  $jsonArray; ?>);

// const nowPlayingBarContainer = document.querySelector("#nowPlayingBarContainer");
let currentPlaylist = [];
const mainProgressBar = document.querySelector("#mainProgressBar");
const remaining = document.querySelector(".playbackBar .remaining");
const current = document.querySelector(".playbackBar .current");
const trackName = document.querySelector(".trackInfo .trackName");
const artistName = document.querySelector(".trackInfo .artistName");
const albumThumbnail = document.querySelector(".albumLink img");

const volume = document.querySelector(".volumeBar .progress");
const volumeBtn = document.querySelector("#nowPlayingRight .volume");
const muteBtn = document.querySelector("#nowPlayingRight .mute");
const nextBtn = document.querySelector(".controlButton.next");
const prevBtn = document.querySelector(".controlButton.previous");
let playingSongStatus = null;
let currentTimeInterval= null;
let remainingTimeInterval = null;
