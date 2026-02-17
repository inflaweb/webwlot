<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["email"];
$password = $data["password"];
$confirm = $data["confirmPassword"];

$file = "users.json";

if(!file_exists($file)){
    file_put_contents($file,json_encode([]));
}

$users = json_decode(file_get_contents($file),true);

if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
    echo json_encode(["message"=>"Email inválido"]);
    exit;
}

if($password !== $confirm){
    echo json_encode(["message"=>"Contraseñas no coinciden"]);
    exit;
}

foreach($users as $user){
    if($user["email"] === $email){
        echo json_encode(["message"=>"Correo ya registrado"]);
        exit;
    }
}

$users[] = ["email"=>$email,"password"=>$password];
file_put_contents($file,json_encode($users));

echo json_encode(["message"=>"Usuario registrado correctamente"]);
?>
