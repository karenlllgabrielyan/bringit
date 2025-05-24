<?php
namespace App;

class Validator {
    public static function validateUser($data) {
        if (empty($data['name']) || strlen($data['name']) > 50) throw new \Exception("Invalid name");
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) throw new \Exception("Invalid email");
        if (!filter_var($data['age'], FILTER_VALIDATE_INT) || $data['age'] < 13 || $data['age'] > 120) {
            throw new \Exception("Invalid age");
        }
    }

    public static function validatePost($data) {
        if (empty($data['title']) || strlen($data['title']) > 50) throw new \Exception("Invalid title");
        if (empty($data['content']) || strlen($data['content']) > 250) throw new \Exception("Invalid content");
        if (empty($data['user_id'])) throw new \Exception("User ID required");
    }
}
