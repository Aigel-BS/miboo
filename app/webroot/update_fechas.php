<?php
// Simple script to update fecha_aplicacion in interjugadors table
$host = 'db';
$user = 'miboodb';
$pass = '!M1bo0.2025#Htyf567KJH';
$dbname = 'admin_miboo';

try {
    // Create connection using PDO
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    $pdo = new PDO($dsn, $user, $pass, $options);
    
    $sql = "UPDATE interjugadors SET fecha_aplicacion = fecha_limite WHERE fecha_aplicacion IS NULL";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    
    $rowCount = $stmt->rowCount();
    
    echo "<h1>Éxito</h1>";
    echo "<p>Se han actualizado " . $rowCount . " registros correctamente.</p>";
    echo "<p>La <b>fecha_aplicacion</b> ahora tiene el valor de <b>fecha_limite</b> para los registros que estaban en NULL.</p>";

} catch (\PDOException $e) {
    echo "<h1>Error</h1>";
    echo "Error actualizando los registros: " . $e->getMessage();
}
?>
