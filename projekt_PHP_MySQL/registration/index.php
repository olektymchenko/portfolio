<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
    <title>Rezerwacje</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div class="header">
	<h2>Rezerwacja miejsc pracy</h2>
</div>
<div class="content">
  	<!-- notification message -->
  	<?php if (isset($_SESSION['success'])) : ?>
      <div class="error success" >
      	<h3>
          <?php 
          	echo $_SESSION['success']; 
          	unset($_SESSION['success']);
          ?>
      	</h3>
      </div>
  	<?php endif ?>

    <!-- logged in user information -->
    <?php  if (isset($_SESSION['username'])) : ?>
        <p>Witaj <strong><?php echo $_SESSION['username']; ?> !</strong></p>
        <button id="getReservations">Zobacz rezerwacje</button>
        <button id="getWorkSpaceAndEquipment">1.Połącz miejsca pracy z wyposzażeniem</button>
        <button id="connectWorkPlaceWithUser">2.Połącz z użytkownikiem</button>
        <button id="removeWorkSpaceAndEquipment">Rozdziel miejsca pracy i użytkownika</button>
        <button id="removeWorkSpaceAndEquipmentBtn">Rozdziel miejsca pracy i użytkownika</button>

        <button id="submitWorkSpace">1.Połącz miejsce z wyposażeniem</button>
                    <button id="submitUserWithWorkPlace">2.Połącz użytkownika z miejscem pracy</button>
                    <button id="addWorkSpace">Dodaj miejsce pracy</button>
                    <button id="addWorkEquipment">Dodaj wyposażenie</button>

        <div id="listOfDates">
            <div id="listOfEquipment"></div>
            <div id="listOfWorkplaces"></div>   
        </div>
    	<p> <a href="index.php?logout='1'" style="color: red;">Wyloguj</a> </p>
    <?php endif ?>
</div>
        <script type="text/javascript" src="..\content\jquery.js"></script>
        <script type="text/javascript" src="..\content\getWorkSpaces.js"></script>
        <script type="text/javascript" src="..\content\getWorkEquipment.js"></script>
        <script type="text/javascript" src="..\content\addWorkSpace.js"></script>
        <script type="text/javascript" src="..\content\addEquipment.js"></script>
        <script type="text/javascript" src="..\content\connectAll.js"></script>
        <script type="text/javascript" src="..\content\conUserWorkSpace.js"></script>
        <script type="text/javascript" src="..\content\connectUserWithWorkplace.js"></script>
        <script type="text/javascript" src="..\content\showReservations.js"></script>
        <script type="text/javascript" src="..\content\removeWorkSpace.js"></script>
        <script type="text/javascript" src="..\content\removeWorkSpaceBtn.js"></script>
        

</body>
</html>