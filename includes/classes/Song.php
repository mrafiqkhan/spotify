<?php

class Song{

  private $con;
  private $id;

  private $myslqiData;
  private $title;
  private $artistId;
  private $albumId;
  private $genre;
  private $duration;
  private $path;


  public function __construct($con, $id){
    $this->con = $con;
    $this->id = $id;


  $this->mysqliData = mysqli_fetch_assoc(mysqli_query($this->con, "SELECT * FROM songs  WHERE id = {$this->id}"));
     $this->title = $this->mysqliData['title'];
   $this->artistId = $this->mysqliData['artist'];
   $this->albumId = $this->mysqliData['album'];
   $this->genre = $this->mysqliData['genre'];
   $this->duration = $this->mysqliData['duration'];
   $this->path = $this->mysqliData['path'];
  }

public function getTitle()
{
  return $this->title;
}
public function getArtist()
{
$artist = new Artist($this->con, $this->artistId);
  return $artist->getArtistName();
}
public function getAlbum()
{
  $albumTitle =  new Album($this->con, $this->albumId);
  return $albumTitle->getTitle();

}
public function getAlbumImage(){
  $albumImg = new Album($this->con, $this->albumId);
  return $albumImg->getArtworkPath();
}
public function getPath(){
  return $this->path;
}
public function getDuration(){
  return $this->duration;
}














}
?>