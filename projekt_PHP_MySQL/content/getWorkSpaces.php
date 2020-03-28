<?php 
$data = array();
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');
        if($conn-> connect_error) {
            die("Connection failed:".$conn -> connect_error);
        }

    $sql = "SELECT number, about from work_place";

    $result = $conn-> query($sql);
    
    if($result-> num_rows > 0) {
        while($row = $result-> fetch_assoc()){

            $data[]= array('number' => $row['number'], 'about' => $row['about']);           
        }
        $data = json_encode($data);
        echo  $data;
    }
    $conn-> close();
?>