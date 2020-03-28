<?php
    $conn = mysqli_connect('localhost','reservations-admin','password','reservations');

    if(!$conn){
        die("Could Not Connect:".mysqli_connect_error());
    }
    else
        {
           $idWorkSpace = $_POST['id_workPlace'];
           $idEquipment = $_POST['id_equipment'];
      


            $sqlGetWorkSpace = mysqli_query($conn,"SELECT about FROM work_place WHERE number = '$idWorkSpace'");
            $kindOf = mysqli_query($conn,"SELECT kindOf from equipment WHERE equip_number = '$idEquipment'");
            $model = mysqli_query($conn,"SELECT model from equipment WHERE equip_number = '$idEquipment'");
            $number = mysqli_query($conn,"SELECT number from equipment WHERE equip_number = '$idEquipment'");
            $year = mysqli_query($conn,"SELECT year from equipment WHERE equip_number = '$idEquipment'");
            $value = mysqli_query($conn,"SELECT value from equipment WHERE equip_number = '$idEquipment'");
            $about = mysqli_query($conn,"SELECT about from equipment WHERE equip_number = '$idEquipment'");

            $sqlGetWorkSpace1 = mysqli_fetch_array($sqlGetWorkSpace);
            $kindOf1 = mysqli_fetch_array($kindOf);
            $model1 = mysqli_fetch_array($model);
            $number1 = mysqli_fetch_array($number);
            $year1 = mysqli_fetch_array($year);
            $value1 = mysqli_fetch_array($value);
            $about1 = mysqli_fetch_array($about);

            $sql="INSERT INTO connection (workSpace,equipment,model,number,year,value,about) VALUES ('$sqlGetWorkSpace1[about]','$kindOf1[kindOf]', '$model1[model]', '$number1[number]', '$year1[year]', '$value1[value]', '$about1[about]')";

            $sql_remove = "DELETE FROM equipment where equip_number = '$idEquipment'";

            if(mysqli_query($conn,$sql)){
                echo "Record Has Been Inserted!";

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