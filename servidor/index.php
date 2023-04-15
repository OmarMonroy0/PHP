<?php
// Definir las credenciales de la base de datos
$servername = "";
$username = "";
$password = "";
$dbname = "figuras";

// Crear una conexión a la base de datos
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("La conexión falló: " . mysqli_connect_error());
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data  = json_decode(file_get_contents('php://input'), true);
    $figura = $data['figura'];
    echo $figura;
    if ($figura === 'cuadrado') {
        $lado = $data['lado'];
        $area = $data['area'];
        $sql = "INSERT INTO cuadrado (lado,area) values ('$lado','$area')";

        if (mysqli_query($conn, $sql)) {
            echo "Se ingreso con exito";
        } else {
            echo "Debio haber un error a la hora de ingresar datos " . mysqli_error($conn);
        }
    } else if ($figura === 'circulo') {
        $radio = $data['radio'];
        $area = $data['area'];

        $sql = "INSERT INTO circulo (radio,area) values ('$radio','$area')";
        if (mysqli_query($conn, $sql)) {
            echo "Se ingreso con exito";
        } else {
            echo "Debio haber un error a la hora de ingresar datos " . mysqli_error($conn);
        }
    } else if ($figura === 'triangulo') {
        $base = $data['base'];
        $altura = $data['altura'];
        $area = $data['area'];
        $sql = "INSERT INTO triangulo (base,altura,area) values ('$base','$altura','$area')";
        if (mysqli_query($conn, $sql)) {
            echo "Se ingreso con exito";
        } else {
            echo "Debio haber un error a la hora de ingresar datos " . mysqli_error($conn);
        }
    }
}
