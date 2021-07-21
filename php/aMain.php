<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$mysqli = new mysqli("localhost","root","root","bd_site");
$mysqli->query( "SET NAMES 'utf8'");

$str = $mysqli->query("SELECT * FROM `main` WHERE id=(SELECT COUNT(*) FROM `main`)");

if($result = $str){
    foreach($result as $row){
         
        $zag = $row["zag"];
        $a = $row["a"];
        $adress = $row["adress"];
        $text = $row["text"];
    }
}

echo json_encode($a);

?>