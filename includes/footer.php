<script src="assets/js/propper.min.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/script.js"></script>
<script>
  $(document)
    .ready(function () {
      currentPlaylist = <?php echo $jsonArray; ?>;
      setTrack(currentPlaylist[0], currentPlaylist, false);
      audioElement.audio.volume = 0.5;
      volume.setAttribute("max", volume.parentElement.offsetWidth);
    });
</script>
</body>

</html>