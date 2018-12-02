const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

function Audio() {
  this.currentlyPlaying = '';
  this.audio = document.createElement("audio");

  this.setTrack = function (src) {
      this.audio.src = src;

    },
    this.play = function () {
      this
        .audio
        .play();
      playButton.style.display = "none";
      pauseButton.style.display = "inline-block";
    },
    this.pause = function () {
      this
        .audio
        .pause();
      pauseButton.style.display = "none";
      playButton.style.display = "inline-block";
    }
}

function setTrack(trackId, newPlaylist, play) {

  $.post("includes/handlers/ajax/getSongJson.php", {
    songId: trackId
  }, function (data) {
    const track = JSON.parse(data);
    //  console.log(data);
    nowPlayingBarContainer.style.bottom = '0';
    trackName.innerText = track.title;
    artistName.innerText = track.artist;
    albumThumbnail.src = track.albumImg;
    audioElement.setTrack("assets/music/" + track.path);
    songProgressBar();
    playSong();

  });

}

function playSong() {
  audioElement.play();
}

function pauseSong() {
  audioElement.pause();
}

function songProgressBar() {
  let duration = audioElement.duration;
  mainProgressBar.setAttribute('max', Math.floor(duration));
  mainProgressBar.style.width = (100 + "%");
  currentInterval = setInterval(getCurrentTime, 1000);
  currentInterval = setInterval(getRemaingTime, 1000);

}

function getCurrentTime() {

  const currentTimeOfSong = audioElement.audio.currentTime;
  mainProgressBar.setAttribute("max", Math.floor(audioElement.audio.duration));
  mainProgressBar.setAttribute("value", Math.floor(currentTimeOfSong));
  let minutes = Math.floor(audioElement.audio.duration / 60);
  let seconds = Math.floor(audioElement.audio.duration - minutes * 60);
  let dur = audioElement.audio.duration;

  let m = Math.floor(currentTimeOfSong / 60);
  let s = Math.floor(currentTimeOfSong % 60);
  currentTimeMin = document.querySelector(".current .m");
  currentTimeSec = document.querySelector(".current .s");
  currentTimeSec.innerHTML = (s < 10 ? "0" + s : s);
  currentTimeMin.innerHTML = m;

}

function getRemaingTime() {
  const currentTimeOfSong = audioElement.audio.currentTime;

}

function setVolume(e) {
  console.log(e.target.offsetX);
}

/* ============================================================================================ */
/* ============================================================================================ */
/* ============================================================================================ */
/* ============================================================================================ */
audioElement = new Audio();
audioElement.muted = "muted";
playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);
volume.addEventListener("click", setVolume);