/*
  Warnings:

  - You are about to drop the column `endDate` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `endDate`,
    DROP COLUMN `startDate`,
    ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
