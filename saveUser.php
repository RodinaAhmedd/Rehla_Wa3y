<?php
$conn = new PDO("mysql:host=localhost;dbname=awareness_db;charset=utf8", "root", "");

if(isset($_POST['fName'])) {
    $stmt = $conn->prepare("INSERT INTO users_data (first_name, last_name, role, result_analysis) VALUES (?, ?, ?, ?)");
    $stmt->execute([$_POST['fName'], $_POST['lName'], $_POST['role'], $_POST['result']]);
}
?>