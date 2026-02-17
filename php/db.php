<?php
$host = "localhost";
$user = "root"; 
$pass = "";     
$db   = "elotes_db";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["message" => "Error de conexión"]));
}
?>