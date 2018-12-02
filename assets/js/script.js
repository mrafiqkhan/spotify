const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

function Audio() {
  this.currentlyPlaying = '';
  this.isPlaying = false;
  this.audio = document.createElement("audio");

  this.setTrack = function (src) {
      this.audio.src = src;

    },
    this.play = function () {
      this
        .audio
        .play();
      this.isPlaying = true;
      playButton.style.display = "none";
      pauseButton.style.display = "inline-block";
    },
    this.pause = function () {
      this
        .audio
        .pause();
      this.isPlaying = false;
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
    playingSongStatus = setInterval(checkSongStatus, 1000);
  });

}

function playSong() {
  audioElement.play();
}

function pauseSong() {
  audioElement.pause();
}

function checkSongStatus() {

  if (audioElement.audio.currentTime == audioElement.audio.duration) {
    audioElement.pause();
    audioElement.audio.currentTime = 0;
    mainProgressBar.value = 0;
    clearInterval(playingSongStatus);
    // clearInterval(currentTimeInterval);
    // clearInterval(remainingTimeInterval);
    document.querySelector(".current .m").innerHTML = "0";
    document.querySelector(".current .s").innerHTML = "00";
  }
}

function songProgressBar() {
  let duration = audioElement.duration;
  mainProgressBar.setAttribute('max', Math.floor(duration));
  mainProgressBar.style.width = (100 + "%");
  currentTimeInterval = setInterval(getCurrentTime, 1000);
  remainingTimeInterval = setInterval(getRemainingTime, 1000);

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

function forwardSong(e) {
  e = e || window.event;
  const setProgressBar = Math.round(e.offsetX / (mainProgressBar.offsetWidth / mainProgressBar.max));
  mainProgressBar.value = setProgressBar;
  audioElement.audio.currentTime = setProgressBar;
}

function getRemainingTime() {
  const currentTimeOfSong = audioElement.audio.currentTime;

}

function setVolume(e) {
  e = e || window.event;
  const setVolumeSize = e.offsetX;
  // console.log(setVolumeSize);
  audioElement.audio.volume = Math.round((setVolumeSize / 147) * 100) / 100;

  const currentVolume = setVolumeSize;
  const volumeWidth = volume.offsetWidth;
  // console.log(`${currentVolume} ${volumeWidth} ${Math.round((setVolumeSize/147) * 100) / 100}`);
  volume.setAttribute("value", currentVolume);
}

function muteSong() {
  audioElement.audio.muted = true;
  muteBtn.style.display = "block";
  volumeBtn.style.display = "none";
}

function unmuteSong() {
  audioElement.audio.muted = false;
  muteBtn.style.display = "none";
  volumeBtn.style.display = "block";
}
/* ============================================================================================ */
/* ============================================================================================ */
/* ============================================================================================ */
/* ============================================================================================ */
audioElement = new Audio();
audioElement.muted = "muted";
playButton.addEventListener("click", playSong);
window.addEventListener("keyup", (e) => {
  if (e.charCode === 0) {
    if (audioElement.isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  }
});
mainProgressBar.addEventListener("click", forwardSong);
pauseButton.addEventListener("click", pauseSong);
volume.addEventListener("click", setVolume);
volumeBtn.addEventListener("click", muteSong);
muteBtn.addEventListener("click", unmuteSong);