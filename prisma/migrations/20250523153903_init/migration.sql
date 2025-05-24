-- CreateTable
CREATE TABLE `User` (
    `uuid` CHAR(36) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `age` INTEGER NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_uuid_idx`(`uuid`),
    INDEX `User_email_idx`(`email`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `uuid` CHAR(36) NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `content` VARCHAR(250) NOT NULL,
    `userUuid` VARCHAR(191) NOT NULL,

    INDEX `Post_userUuid_idx`(`userUuid`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userUuid_fkey` FOREIGN KEY (`userUuid`) REFERENCES `User`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
