<?php 
    include("../../config.php");
    if(isset($_POST['songId'])){
        $id = $_POST['songId'];
        // $song = new Song($con, $id);

        $query = mysqli_query($con, "SELECT * FROM songs WHERE id='$id'");
        $arr = mysqli_fetch_array($query);
        echo json_encode($arr);

    }

?>