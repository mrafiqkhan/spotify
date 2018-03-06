<?php

class Album{


  private $id;
  private $con;

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





