<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success, $status, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
    ], $extra);
}

// Подключение БД и создание объекта
require __DIR__ . '/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// Получение данных из формы
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// Если запрос выполнен не методом POST
if ($_SERVER["REQUEST_METHOD"] != "POST") :
    $returnData = msg(0, 404);

// Если проверка успешна
else :

    $zag = trim($data->zag);
    $a = trim($data->a);
    $adress = trim($data->adress);
    $text = trim($data->text);


        try {
            
                $insert_query = "INSERT INTO `main` (`id`, `zag`, `a`, `adress`, `text`) 
                VALUES (NULL, '$zag', '$a', '$adress', '$text')";

                $insert_stmt = $conn->prepare($insert_query);

                // Привязка данных
                $insert_stmt->bindValue(':zag', htmlspecialchars(strip_tags($zag)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':a', htmlspecialchars(strip_tags($zag)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':adress', htmlspecialchars(strip_tags($zag)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':text', htmlspecialchars(strip_tags($zag)), PDO::PARAM_STR);

                $insert_stmt->execute();

                $returnData = msg(1, 201);

        } catch (PDOException $e) {
            $returnData = msg(0, 500);
        }
    endif;

echo json_encode($returnData);