<?php
    header('Content-Type: application/json');
    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $dbName = 'hoteldb';
    $port = '3307';
    $conn = new mysqli($server, $username, $password, $dbName,$port);
    if ($conn -> connect_errno) {
        echo $conn -> connect_errno;
        return;
    }

    $identificativo = $_POST['id'];
    $sql = "
        DELETE
        FROM paganti
        WHERE id=" . $identificativo;
    $conn -> query($sql);

    $conn -> close();
