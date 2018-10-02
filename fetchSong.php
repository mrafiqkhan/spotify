<?php

include("includes/config.php");
$songArr = array();
$songId = $_GET['trackId'];
$song = new Song($con, $_GET['id']);
$songArr['artist']=$song->getArtist();
$songArr['albumImg']=$song->getAlbumImage();
$songArr['path']=$song->path;
$songArr['title']=$song->getTitle();
 json.encode($songArr);
// echo $songArr;







?>