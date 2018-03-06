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

public function getAlbumTitle(){


  return $title;
}



}





