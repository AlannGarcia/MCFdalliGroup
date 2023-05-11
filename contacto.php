<?php
$to = "alanguillermogarcia2001@gmail.com"; // Reemplaza esto con tu dirección de correo electrónico
$subject = "MCF"; // El asunto del correo electrónico que recibirás
$headers = "From: " . $_POST["email"]; // El correo electrónico del remitente


// Verifica si se han enviado datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica que los campos obligatorios no estén vacíos
    if (!empty($_POST["nombre"]) && !empty($_POST["email"]) && !empty($_POST["mensaje"])) {
        // Recupera los datos del formulario
        $name = $_POST["nombre"];
        $email = $_POST["email"];
        $message = $_POST["mensaje"];
        
        // Construye el cuerpo del correo electrónico
        $body = "Nombre: " . $name . "\n";
        $body .= "Email: " . $email . "\n";
        $body .= "Mensaje:\n" . $message . "\n";
        
        // Envía el correo electrónico
        if (mail($to, $subject, $body, $headers)) {
            header('Location: emailEnviado.html');
            exit;
        } else {
            header('Location: emailProblemas.html');
            exit;
        }
    } else {
        echo "Todos los campos son obligatorios";
    }
}  

        