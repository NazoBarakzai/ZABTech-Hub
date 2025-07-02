<?php
// Enable error reporting (for development)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Set content type to JSON
header('Content-Type: application/json');

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

// Database connection settings
$host = 'localhost';
$db   = 'zabtechhub';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

// Create PDO connection
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Determine action
$action = $_GET['action'] ?? '';

switch ($action) {

    case 'contact':
        handleContact($pdo);
        break;

    case 'register_student':
        handleStudentRegistration($pdo);
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Invalid action']);
}

// Function to handle contact form
function handleContact($pdo)
{
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    if (!$name || !$email || !$message) {
        http_response_code(400);
        echo json_encode(['error' => 'All fields are required.']);
        return;
    }

    $sql = "INSERT INTO contact (name, email, message) VALUES (:name, :email, :message)";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([
            ':name'    => $name,
            ':email'   => $email,
            ':message' => $message
        ]);
        echo json_encode(['success' => 'Message sent successfully!']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send message: ' . $e->getMessage()]);
    }
}

// Function to handle student registration
function handleStudentRegistration($pdo)
{
    $requiredFields = [
        'student_name', 'father_name', 'dob', 'qualification', 'domicile', 'religion',
        'cnic', 'phone', 'guardian_occupation', 'guardian_phone', 'guardian_cnic',
        'temp_address', 'perm_address', 'trade'
    ];

    foreach ($requiredFields as $field) {
        if (empty($_POST[$field])) {
            http_response_code(400);
            echo json_encode(['error' => "Missing field: $field"]);
            return;
        }
    }

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

    try {
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
        echo json_encode(['success' => 'Student registered successfully!']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to register student: ' . $e->getMessage()]);
    }
}
?>
