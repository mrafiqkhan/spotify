<div id="mainViewContent">
  <div id="mainContent">
    <h1 id="pageHeadingBig">Subscribe Now and Listen music around the world</h1>
    <div id="gridViewContainer">
      <?php


      $albumQuery = mysqli_query($con, "SELECT * FROM albums LIMIT 12");

      while($row = mysqli_fetch_assoc($albumQuery)){ ?>

        <div class="album">
          <div class="albumHeader">
            <img src="<?php echo $row['artworkPath'] ?>" alt="">
          </div>
          <div class="albumFooter">
            <p class='albumTitle'><?php echo $row['title']; ?></>
            <p class='albumArtist'><?php echo $row['artist']; ?></p>
          </div>
        </div>

      <?php  }  ?>


    </div>
  </div>
</div>