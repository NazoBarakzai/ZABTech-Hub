<?php
// Database credentials
$host = "localhost";
$username = "your_db_user";
$password = "your_db_password";
$database = "zabtechhub";

// Create database connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert data into database
$sql = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
 
