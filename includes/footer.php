
<script src="assets/js/script.js"></script>
<script>
  $(document)
    .ready(function () {
<<<<<<< Updated upstream
      currentPlaylist = <?php echo $jsonArray; ?>;
      setTrack(currentPlaylist[0], currentPlaylist, false);
      audioElement.audio.volume = 0.5;
      volume.setAttribute("max", volume.parentElement.offsetWidth);
=======
      currentPlaylist = <?php
        if(!isempty($jsonArray)){
          echo $jsonArray;
        }
        ?>;
      if(!currentPlaylist.empty()){
        setTrack(currentPlaylist[0], currentPlaylist, false);
        volume.setAttribute("max", volume.parentElement.offsetWidth);
      }
>>>>>>> Stashed changes
    });
</script>
</body>

</html>