/*
  Warnings:

  - You are about to drop the column `reciver_name` on the `wishes` table. All the data in the column will be lost.
  - You are about to drop the column `wishe_type` on the `wishes` table. All the data in the column will be lost.
  - Added the required column `receiver_name` to the `wishes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wish_type` to the `wishes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `wishes` DROP COLUMN `reciver_name`,
    DROP COLUMN `wishe_type`,
    ADD COLUMN `receiver_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `wish_type` ENUM('mobile', 'app') NOT NULL;
