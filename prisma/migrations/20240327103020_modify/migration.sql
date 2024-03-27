/*
  Warnings:

  - You are about to drop the column `developerId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_developerId_fkey`;

-- AlterTable
ALTER TABLE `Task` DROP COLUMN `developerId`;
