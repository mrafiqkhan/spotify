function Audio() {
  this.currentlyPlaying;
  this.audio = document.createElement("audio");

  this.setTrack = function (src) {
    this.audio.src = src;

  }

}

function setTrack(trackId, newPlaylist, play) {
  audioElement.setTrack("assets/music/abc.mp3");
  // audioElement   .audio   .play();

}