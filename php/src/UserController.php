<?php
namespace App;

use PDO;
use Ramsey\Uuid\Uuid;

class UserController {
    public static function create($data) {
        Validator::validateUser($data);
        $pdo = Database::connect();

        $uuid = Uuid::uuid4()->toString();

        $stmt = $pdo->prepare("INSERT INTO User (uuid, name, age, email) VALUES (?, ?, ?, ?)");
        $stmt->execute([$uuid, $data['name'], $data['age'], $data['email']]);
        echo json_encode(['message' => 'User created']);
    }

   public static function getAll() {
       $pdo = Database::connect();
       $stmt = $pdo->query("
           SELECT
               u.uuid,
               u.name,
               u.email,
               COUNT(p.uuid) AS postCount
           FROM User u
           LEFT JOIN Post p ON p.userUuid = u.uuid
           GROUP BY u.uuid, u.name, u.email
       ");
       echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
   }
}
