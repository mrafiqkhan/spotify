// function Audio(){   this.currentlyPlaying;   this.audio =
// document.createElement("audio");   this.setTrack = function (src){
// this.audio.src = src;   } }

let currentPlaylist;
let shufflePlaylist;
let tempPlaylist;
let mouseDown = false;
let currentIndex = 0;
let repeat = false;
let shuffle = false;
// let audioElement;

// currentPlaylist = new Array(<?php echo  $jsonArray; ?>);

// const nowPlayingBarContainer = document.querySelector("#nowPlayingBarContainer");
const mainProgressBar = document.querySelector("#mainProgressBar");

const remaining = document.querySelector(".playbackBar .remaining");
const current = document.querySelector(".playbackBar .current");
const trackName = document.querySelector(".trackInfo .trackName");
const artistName = document.querySelector(".trackInfo .artistName");
const albumThumbnail = document.querySelector(".albumLink img");
const nextBtn = document.querySelector('.controlButton.next');
const prevBtn = document.querySelector('.controlButton.previous');
const repeatBtn = document.querySelector('.controlButton.repeat');
const shuffleBtn = document.querySelector('.controlButton.shuffle');

const volume = document.querySelector(".volumeBar .progress");
const volumeBtn = document.querySelector("#nowPlayingRight .volume");
const muteBtn = document.querySelector("#nowPlayingRight .mute");

/* let playingSongStatus;
let currentTimeInterval;
let remainingTimeInterval; */