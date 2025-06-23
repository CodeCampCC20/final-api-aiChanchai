/*
  Warnings:

  - You are about to drop the column `role` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Doctor` DROP COLUMN `role`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `role`;
