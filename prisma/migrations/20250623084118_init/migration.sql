/*
  Warnings:

  - You are about to drop the `Docter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Docter`;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `specialization` VARCHAR(191) NOT NULL,
    `role` ENUM('DOCTOR', 'USER') NOT NULL DEFAULT 'DOCTOR',

    UNIQUE INDEX `Doctor_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
