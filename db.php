<?php
$servername = "sql104.infinityfree.com"; // Find this in MySQL Database section on InfinityFree
$username = "if0_39373605";      // Your InfinityFree database username
$password = "Zabtechhub2025";       // Your InfinityFree database password
$dbname = "if0_39373605_zabtechhub"; // Your InfinityFree database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
