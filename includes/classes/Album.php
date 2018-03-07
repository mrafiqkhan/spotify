<?php

class Album{


  private $con;
  private $id;
  private $title;
  private $artistId;
  private $genre;
  private $artworkPath;

public function __construct($con, $id)
{

  $this->con  = $con;
  $this->id = $id;
$album= mysqli_fetch_assoc(mysqli_query($con, "SELECT * FROM albums WHERE id={$this->id}"));



  $this->title = $album['title'];
  $this->artistId = $album['artist'];
  $this->genre = $album['genre'];
  $this->artworkPath = $album['artworkPath'];


}



public function getAlbumId(){
  return $this->id;
}
public function getAlbumtitle(){
  return $this->title;
}

public function getArtist(){
  $artist = new Artist($this->con, $this->artistId);
  return $artist->getArtistName();
}

public function getGenre(){
  return $this->genere;
}
public function getArtworkPath(){
  return $this->artworkPath;
}

public function getNumberOfSongs(){
$songs = mysqli_query($this->con, "SELECT album FROM songs WHERE album = {$this->id}");
  return mysqli_num_rows($songs);
}

}





