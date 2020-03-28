<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class = "header">
    <h2>Logowanie</h2>
    </div>
    <form method="post" action="login.php">
    <?php include('errors.php'); ?>
    <div class="input-group">
        <label>Username</label>
        <input type = "text" name = "username">
    </div>
    <div class="input-group">
        <label>Password</label>
        <input type = "password" name = "password">
    </div>
    <div class = "input-group">
    <button type="submit" class="btn" name="login_user">Zaloguj</button>

    </div>
    <p>
    Nie masz konta? <a href="register.php">Zarejestruj się</a>
    </p>
    </form>
</body>
</html>