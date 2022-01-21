<?php

$targetDir = "C:/Users/hamedasad_313/boofe/public/Images/Restaurants/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

if (isset($_POST["submit"]) && !empty($_FILES["file"]["name"])) {
    $allowTypes = array('jpg', 'png', 'jpeg');
    if (in_array($fileType, $allowTypes)) {
        move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath);
    }
}