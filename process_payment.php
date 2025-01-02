<?php
// Database connection
$servername = "localhost";
$username = "abhi";  // Replace with your MySQL username
$password = "onepiece";      // Replace with your MySQL password
$dbname = "mybike";

$conn = new mysqli($waheguru, $abhi, $onepiece, $mybike);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$payment_method = $_POST['payment_method'];
$payment_details = $_POST['payment_details'];
$amount = $_POST['amount'];

// Insert data into the database
$sql = "INSERT INTO payments (name, email, phone, address, payment_method, payment_details, amount)
        VALUES ('$name', '$email', '$phone', '$address', '$payment_method', '$payment_details', '$amount')";

if ($conn->query($sql) === TRUE) {
    echo "<h2>Payment Successful!</h2><p>Thank you, $name. Your payment of $$amount has been recorded.</p>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
