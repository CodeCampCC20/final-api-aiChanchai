/*
  Warnings:

  - Made the column `specialization` on table `Doctor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Doctor` MODIFY `specialization` VARCHAR(191) NOT NULL DEFAULT 'test';
