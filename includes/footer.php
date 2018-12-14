<script src="assets/js/script.js">
</script>
<script>
  $(document)
    .ready(function() {

      let newPlaylist = <?php echo $jsonArray; ?>;
      setTrack(newPlaylist[0], newPlaylist, false);
      audioElement.audio.volume = 1;
      // volume.setAttribute('value', volume.parentElement.offsetWidth);
      volume.setAttribute("max", 1);

      $("#nowPlayingBarContainer").on("mousedown touchstart mousemove touchmove", (e) => {
        e.preventDefault();
      })

      currentPlaylist = <?php
// if(!isempty($jsonArray)){
echo $jsonArray;
// }
 ?>;
      // if(!currentPlaylist.empty()){
      setTrack(currentPlaylist[0], currentPlaylist, false);
      volume.setAttribute("max", 1);
      volume.setAttribute('value', 0.2);

      // }

    });
</script>
</body>

</html>