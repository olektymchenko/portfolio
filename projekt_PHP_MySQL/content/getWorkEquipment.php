<?php 
$data = array();
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');
        if($conn-> connect_error) {
            die("Connection failed:".$conn -> connect_error);
        }

    $sql = "SELECT equip_number, kindOf, model, number, year, value, about from equipment";

    $result = $conn-> query($sql);
    
    if($result-> num_rows > 0) {
        while($row = $result-> fetch_assoc()){

            $data[]= array('equip_number'=>$row['equip_number'],'kindOf' => $row['kindOf'], 'model' =>$row['model'],'number'=>$row['number'],'year'=>$row['year'],'value' => $row['value'],'about'=> $row['about']);           
        }
        $data = json_encode($data);
        echo  $data;
    }
    $conn-> close();
?>