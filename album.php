<?php include("includes/topHeader.php");
 $albumId = $_GET['id'];
if(isset($_GET['id']) && !empty($_GET['id'])){

$album = new Album($con, $_GET['id']);
}




?>
 <link rel="stylesheet" href="assets/css/album.css">
<?php include("includes/header.php");?>
<h1 id="pageHeadingBig"><?php echo $artist->getArtistName();?></h1>
    <div id="gridViewContainer">

        <div class="album">

          <div class="albumHeader">
            <img src="<?php echo $album->getAlbumArtworkPath(); ?>" alt="">
          </div>
          <div class="albumFooter">
            <p class='albumTitle'><?php echo $albumInfo['title']; ?></>

          </div>

        </div>

      </div>


<?php include("includes/footer.php"); ?>