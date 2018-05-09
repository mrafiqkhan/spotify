const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);

function Audio() {
  this.currentlyPlaying;
  this.audio = document.createElement("audio");

  this.setTrack = function (src) {
    this.audio.src = src;

  }
  this.play = function () {
    this
      .audio
      .play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  }
  this.pause = function () {
    this
      .audio
      .pause();
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
  }
}

function setTrack(trackId, newPlaylist, play) {
  fetch("fetchSong.php?trackId=" + trackId)
    .then(function (data) {

      // console.log(data.json());
    })
  // .then(function (data) {
  //   return data.json();
  // });
  // if (play) { audioElement.play(); } else {   audioElement.stop(); }
  // audioElement   .audio  .play();

}

function playSong() {

  audioElement.play();

}

function pauseSong() {

  audioElement.pause();
}