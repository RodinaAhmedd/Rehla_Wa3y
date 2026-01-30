<?php
$conn = new PDO("mysql:host=localhost;dbname=awareness_db;charset=utf8", "root", "");
$data = $conn->query("SELECT * FROM users_data")->fetchAll();
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head><title>لوحة التحكم</title><link rel="stylesheet" href="style.css"></head>
<body>
    <div class="container" style="max-width: 800px;">
        <h2>بيانات المشتركين</h2>
        <table border="1" style="width:100%; border-collapse: collapse;">
            <tr style="background:#00796b; color:white;">
                <th>الاسم</th><th>الدور</th><th>النتيجة</th>
            </tr>
            <?php foreach($data as $row): ?>
            <tr>
                <td><?= $row['first_name'] . " " . $row['last_name'] ?></td>
                <td><?= $row['role'] ?></td>
                <td><?= $row['result_analysis'] ?></td>
            </tr>
            <?php endforeach; ?>
        </table>
        <button onclick="location.href='index.php'">خروج</button>
    </div>
</body>
</html>