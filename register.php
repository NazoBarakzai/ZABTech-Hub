<?php
// Database connection
$host = 'localhost';
$db = 'zabtechhub';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Insert form data into the database
$sql = "INSERT INTO students (
    student_name, father_name, dob, qualification, domicile, religion,
    cnic, phone, guardian_occupation, guardian_phone, guardian_cnic,
    temp_address, perm_address, trade
) VALUES (
    :student_name, :father_name, :dob, :qualification, :domicile, :religion,
    :cnic, :phone, :guardian_occupation, :guardian_phone, :guardian_cnic,
    :temp_address, :perm_address, :trade
)";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':student_name'        => $_POST['student_name'],
    ':father_name'         => $_POST['father_name'],
    ':dob'                 => $_POST['dob'],
    ':qualification'       => $_POST['qualification'],
    ':domicile'            => $_POST['domicile'],
    ':religion'            => $_POST['religion'],
    ':cnic'                => $_POST['cnic'],
    ':phone'               => $_POST['phone'],
    ':guardian_occupation' => $_POST['guardian_occupation'],
    ':guardian_phone'      => $_POST['guardian_phone'],
    ':guardian_cnic'       => $_POST['guardian_cnic'],
    ':temp_address'        => $_POST['temp_address'],
    ':perm_address'        => $_POST['perm_address'],
    ':trade'               => $_POST['trade']
]);

echo "Data inserted successfully!";
?>
