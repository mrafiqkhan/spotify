const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

function Audio() {
  this.currentlyPlaying = '';
  this.isPlaying = false;
  this.isMuted = false;
  this.audio = document.createElement("audio");
  this.audio.addEventListener("canplay", () => {
    let duration = formatTime(this.audio.duration);
    document.querySelector(".progressTime.remaining").innerText = duration;
  });
  this.audio.addEventListener("timeupdate", () => {
    if (this.audio.duration) {
      updateTimeProgressBar(this.audio);
    }
  });
  this.audio.addEventListener("ended", () => {
    // if (currentPlaylist.length > 1) {
    //   // playNextSong();
    // }
    this.pause();
    mainProgressBar.setAttribute('value', 0);
  });
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
  };
}

function setTrack(trackId, newPlaylist, play) {

  $.post("includes/handlers/ajax/getSongJson.php", {
    songId: trackId,
    calledFor: "setTrack"
  }, (data) => {
    const track = JSON.parse(data);
    //  console.log(data);
    nowPlayingBarContainer.style.bottom = '0';
    trackName.innerText = track.title;
    artistName.innerText = track.artist;
    albumThumbnail.src = track.albumImg;
    audioElement.setTrack(track);
    // songProgressBar();
    playSong(track.id);
    // playingSongStatus = setInterval(checkSongStatus, 1000);
  });

}

function formatTime(seconds) {
  let time = Math.round(seconds);
  let minutes = Math.floor(time / 60);
  let second = time - (minutes * 60);
  second = (second < 10) ? "0" + second : second;
  return minutes + ":" + second;
}

function playSong(id) {

  $.post("includes/handlers/ajax/getSongJson.php", {
    songId: id,
    calledFor: "updatePlayCount"
  }, () => audioElement.play());

}

function pauseSong() {
  audioElement.pause();
}

function updateTimeProgressBar(audio) {

  mainProgressBar.setAttribute('max', Math.floor(audio.duration));
  mainProgressBar.setAttribute('value', Math.floor(audio.currentTime));
  mainProgressBar.style.width = (100 + "%");
  document.querySelector(".progressTime.current").innerText = formatTime(audio.currentTime);
  document.querySelector(".progressTime.remaining").innerText = formatTime(audio.duration - audio.currentTime);
}

function forwardSong(e) {
  e = e || window.event;
  const setProgressBar = Math.round(e.offsetX / (mainProgressBar.offsetWidth / mainProgressBar.max));
  mainProgressBar.value = setProgressBar;
  audioElement.audio.currentTime = setProgressBar;
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
playButton.addEventListener("click", () => {
  playSong(audioElement.currentlyPlaying.songId);
});
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
muteBtn.addEventListener('click', unmuteSong);