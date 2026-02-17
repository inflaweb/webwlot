<?php
header("Content-Type: application/json");

$paquetes = [
    ["id"=>1,"name"=>"Paquete El Clásico","comida"=>"Elote tradicional","meseros"=>3,"duracion"=>"2 horas","descripcion"=>"Receta tradicional."],
    ["id"=>2,"name"=>"Dúo Tradicional","comida"=>"Elote + Chascas","meseros"=>3,"duracion"=>"3 horas","descripcion"=>"Ideal para eventos largos."],
    ["id"=>3,"name"=>"Crunch Time","comida"=>"Elote Crunch","meseros"=>4,"duracion"=>"2 horas","descripcion"=>"Para jóvenes."],
    ["id"=>4,"name"=>"Gourmet Grill","comida"=>"Costillitas","meseros"=>4,"duracion"=>"2 horas","descripcion"=>"Estilo elegante."],
    ["id"=>5,"name"=>"Mix Premium","comida"=>"Combo especial","meseros"=>4,"duracion"=>"3 horas","descripcion"=>"Lo más novedoso."],
    ["id"=>6,"name"=>"El Especialista","comida"=>"Chascas personalizadas","meseros"=>3,"duracion"=>"2 horas","descripcion"=>"Personalizado al gusto."],
    ["id"=>7, "name"=>"Tosti-Locura", "comida"=>"Tostielotes clásicos", "meseros"=>3, "duracion"=>"2 horas", "descripcion"=>"Explosión de sabor con base de Tostitos."],
    ["id"=>8, "name"=>"Combo Explosivo", "comida"=>"Tostielotes + Elote Crunch", "meseros"=>4, "duracion"=>"3 horas", "descripcion"=>"Dúo crujiente para los paladares más exigentes."],
    ["id"=>9, "name"=>"Elote Party Pack", "comida"=>"Tostielotes + Elote tradicional", "meseros"=>4, "duracion"=>"3 horas", "descripcion"=>"Equilibrio perfecto entre lo nuevo y lo clásico."],
    ["id"=>10, "name"=>"Tosti-Chasca", "comida"=>"Tostielotes + Chascas", "meseros"=>3, "duracion"=>"2 horas", "descripcion"=>"Combinación dinámica ideal para personalizar con salsas."],
    ["id"=>11, "name"=>"Banquete Callejero", "comida"=>"Tostielotes + Costillitas", "meseros"=>4, "duracion"=>"3 horas", "descripcion"=>"La experiencia completa de feria en tu evento."]

];

$keyword = $_GET["keyword"] ?? "";
$duracion = $_GET["duracion"] ?? "";
$meseros = $_GET["meseros"] ?? "";

$result = array_filter($paquetes, function($p) use ($keyword,$duracion,$meseros){
    return
        (empty($keyword) || stripos($p["name"],$keyword)!==false) &&
        (empty($duracion) || $p["duracion"]==$duracion) &&
        (empty($meseros) || $p["meseros"]==$meseros);
});

echo json_encode(array_values($result));
?>
