<?php
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');

    if(!$conn){
        die("Could Not Connect:".mysqli_connect_error());
    }
    else
        {
           $idUser = $_POST['id_user'];
           $idWorkSpace = $_POST['id_workPlace'];
           $resDate = $_POST['date'];
           $timeFrom = $_POST['timeFrom'];
           $timeTo = $_POST['timeTo'];


      
           $userRest = mysqli_query($conn,"SELECT username, password, email, phone_number, about from users WHERE user_id = '$idUser'");
           $userRest1 = mysqli_fetch_array($userRest);

            $sql="INSERT INTO user_workplace (userIdConnected, workSpaceConnected, username, password, email, phone_number, about, reservedDate, reservedFrom, reservedTo) VALUES('$idUser','$idWorkSpace','$userRest1[username]','$userRest1[password]','$userRest1[email]','$userRest1[phone_number]','$userRest1[about]','$resDate','$timeFrom','$timeTo')";
          
            $sqlRemoveUser = "DELETE FROM users where user_id = '$idUser'";
            $sqlRemoveWorkPlace= "DELETE FROM work_place where about = '$idWorkSpace'";

            if(mysqli_query($conn,$sql)){
                echo "Record Has Been Inserted!";

            }
            else {

                echo "Fail to Synchronize";
            }
            if(mysqli_query($conn,$sqlRemoveUser)){
                echo "User Has Been Deleted!";
    
            }
            else {
    
                echo "Fail to Delete!";
            }
            if(mysqli_query($conn,$sqlRemoveWorkPlace)){
                echo "WorkPlace Has Been Deleted!";
    
            }
            else {
    
                echo "Fail to Delete!";
            }
            mysqli_close($conn);
        }
?> 