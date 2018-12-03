const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

function Audio() {
  this.currentlyPlaying = '';
  this.isPlaying = false;
  this.isMuted = false;
  this.audio = document.createElement("audio");

  this.setTrack = function (track) {
    this.currentlyPlaying = track;
    this.audio.src = "assets/music/" + track.path;

  };
  this.play = function () {
    this
      .audio
      .play();
    this.isPlaying = true;
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  };
  this.pause = function () {
    this
      .audio
      .pause();
    this.isPlaying = false;
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
  };
  this.muteSong = function () {
    this.isMuted = true;
    audioElement.audio.muted = true;
    muteBtn.style.display = "block";
    volumeBtn.style.display = "none";
  };
  this.unmuteSong = function () {
    this.isMuted = false;
    audioElement.audio.muted = false;
    muteBtn.style.display = "none";
    volumeBtn.style.display = "block";
  }
}

function setTrack(trackId, newPlaylist, play) {

  $.post("includes/handlers/ajax/getSongJson.php", {
    songId: trackId,
    calledFor: "setTrack"
  }, function (data) {
    const track = JSON.parse(data);
    //  console.log(data);
    nowPlayingBarContainer.style.bottom = '0';
    trackName.innerText = track.title;
    artistName.innerText = track.artist;
    albumThumbnail.src = track.albumImg;
    audioElement.setTrack(track);
    songProgressBar();
    playSong(track.id);
    playingSongStatus = setInterval(checkSongStatus, 1000);
  });

}

function playSong(id) {
  if (audioElement.audio.currentTime === 0) {

    $.post("includes/handlers/ajax/getSongJson.php", {
      songId: id,
      calledFor: "updatePlayCount"
    });
  }
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
    document.querySelector(".current .m").innerText = "0";
    document.querySelector(".current .s").innerText = "00";
    document.querySelector(".remaining .m").innerText = "0";
    document.querySelector(".remaining .s").innerText = "00";

  }
}

function songProgressBar() {
  const duration = audioElement.duration;
  mainProgressBar.setAttribute('max', Math.floor(duration));
  mainProgressBar.style.width = (100 + "%");
  currentTimeInterval = setInterval(getCurrentTime, 1000);
  remainingTimeInterval = setInterval(getRemainingTime, 1000);

}
/* Track current played time of the song and update the progress bar according */
function getCurrentTime() {
  const currentTimeOfSong = audioElement.audio.currentTime;
  const dur = audioElement.audio.duration;
  const m = Math.floor(currentTimeOfSong / 60);
  const s = Math.floor(currentTimeOfSong % 60);
  mainProgressBar.setAttribute("max", Math.floor(dur));
  mainProgressBar.setAttribute("value", Math.floor(currentTimeOfSong));
  const currentTimeMin = document.querySelector(".current .m");
  const currentTimeSec = document.querySelector(".current .s");
  currentTimeSec.innerText = (s < 10 ? "0" + s : s);
  currentTimeMin.innerText = m;
}

function forwardSong(e) {
  e = e || window.event;
  const setProgressBar = Math.round(e.offsetX / (mainProgressBar.offsetWidth / mainProgressBar.max));
  mainProgressBar.value = setProgressBar;
  audioElement.audio.currentTime = setProgressBar;
}

function getRemainingTime() {
  const currentTimeOfSong = audioElement.audio.currentTime;
  const duration = audioElement.audio.duration;
  const timeRemains = duration - currentTimeOfSong;
  const m = Math.floor(timeRemains / 60);
  const s = Math.floor(timeRemains % 60);
  const remainingTimeMin = document.querySelector(".remaining .m");
  const remainingTimeSec = document.querySelector(".remaining .s");
  remainingTimeSec.innerText = (s < 10 ? "0" + s : s);
  remainingTimeMin.innerText = m
}

function setVolume(e) {
  e = e || window.event;
  const setVolumeSize = e.offsetX;
  if (audioElement.isMuted) {
    audioElement.unmuteSong();
  }
  const setVolume = Math.round((setVolumeSize / 147) * 100) / 100;
  audioElement.audio.volume = setVolume > 1 ? 1 : setVolume;

  const currentVolume = setVolumeSize;
  const volumeWidth = volume.offsetWidth;
  // console.log(`${currentVolume} ${volumeWidth} ${Math.round((setVolumeSize/147) * 100) / 100}`);
  volume.setAttribute("value", currentVolume);
}

function muteSong() {
  audioElement.muteSong();
}

function unmuteSong() {
  audioElement.unmuteSong();
}
/* ============================================================================================ */
/* ============================================================================================ */
/* ============================================================================================ */
/* ============================================================================================ */
audioElement = new Audio();
audioElement.muted = "muted";
playButton.addEventListener("click", playSong);
window.addEventListener("keyup", (e) => {
  if (e.keyCode === 32) {
    if (audioElement.isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }
});
mainProgressBar.addEventListener("click", forwardSong);
pauseButton.addEventListener("click", pauseSong);
volume.addEventListener("click", setVolume);
volumeBtn.addEventListener("click", muteSong);
muteBtn.addEventListener("click", unmuteSong);