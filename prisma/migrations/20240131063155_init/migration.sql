/*
  Warnings:

  - You are about to drop the column `user_id` on the `verify_otps` table. All the data in the column will be lost.
  - Added the required column `mobile` to the `verify_otps` table without a default value. This is not possible if the table is not empty.
  - Made the column `expire_time` on table `verify_otps` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `verify_otps` DROP COLUMN `user_id`,
    ADD COLUMN `mobile` VARCHAR(191) NOT NULL,
    MODIFY `expire_time` VARCHAR(191) NOT NULL;
