/*
  Warnings:

  - You are about to drop the column `name` on the `Docter` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Docter` DROP COLUMN `name`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `name`;
