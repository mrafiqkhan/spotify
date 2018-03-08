let currentPlayingSongInfo = '';
let currentInterval = '';
const nowPlayingBarProgress = document.querySelector("#mainProgressBar");
nowPlayingBarProgress.setAttribute("value", 0);
nowPlayingBarProgress.style.width = "0%";
const nowPlayingBar = document.querySelector("#nowPlayingBarContainer");
const navBarContainer = document.querySelector("#navBarContainer");
const nowPlayingBarCurrentTime = document.querySelector(".current");
const nowPlayingBarRemaining = document.querySelector(".remaining");
const nowPlayingBarPlay = document.querySelector(".play");
const nowPlayingBarPause = document.querySelector(".pause");

const nowPlayingBarAlbumArt = document.querySelector("#nowPlayingBar img.albumArtwork");
const nowPlayingBarTrackName = document.querySelector("#nowPlayingBar .trackName");
const nowPlayingBarArtistName = document.querySelector("#nowPlayingBar .artistName");
