<?php
header("Content-Type: application/json");
require_once "db.php"; // Asegúrate de que db.php esté en la misma carpeta

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["message" => "No se recibieron datos"]);
    exit;
}

$nombre = $data["nombre"];
$email = $data["email"];
$telefono = $data["telefono"];
$fecha = $data["fecha"];
$personas = $data["personas"];
$paquete_id = $data["paquete"];

// Preparar la consulta SQL (Asegúrate de que tu tabla tenga estas columnas)
$stmt = $conn->prepare("INSERT INTO reservas (nombre_cliente, email_cliente, telefono, fecha_evento, num_personas, paquete_id) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssii", $nombre, $email, $telefono, $fecha, $personas, $paquete_id);

if ($stmt->execute()) {
    echo json_encode(["message" => "¡Reserva confirmada con éxito!"]);
} else {
    echo json_encode(["message" => "Error al guardar en la base de datos: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>