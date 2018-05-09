<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/script.js"></script>
<script>
  $(document)
  .ready(function () {
    currentPlaylist = ["0"];

    <?php //echo $jsonArray; ?>;
    audioElement = new Audio();
    setTrack(currentPlaylist[0], currentPlaylist, false);

  });
</script>
</body>
</html>