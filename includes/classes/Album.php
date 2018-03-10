<?php

class Album{


  private $id;
  private $con;
  private $name;

  private $title;
public function __construct($con, $id){
  $this->id = $id;
  $this->con = $con;
}


private function setAlbumtitle(){
  $this->title = '';
}

public function getArist(){


  return $title;
}

public function getGenre(){
  return $this->genre;
}

public function getArtworkPath(){
  return $this->artworkPath;
}
public function getNumberOfSongs(){
  return mysqli_num_rows(mysqli_query($this->con, "SELECT * FROM songs WHERE id=$this->id"));
}


}





