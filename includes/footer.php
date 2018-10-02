
<script src="assets/js/propper.min.js"></script>
<script  src="assets/js/main.js"></script>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/script.js"></script>
<script>
audioElement = new Audio();
audioElement.muted = "muted";
playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);
function setTrack(trackId, newPlaylist, play) {
 
 $.post("includes/handlers/ajax/getSongJson.php",{songId:trackId}, function(data){
   let track = JSON.parse(data);
  //  console.log(data);
  nowPlayingBarContainer.style.bottom = '0';
  trackName.innerText = track.title;
  artistName.innerText = track.artist;
  albumThumbnail.src = track.albumImg;
  audioElement.setTrack("assets/music/"+track.path);
   songProgressBar();
  audioElement.play();


});
 

}

function playSong() {

  audioElement.play();

}

function pauseSong() {

  audioElement.pause();
}
  $(document)
  .ready(function () {
    currentPlaylist = <?php echo $jsonArray; ?>;
    setTrack(currentPlaylist[0], currentPlaylist, false);

  });

  function songProgressBar() {
  let duration = audioElement.duration;
  mainProgressBar.setAttribute('max', Math.floor(duration));
  mainProgressBar.style.width = (100 + "%");
  currentInterval = setInterval(getCurrentTime, 1000);

}

function getCurrentTime() {

  let currentTimeOfSong = audioElement.audio.currentTime;
  
  mainProgressBar.setAttribute("value", Math.floor(currentTimeOfSong));
  let minutes = Math.floor(audioElement.audio.duration / 60);
  let seconds = Math.floor(audioElement.audio.duration - minutes * 60);
  let dur = audioElement.audio.duration;

  let m = Math.floor(currentTimeOfSong / 60);
  let s = Math.floor(currentTimeOfSong % 60);
  currentTimeMin = document.querySelector(".remaining .m");
  currentTimeSec = document.querySelector(".remaining .s");
  currentTimeSec.innerHTML = (s < 10 ? "0" + s : s);
  currentTimeMin.innerHTML = m;

}
</script>
</body>
</html>