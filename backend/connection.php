<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding');

function connection() {
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'boofe';

    $conn = new mysqli($host, $user, $password, $database);
    mysqli_set_charset($conn, 'utf8');

    if ($conn->connect_error) {
        die('Connection failed: ' . $conn->connect_error);
    }

    return $conn;
}
