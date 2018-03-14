<?php

class Album{


  private $id;
  private $con;
  private $name;

  private $title;
  private $artistId;
  private $artworkPath;
  private $genre;
public function __construct($con, $id){
  $this->id = $id;
  $this->con = $con;

$album = mysqli_fetch_assoc(mysqli_query($this->con, "SELECT * FROM albums WHERE id={$this->id}"));

$this->title = $album['title'];
$this->artistId = $album['artist'];
$this->genre = $album['genre'];
$this->artworkPath = $album['artworkPath'];
}


public function getTitle(){
  return $this->title;
}

public function getArtist(){


  $artist= new Artist($this->con, $this->artistId);
  return $artist->getArtistName();
}


public function getGenre(){
  return $this->genre;
}

public function getArtworkPath(){
  return $this->artworkPath;
}
public function getNumberOfSongs(){
  return mysqli_num_rows(mysqli_query($this->con, "SELECT id FROM songs WHERE album=$this->id"));
}

public function getSongIds(){
$query = mysqli_query($this->con, "SELECT id FROM songs WHERE album={$this->id} ORDER BY albumOrder ASC");
$songIds = array();
while($row = mysqli_fetch_array($query)){
  array_push($songIds, $row['id']);
}

return $songIds;
}



}





