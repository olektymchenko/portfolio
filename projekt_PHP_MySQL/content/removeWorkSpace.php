<?php 
$data = array();
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');
        if($conn-> connect_error) {
            die("Connection failed:".$conn -> connect_error);
        }

    $sql = "SELECT userIdConnected, workSpaceConnected, username from user_workplace";

    $result = $conn-> query($sql);
    
    if($result-> num_rows > 0) {
        while($row = $result-> fetch_assoc()){

            $data[]= array('userId'=>$row['userIdConnected'],'username'=>$row['username'],'workPlace' => $row['workSpaceConnected']);           
        }
        $data = json_encode($data);
        echo  $data;
    }
    $conn-> close();
?>