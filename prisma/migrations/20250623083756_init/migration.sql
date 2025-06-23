/*
  Warnings:

  - You are about to drop the column `createAt` on the `Docter` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Docter` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `User` table. All the data in the column will be lost.
  - Made the column `specialization` on table `Docter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Docter` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    MODIFY `specialization` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`;
