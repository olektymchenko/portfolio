<?php include('server.php')?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration system PHP and MySQL</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
    <h2>Zarejestruj się</h2>
    </header>


    <form method="post" action="register.php">
    <?php include('errors.php'); ?>
    <div class="input-group">
        <label>Imię i nazwisko</label>
        <input type="text" name="username" value="<?php echo $username; ?>">
    </div>
    <div class="input-group">
        <label>Email:</label>
        <input type="email" name="email" value="<?php echo $email; ?>">
    </div>
    
    <div class="input-group">
        <label>Numer telefonu:</label>
        <input type="tel" name="tel" value="<?php echo $tel; ?>">
    </div>
    <div class="input-group">
        <label>Opis:</label>
        <textarea name="about" rows="4" cols="50" value="<?php echo about; ?>"></textarea>
    </div>

    <div class="input-group">
        <label>Hasło:</label>
        <input type="password" name="password_1">
    </div>
    <div class="input-group">
        <label>Powtórz hasło:</label>
        <input type="password" name="password_2">
    </div>
<div class="input-group">
    <button type="submit" class="btn" name="reg_user">Rejestracja</button>
</div>
<p>
    Masz juz konto? <a href="login.php">Wejdz</a>
</p>
</form>
</body>
</html>