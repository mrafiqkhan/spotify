<?php
    include("../../config.php");

    if(isset($_POST['songId'])){
        $id = $_POST['songId'];
        $song = new Song($con, $id);
$songArr = array();
        $songArr['artist']=$song->getArtist();
$songArr['albumImg']=$song->getAlbumImage();
$songArr[ 'path']= $song->getPath();
$songArr['title']=$song->getTitle();


 echo json_encode($songArr);
        // $query = mysqli_query($con, "SELECT * FROM songs WHERE id='$id'");
        // $arr = mysqli_fetch_array($query);
        // echo json_encode($song);

    }

?>