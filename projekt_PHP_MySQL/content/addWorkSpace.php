<?php
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');

    if(!$conn){
        die("Could Not Connect:".mysqli_connect_error());
    }
    else
        {
            $about = test_input($_POST['work_opis']);

            $sql="INSERT INTO work_place(about)VALUES('$about')";

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