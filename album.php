<?php include("includes/topHeader.php");
 $albumId = $_GET['id'];
// if(isset($_GET['id']) && !empty($_GET['id'])){

        // if($albumInfo){
          $albumInfo = new Album($con, $_GET['id']);

          // $artist = new Artist($con, 1);

        // }
// }


function getSongs(){
  global $con;
  global $albumInfo;

$row = mysqli_query($con, "SELECT * FROM songs WHERE album = {$albumInfo->getAlbumId()}");

return $row;
}

?>
 <link rel="stylesheet" href="assets/css/album.css">
<?php include("includes/header.php");



if(!empty($albumInfo)){ ?>

    <div id="gridViewContainer">

        <div class="album">

          <div class="albumHeader">
            <img src="<?php echo $albumInfo->getArtworkPath(); ?>" alt="">
          </div>
          <div class="albumFooter">
            <h1 id="pageHeadingBig"><?php echo $albumInfo->getAlbumTitle();?></h1>
            <p class='albumTitle'>By <?php echo $albumInfo->getArtist(); ?></p>
            <p class='numberOfSongs'><?php echo $albumInfo->getNumberOfSongs(); ?> songs</p>

          </div>

        </div>

        <div class="songList">
          <?php

          $res = getSongs();
            while($song = mysqli_fetch_assoc($res)){
                ?>

              <p class="albumListPlayIcon" data-albumInfo="<?php echo $albumInfo->getArtworkPath(); ?>"><img src='assets/images/icons/play.png' ><span class='songTitle'><?php echo $song['title']; ?></span><audio class="hidden" data-songid="<?php echo $song['id'];?>"><source src="<?php echo $song['path'];?>"></source></audio><span class="artistName"> by <?php echo $albumInfo->getArtist();
?></span></p>

          <?php } ?>
        </div>

      </div>
<?php }else{echo "<div class='errorDiv'>No album found </div>";} ?>

<?php include("includes/footerTop.php"); ?>
<script src="assets/js/song.js"></script>
<?php include("includes/footer.php"); ?>