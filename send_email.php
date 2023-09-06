<?php

header("Access-Control-Allow-Origin: *");  
header("Access-Control-Allow-Headers: *"); 
header("Content-Type: application/json");  


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["error" => "Invalid request method"]);
    exit;
}


$name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
$email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo json_encode(["error" => "Falta rellenar la información de algunos campos"]);
    exit;
}

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "cocolabs.ventas@gmail.com";
    $mail->Password = "wojzkqqqwbyqiibw"; 

    $mail->setFrom($email, $name);
    $mail->addAddress("cocolabs.ventas@gmail.com", "Coco Labs");

    $mail->Subject = "Mensaje de contacto de $name";
    $mail->Body = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\n\nMensaje:\n$message";

    $mail->send();
    echo json_encode(["success" => "Email sent"]);
} catch (Exception $e) {
    echo json_encode(["error" => "No se pudo enviar el mensaje. Mailer Error: {$mail->ErrorInfo}"]);
}

?>

