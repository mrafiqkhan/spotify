<?php

include("includes/config.php");
$songArr = array();
$songId = $_GET['trackId'];
$song = new Song($con, $_GET['id']);
array_push_assoc($songArr,'artist',$song->getArtist());
array_push_assoc($songArr,'albumImg',$song->getAlbumImage());
array_push_assoc($songArr, 'path', $song->path);
array_push_assoc($songArr,'title',$song->getTitle());
jason.encode($songArr);







?>