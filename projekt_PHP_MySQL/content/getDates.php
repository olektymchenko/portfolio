<?php 
$data = array();
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');
        if($conn-> connect_error) {
            die("Connection failed:".$conn -> connect_error);
        }

    $sql = "SELECT user_id, username, email, phone_number, about from users";

    $result = $conn-> query($sql);
    
    if($result-> num_rows > 0) {
        while($row = $result-> fetch_assoc()){

            $data[]= array('user_id' => $row['user_id'], 'username' => $row['username'], 'email' => $row['email'], 'phone_number' =>$row['phone_number'],'about'=>$row['about']);           
        }
        $data = json_encode($data);
        echo  $data;
    }
    $conn-> close();
?>