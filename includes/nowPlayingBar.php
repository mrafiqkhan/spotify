<?php

  $songQuery = mysqli_query($con, "SELECT id FROM songs ORDER BY RAND() LIMIT 10");
  $resultArray = array();

  while($row = mysqli_fetch_array($songQuery)){
    array_push($resultArray, $row['id']);

  }

  $jsonArray = json_encode($resultArray);


?>




<div id="nowPlayingBarContainer">
      <div class="" id="nowPlayingBar">
        <div id="nowPlayingLeft">
          <div class="content">
            <span class="albumLink">
              <img src="assets/images/artwork/goinghigher.jpg" alt="" class="albumArtwork">
            </span>
            <div class="trackInfo">
              <span class="trackName">Castle On The Hill</span>
              <span class="artistName">Ed Sheeran</span>
            </div>
          </div>
        </div>
      <div id="nowPlayingCenter">
        <div class="content playerControls">
          <div class="buttons">
            <button class="controlButton shuffle" title="Shuffle">
              <img  src="assets/images/icons/shuffle.png" alt="Shuffle">
          </button>
            <button class="controlButton previous" title="Previous">
              <img  src="assets/images/icons/previous.png" alt="Previous">
            </button>
            <button class="controlButton play" title="Play">
              <img  src="assets/images/icons/play.png" alt="Play">
            </button>
              <button class="controlButton pause" title="Pause">
              <img  src="assets/images/icons/pause.png" alt="Pause">
            </button>
            <button class="controlButton next" title="Next">
              <img  src="assets/images/icons/next.png" alt="Next">
            </button>
            <button class="controlButton repeat" title="Repeat">
              <img  src="assets/images/icons/repeat.png" alt="Repeat">
            </button>
        </div>
        <div class="playbackBar">
          <span class="progressTime current"><span class="m">00</span><span>:</span><span class="s">00</span></span>
          <div class="progressBar">
            <div class="progressBarBg">
             <progress class="prgress" id="mainProgressBar" value="0"></progress>
            </div>
          </div>
          <span class="progressTime remaining"><span class="m">00</span>:<span class="s">00</span></span>
        </div>
        </div>
      </div>
      <div id="nowPlayingRight">
        <div class="volumeBar">
            <button class="controlButton volume" title="Volume Button">
              <img src="assets/images/icons/volume.png" alt="Volume Button">
            </button>
            <button class="controlButton mute" title="Mute Button">
              <img src="assets/images/icons/volume-mute.png" alt="Mute Button">
            </button>
            <div class="progressBar">
            <div class="progressBarBg">
              <div class="progress"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>