<?php
namespace App;

use PDO;
use Ramsey\Uuid\Uuid;

class PostController {
    public static function create($data) {
        Validator::validatePost($data);
        $pdo = Database::connect();

        $uuid = Uuid::uuid4()->toString();


        $stmt = $pdo->prepare("SELECT * FROM User WHERE uuid = ?");
        $stmt->execute([$data['user_id']]);
        if (!$stmt->fetch()) {
            http_response_code(400);
            echo json_encode(['error' => 'User not found']);
            return;
        }

        $stmt = $pdo->prepare("INSERT INTO Post (uuid, title, content, userUuid) VALUES (?, ?, ?, ?)");
        $stmt->execute([$uuid, $data['title'], $data['content'], $data['user_id']]);
        echo json_encode(['message' => 'Post created']);
    }

   public static function getAll() {
       $pdo = Database::connect();
       $stmt = $pdo->query("
           SELECT
               p.uuid AS post_uuid,
               p.title,
               p.content,
               u.uuid AS user_uuid,
               u.name AS user_name
           FROM Post p
           JOIN User u ON p.userUuid = u.uuid
       ");

       $posts = [];
       while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
           $posts[] = [
               'uuid' => $row['post_uuid'],
               'title' => $row['title'],
               'content' => $row['content'],
               'user' => [
                   'uuid' => $row['user_uuid'],
                   'name' => $row['user_name']
               ]
           ];
       }

       echo json_encode($posts);
   }
}
