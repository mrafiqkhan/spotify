const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");


function Audio() {
  this.currentlyPlaying='';
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
