// const getAudio = document.querySelector("audio"); let audioObj =
// document.createElement("audio"); audioObj.src = getAudio.innerText; //
// audioObj.play(); console.log(audioObj.getduration()); let audioSrc =
// getAudio.childNodes[1].getAttribute("src"); // let getAudio. let getAudioObj
// = new Audio(audioSrc); getAudio.addEventListener("loadeddata", function () {
// console.log(this.duration); });
const albumListPlayIcon = document.querySelectorAll(".albumListPlayIcon");

function playThisSong(index) {
  if (nowPlaying !== '') {
    playList[nowPlaying].pause();
  }
  nowPlaying = index;

  playList[nowPlaying]
    .firstChild
    .nextElementSibling
    .nextElementSibling
    .play();
  let minutes = Math.floor(playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.duration / 60);
  let seconds = Math.floor(playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.duration - minutes * 60);

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
  playList[nowPlaying]
    .firstChild
    .nextElementSibling
    .nextElementSibling
    .pause();
  nowPlayingBarPause.style.display = 'none';
  nowPlayingBarPlay.style.display = 'inline-block';
});
nowPlayingBarPlay.addEventListener('click', function () {
  playList[nowPlaying]
    .firstChild
    .nextElementSibling
    .nextElementSibling
    .play();
  nowPlayingBarPlay.style.display = 'none';
  nowPlayingBarPause.style.display = 'inline-block';
});

function songProgressBar() {
  let duration = playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.duration;
  nowPlayingBarProgress.setAttribute('max', Math.floor(duration));
  nowPlayingBarProgress.style.width = (100 + "%");
  currentInterval = setInterval(getCurrentTime, 1000);

}

function getCurrentTime() {
  console.log("hello");
  let currentTimeOfSong = playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.currentTime;
  nowPlayingBarProgress.setAttribute("value", Math.floor(currentTimeOfSong));
  let minutes = Math.floor(playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.duration / 60); let seconds = Math.floor(playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.duration - minutes * 60);
  let dur = playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.duration;

  let crt = Math.floor(playList[nowPlaying].firstChild.nextElementSibling.nextElementSibling.currentTime);
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