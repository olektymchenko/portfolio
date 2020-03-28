<?php
session_start();

//initializing variables

$username = "";
$email = "";
$tel = "";
$about="";
$errors = array();

$db = mysqli_connect('localhost','reservations-admin','password','reservations');

// REGISTER USER

if(isset($_POST['reg_user'])){

    $username = mysqli_real_escape_string($db,$_POST['username']);
    $email = mysqli_real_escape_string($db,$_POST['email']);
    $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
    $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
    $tel = mysqli_real_escape_string($db,$_POST['tel']);
    $about = mysqli_real_escape_string($db,$_POST['about']);

    // validation
    if(empty($username)){array_push($errors, "Username is required");}
    if(empty($email)){array_push($errors,"Email is required");}
    if(empty($password_1)){array_push($errors,"Password is required");}
    if($password_1 != $password_2)
    {
        array_push($errors,"The two passwords do not match");
    }
    // check if user does not already exist with the same username/email

    $user_check_query = "SELECT * FROM users WHERE username = '$username' OR email='$email' LIMIT 1";
    $result = mysqli_query($db, $user_check_query);
    $user = mysqli_fetch_assoc($result);

    if($user){ //if user exist
        if($user['username']===$username){
            array_push($errors,"Username already exist");
        }
        if($user['email']===$email)
        {
            array_push($errors,'Email already exist');
        }
    }

    // Finaly register user if there are no errors
    if(count($errors)==0){
        $password = md5($password_1);

        $query = "INSERT INTO users (username, email, password ,phone_number, about) VALUES('$username','$email','$password', '$tel', '$about')";
        mysqli_query($db,$query);
        $_SESSION['username']=$username;
        $_SESSION['success'] = "You are now logged in";
        header('location: index.php');
    }

}

if(isset($_POST['login_user']))
{
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);

    if(empty($username)){
        array_push($errors,"Username is required");
    }
    if(empty($password)){
        array_push($errors, "Password is requred");
    }

    if(count($errors)==0)
    {
        $password=md5($password);
        $query="SELECT * FROM users WHERE username='$username' AND password = '$password'";
        $results = mysqli_query($db, $query);
        if(mysqli_num_rows($results)==1){
            $_SESSION['username'] = $username;
            $_SESSION['success'] = 'Jesteś zalogowany';
            if ($username == "admin")
            {
                 $_SESSION['admin_is_logged'] = true;
            }

            header('location:index.php');
        }
        else {
            array_push($errors,"Wrong username/password combination");
        }
    }
}