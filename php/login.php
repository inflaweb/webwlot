<?php
header("Content-Type: application/json");
require_once "db.php"; // Están en la misma carpeta, no cambia la ruta

$data = json_decode(file_get_contents("php://input"), true);
$email = $data["email"];
$password = $data["password"];

$stmt = $conn->prepare("SELECT email, password, rol FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    if ($password === $user["password"]) {
        echo json_encode([
            "success" => true,
            "rol" => $user["rol"],
            "usuario" => $user["email"]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Usuario no encontrado"]);
}
?>