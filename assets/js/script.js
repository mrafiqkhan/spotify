const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");

function Audio() {
  this.currentlyPlaying = '';
  this.isPlaying = false;
  this.isMuted = false;
  this.audio = document.createElement("audio");
  this.audio.addEventListener('ended', nextSong);
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
    this.audio.muted = true;
    muteBtn.style.display = "block";
    volumeBtn.style.display = "none";
  };
  this.unmuteSong = function () {
    this.isMuted = false;
    this.audio.muted = false;
    muteBtn.style.display = "none";
    volumeBtn.style.display = "block";
  };
  this.setTime = function (seconds) {
    this.audio.currentTime = seconds;
  };
}

function setTrack(trackId, newPlaylist, play) {

  if (newPlaylist != currentPlaylist) {
    currentPlaylist = newPlaylist;
    shufflePlaylist = currentPlaylist.slice();
    shuffleArray(shufflePlaylist);
  }
  if (shuffle) {
    currentIndex = shufflePlaylist.indexOf(trackId);
  } else {
    currentIndex = currentPlaylist.indexOf(trackId);
  }
  pauseSong();
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

function setVolume(e) {
  if (!e) return;
  if (!mouseDown) return;

  const vol = e.offsetX;
  let value = (vol / volume.offsetWidth).toFixed(2);
  value = value < 0 ? 0 : value;
  value = value > 1 ? 1 : value;
  audioElement.audio.volume = value;
  updateVolumeProgressBar(audioElement.audio);
}

function updateVolumeProgressBar(audio) {
  const vol = audio.volume;

  volume.setAttribute("value", vol);

}

function muteSong() {
  audioElement.muteSong();
}

function unmuteSong() {
  audioElement.unmuteSong();
}

function timeFromOffset(mouse, progressBar) {

  mouse = mouse || window.event;

  const percentage = Math.round(mouse.offsetX / (progressBar.offsetWidth / progressBar.max));
  // console.log(percentage);

  progressBar.value = percentage;
  audioElement.audio.currentTime = percentage;
}

function nextSong() {

  if (repeat) {
    audioElement.setTime(0);
    playSong();
    return;
  }
  if (currentIndex == currentPlaylist.lenght - 1) {
    currentIndex = 0;
  } else {

    currentIndex++;
  }

  trackToPlay = shuffle ? shufflePlaylist[currentIndex] : currentPlaylist[currentIndex];
  setTrack(trackToPlay, currentPlaylist, true);
}

function previousSong() {
  if (repeat) {
    audioElement.setTime(0);
    playSong();
    return;
  }
  if (currentIndex < 0) {
    currentIndex = 9;
  } else {
    currentIndex--;
  }
  setTrack(currentPlaylist[currentIndex], currentPlaylist, true);
}

function repeatSong() {

  repeat = !repeat;
  if (repeat) {
    repeatBtn.children[0].setAttribute("src", "assets/images/icons/repeat-active.png");
  } else {
    repeatBtn.children[0].setAttribute("src", "assets/images/icons/repeat.png");
  }
}

function setShuffle() {
  console.log('shuffleCalled');
  shuffle = !shuffle;
  if (shuffle) {
    shuffleBtn.children[0].setAttribute('src', "assets/images/icons/shuffle-active.png");

  } else {
    shuffleBtn.children[0].setAttribute('src', "assets/images/icons/shuffle.png");

  }
  if (shuffle) {
    // randomize Playlist

    shuffleArray(shufflePlaylist);

    currentIndex = shufflePlaylist.indexOf(audioElement.currentlyPlaying.id);
  } else {
    // shuffle has been deactivated;
    // go back to regular playlist
    currentIndex = currentPlaylist.indexOf(audioElement.currentlyPlaying.id);
  }

}

function shuffleArray(arr) {
  let j, x, i;
  for (i = arr.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = x;
  }
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

mainProgressBar.addEventListener('mousemove', (e) => {
  if (!mouseDown) return;
  timeFromOffset(e, mainProgressBar);
});
mainProgressBar.addEventListener('mousedown', () => {
  mouseDown = true;
  audioElement.audio.pause();
});
mainProgressBar.addEventListener('mouseout', () => {
  mouseDown = false;
  audioElement.play();
});
// mainProgressBar.addEventListener('click', (e) => {
//   timeFromOffset(e, mainProgressBar);
// });
mainProgressBar.addEventListener('mouseup', () => {
  mouseDown = false;
  audioElement.play();
});
pauseButton.addEventListener("click", pauseSong);
volume.addEventListener('mousedown', () => {
  mouseDown = true;
});
volume.addEventListener('mousemove', (e) => {
  setVolume(e);
});

volume.addEventListener('mouseup', (e) => {
  mouseDown = !mouseDown;
  setVolume(e);
});
volume.addEventListener('click', () => setVolume());
volume.addEventListener('mouseout', () => mouseDown = false);
volumeBtn.addEventListener("click", muteSong);
muteBtn.addEventListener('click', unmuteSong);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', previousSong);
repeatBtn.addEventListener('click', repeatSong);
shuffleBtn.addEventListener('click', () => {
  setShuffle(currentPlaylist);
});