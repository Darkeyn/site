<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");


$mysqli = new mysqli("localhost","root","root","bd_site");
$mysqli->query( "SET NAMES 'utf8'");

$str = $mysqli->query("SELECT * FROM `main`");

if($result = $str){
    foreach($result as $row){
         
        $zag = $row["zag"];
        $a = $row["a"];
        $adress = $row["adress"];
        $text = $row["text"];
    }
}

echo json_encode($zag);

?>