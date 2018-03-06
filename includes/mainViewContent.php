
    <h1 id="pageHeadingBig">Subscribe Now and Listen music around the world</h1>
    <div id="gridViewContainer">
      <?php


      $albumQuery = mysqli_query($con, "SELECT * FROM albums LIMIT 12");

      while($row = mysqli_fetch_assoc($albumQuery)){ ?>
        <div class="album">
          <a href='album.php?id=<?php echo $row['id'];?>'>
          <div class="albumHeader">
            <img src="<?php echo $row['artworkPath'] ?>" alt="">
          </div>
          <div class="albumFooter">
            <p class='albumTitle'><?php echo $row['title']; ?></>
            <p class='albumArtist'><?php $artistInfo = mysqli_fetch_assoc(mysqli_query($con, "SELECT * FROM artists where id={$row['artist']}"));
                echo $artistInfo['name'];
            ?></p>
          </div>
        </a>
        </div>
      <?php  }  ?>


    </div>
