<?php include("includes/topHeader.php");
 $albumId = $_GET['id'];
if(isset($_GET['id']) && !empty($_GET['id'])){

  $albumQuery = mysqli_query($con, "SELECT * FROM albums WHERE id = {$albumId}");

        $albumInfo = mysqli_fetch_assoc($albumQuery);
        if($albumInfo){

          $artistName= mysqli_fetch_assoc(mysqli_query($con, "SELECT * FROM artists where id={$albumInfo['artist']}"));
          $artistName =$artistName['name'];
        }
}




?>
 <link rel="stylesheet" href="assets/css/album.css">
<?php include("includes/header.php");
if(!empty($albumInfo)){ ?>
<h1 id="pageHeadingBig"><?php echo $artistName;?></h1>
    <div id="gridViewContainer">

        <div class="album">

          <div class="albumHeader">
            <img src="<?php echo $albumInfo['artworkPath'] ?>" alt="">
          </div>
          <div class="albumFooter">
            <p class='albumTitle'><?php echo $albumInfo['title']; ?></>

          </div>

        </div>

      </div>
<?php }else{echo "<div class='errorDiv'>No album found </div>";} ?>

<?php include("includes/footer.php"); ?>