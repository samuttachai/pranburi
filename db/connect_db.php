<?php
	$server = "us-cdbr-iron-east-03.cleardb.net";
	$username = "b44443248efc2f";
	$password = "d8a629fd";
	$db = "heroku_ebd0bc441b230d3";
	$conn = new mysqli($server, $username, $password, $db);
	mysqli_query($conn, "SET NAMES utf8");
	
?>	
	