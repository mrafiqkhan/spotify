
<script src="assets/js/propper.min.js"></script>
<script  src="assets/js/main.js"></script>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/script.js"></script>
<script>
audioElement = new Audio();
playButton.addEventListener("click", playSong);
pauseButton.addEventListener("click", pauseSong);
function setTrack(trackId, newPlaylist, play) {
 
 $.post("includes/handlers/ajax/getSongJson.php",{songId:trackId}, function(data){
   let track = JSON.parse(data);
  nowPlayingBarContainer.style.bottom = '0';
  nowPlayingBarTrack.innerText = track.title;
  nowPlayingBarArtist.innetText = track.artist;
   progressBar.style.maxWidth = Math.round(audioElement.audio.duration);
   seekBar();
  audioElement.setTrack("assets/music/"+track.path);
  
  audioElement.play();


});
 

}
function seekBar(){
  window.setInterval(function(){
    console.log(Math.round(audioElement.audio.currentTime));
progressBar.style.width = Math.round(audioElement.audio.currentTime);
  }, 1000);
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
</script>
</body>
</html>