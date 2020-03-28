<?php 
$data = array();
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');
        if($conn-> connect_error) {
            die("Connection failed:".$conn -> connect_error);
        }

    $sql = "SELECT username, workSpaceConnected, reservedDate, reservedFrom, reservedTo from user_workplace";

    $result = $conn-> query($sql);
    
    if($result-> num_rows > 0) {
        while($row = $result-> fetch_assoc()){
            $temp = $row['workSpaceConnected'];
            $equipments = mysqli_query($conn,"SELECT equipment from connection WHERE workSpace = '$temp'");
            $equipments1 = mysqli_fetch_array($equipments);
            $data[]= array('reservedDate' => $row['reservedDate'],'reservedFrom' => $row['reservedFrom'],'reservedTo' => $row['reservedTo'],'username'=>$row['username'],'workSpace' => $row['workSpaceConnected'],'equipment'=>$equipments1['equipment']);
            
        }
        $data = json_encode($data);
        echo  $data;
    }
    $conn-> close();
?>