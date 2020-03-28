<?php
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');

    if(!$conn){
        die("Could Not Connect:".mysqli_connect_error());
    }
    else
        {
           $idUser = $_POST['id_user'];
      

            $sqlGetWorkSpace = mysqli_query($conn,"SELECT workSpaceConnected FROM user_workplace WHERE userIdConnected = '$idUser'");
            $userName = mysqli_query($conn,"SELECT username from user_workplace WHERE userIdConnected = '$idUser'");
            $password = mysqli_query($conn,"SELECT password from user_workplace WHERE userIdConnected = '$idUser'");
            $email = mysqli_query($conn,"SELECT email from user_workplace WHERE userIdConnected = '$idUser'");
            $phone_number = mysqli_query($conn,"SELECT phone_number from user_workplace WHERE userIdConnected = '$idUser'");
            $about = mysqli_query($conn,"SELECT about from user_workplace WHERE userIdConnected = '$idUser'");

            $sqlGetWorkSpace1 = mysqli_fetch_array($sqlGetWorkSpace);
            $userName1 = mysqli_fetch_array($userName);
            $password1 = mysqli_fetch_array($password);
            $email1 = mysqli_fetch_array($email);
            $phone_number1 = mysqli_fetch_array($phone_number);
            $about1 = mysqli_fetch_array($about);

            $sqlUser="INSERT INTO users (username,password,email,phone_number,about) VALUES ('$userName1[username]','$password1[password]', '$email1[email]', '$phone_number1[phone_number]','$about1[about]')";
            $sqlWorkSpace="INSERT INTO work_place (about) VALUES ('$sqlGetWorkSpace1[workSpaceConnected]')";

            $sql_remove = "DELETE FROM user_workplace where userIdConnected = '$idUser'";

            if(mysqli_query($conn,$sqlUser)){
                echo "User Has Been Inserted!";

            }
            else {

                echo "Fail to Insert User";
            }
            if(mysqli_query($conn,$sqlWorkSpace)){
                echo "WorkPlace Has Been Inserted!";

            }
            else {

                echo "Fail to Insert Workplaces";
            }

          if(mysqli_query($conn,$sql_remove)){
            echo "Record Has Been Deleted!";

        }
        else {

            echo "Fail to Delete!";
        }
            mysqli_close($conn);
        }
?> 