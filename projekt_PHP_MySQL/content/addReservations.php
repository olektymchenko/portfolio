<?php 
$data = array();
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');
        if($conn-> connect_error) {
            die("Connection failed:".$conn -> connect_error);
        }

    $sql = "SELECT workSpaceConnected from user_workplace GROUP BY workSpaceConnected";

    $result = $conn-> query($sql);
    
    if($result-> num_rows > 0) {
        while($row = $result-> fetch_assoc()){
            $temp = $row['workSpaceConnected'];
            $tempName = $row['userIdConnected'];
            $equipments = mysqli_query($conn,"SELECT equipment from connection WHERE workSpace = '$temp'");
            $equipments1 = mysqli_fetch_array($equipments);
            $names = mysqli_query($conn,"SELECT username from users WHERE user_id = '$tempName'");
            $names1 = mysqli_fetch_array($names);
            $data[]= array('username'=>$names1['username'],'workSpace' => $row['workSpaceConnected'],'equipment'=>array($equipments1['equipment']));
            
        }
        $data = json_encode($data);
        echo  $data;
    }
    $conn-> close();
?>