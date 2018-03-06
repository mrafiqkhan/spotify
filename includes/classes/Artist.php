<?php



class Artist{

private $con;
private $id;
public function __construct($con, $id)
{

  $this->con  = $con;
  $this->id = $id;


}

public function getArtistName(){
      $artistName= mysqli_fetch_assoc(mysqli_query($this->con, "SELECT name FROM artists where id={$this->id}"));
          return $artistName['name'];
}





}