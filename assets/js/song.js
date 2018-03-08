// const getAudio = document.querySelector("audio"); let audioObj =
// document.createElement("audio"); audioObj.src = getAudio.innerText; //
// audioObj.play(); console.log(audioObj.getduration()); let audioSrc =
// getAudio.childNodes[1].getAttribute("src"); // let getAudio. let getAudioObj
// = new Audio(audioSrc); getAudio.addEventListener("loadeddata", function () {
// console.log(this.duration); });
const albumListPlayIcon = document.querySelectorAll(".albumListPlayIcon");
nowPlayingBarProgress.addEventListener("click", function () {
  if (!getCurrentPlayingSong().paused) {
    getCurrentPlayingSong().pause();
  } else {
    getCurrentPlayingSong().play();
  }

});

function playThisSong(index) {
  if (nowPlaying !== '') {
    getCurrentPlayingSong().pause();
  }
  nowPlaying = index;

  getCurrentPlayingSong().play();
  let minutes = Math.floor(getCurrentPlayingSong().duration / 60);
  let seconds = Math.floor(getCurrentPlayingSong().duration - minutes * 60);

  nowPlayingBarCurrentTime.firstChild.innerText = minutes;
  nowPlayingBarCurrentTime.lastChild.innerText = seconds;
  nowPlayingBarPlay.style.display = "none";
  nowPlayingBarPause.style.display = "inline-block";
  settingNowPlayingBarInfo();
  songProgressBar();

}
albumListPlayIcon
  .forEach(function (element) {
    element
      .addEventListener("click", function () {

        playThisSong((playList.push(element)) - 1);

      });
  });

nowPlayingBarPause.addEventListener('click', function () {
  getCurrentPlayingSong().pause();
  nowPlayingBarPause.style.display = 'none';
  nowPlayingBarPlay.style.display = 'inline-block';
});
nowPlayingBarPlay.addEventListener('click', function () {
  getCurrentPlayingSong().play();
  nowPlayingBarPlay.style.display = 'none';
  nowPlayingBarPause.style.display = 'inline-block';
});

function songProgressBar() {
  let duration = getCurrentPlayingSong().duration;
  nowPlayingBarProgress.setAttribute('max', Math.floor(duration));
  nowPlayingBarProgress.style.width = (100 + "%");
  currentInterval = setInterval(getCurrentTime, 1000);

}

function getCurrentTime() {

  let currentTimeOfSong = getCurrentPlayingSong().currentTime;
  nowPlayingBarProgress.setAttribute("value", Math.floor(currentTimeOfSong));
  let minutes = Math.floor(getCurrentPlayingSong().duration / 60);
  let seconds = Math.floor(getCurrentPlayingSong().duration - minutes * 60);
  let dur = getCurrentPlayingSong().duration;

  let crt = Math.floor(getCurrentPlayingSong().currentTime);
  if (crt < 10) {

    nowPlayingBarRemaining.lastChild.innerHTML = "0" + crt;
  } else if (crt >= 10 && crt < 60) {
    nowPlayingBarRemaining.lastChild.innerHTML = crt;

  } else if (crt >= 60 && crt < 120) {
    nowPlayingBarRemaining.lastChild.innerHTML = crt - 60;
    nowPlayingBarRemaining.firstChild.innerHTML += 1;
  }
  // nowPlayingBarProgress.style.width = (Math.floor(currentTimeOfSong) + "%");
}
function settingNowPlayingBarInfo() {

  nowPlayingBarAlbumArt.setAttribute("src", playList[nowPlaying].getAttribute("data-albumInfo"));
  nowPlayingBarTrackName.innerText = playList[nowPlaying]
    .querySelector(".songTitle")
    .innerText;
  nowPlayingBarArtistName.innerText = playList[nowPlaying]
    .querySelector(".artistName")
    .innerText;
}

function getCurrentPlayingSong() {
  return playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling;
}