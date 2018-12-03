<?php
include "../../config.php";

if (isset($_POST['songId']) && isset($_POST['calledFor']) && $_POST['calledFor'] == "setTrack") {
    $id = $_POST['songId'];
    $song = new Song($con, $id);
    $songArr = array();
    $songArr['songId'] = $_POST['songId'];
    $songArr['artist'] = $song->getArtist();
    $songArr['albumImg'] = $song->getAlbumImage();
    $songArr['path'] = $song->getPath();
    $songArr['title'] = $song->getTitle();
    $songArr['id'] = $song->getSongId();
    echo json_encode($songArr);
}

if (isset($_POST['songId']) && isset($_POST['calledFor']) && $_POST['calledFor'] == "updatePlayCount") {
    $songId = $_POST['songId'];
    Song::updatePlayCount($con, $songId);
}
