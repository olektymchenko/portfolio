<?php
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');

    if(!$conn){
        die("Could Not Connect:".mysqli_connect_error());
    }
    else
        {
            $rodzaj = test_input($_POST['rodzaj']);
            $model = test_input($_POST['model']);
            $oznaczenie = test_input($_POST['oznaczenie']);
            $rok = test_input($_POST['rok']);
            $wartosc = test_input($_POST['wartosc']);
            $opis = test_input($_POST['opis']);


            $sql="INSERT INTO equipment (kindOf, model, number, year, value, about) VALUES('$rodzaj','$model','$oznaczenie','$rok','$wartosc','$opis')";

            if(mysqli_query($conn,$sql)){
                echo "Record Has Been Inserted!";
            }
            else {
                echo "Fail to Insert";
            }
            mysqli_close($conn);
        }

        function test_input($data){
            $data=trim($data);
            $data=stripcslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
?> 