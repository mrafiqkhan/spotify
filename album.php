<?php include "includes/headerTop.php";
$albumId = $_GET['id'];
if (isset($_GET['id']) && !empty($_GET['id'])) {

    $album = new Album($con, $_GET['id']);
} else {
    header("location:index.php");
}
?>
<link rel="stylesheet" href="assets/css/album.css">
<?php include "includes/header.php";?>
<!-- <h1 id="pageHeadingBig"></h1> -->
<div id="gridViewContainer">

  <div class="album">

    <div class="albumHeader">
      <img src="<?php echo $album->getArtworkPath(); ?>" alt="">
    </div>
    <div class="albumFooter">
      <p class='albumTitle'>
        <?php echo $album->getTitle(); ?>
      </p>
      <p class="artistName">By:
        <?php echo $album->getArtist(); ?>
      </p>
      <p>
        <?php echo $album->getNumberOfSongs(); ?> songs</p>

    </div>

  </div>
  <div class="tracklistContainer">
    <ul class="trackList">
      <?php $songIds = $album->getSongIds();
$i = 1;
foreach ($songIds as $id) {
    $albumSong = new Song($con, $id);
    echo "<li data-songId='{$albumSong->getSongId()}'><div class='left'><div class='number'>{$i}</div><div class='songTitle'>{$albumSong->getTitle()}<br><span class='artistName'>{$albumSong->getArtist()}</span></div></div><div class='center'>{$albumSong->getDuration()}</div><div class='right addtoPlaylist'><span>&plus;</span></div></li>";
    $i++;
}?>

    </ul>
    </span>

  </div>


  <?php include "includes/footerTop.php";?>
  <script src="assets/js/album.js">
  </script>
  <?php include "includes/footer.php";?>