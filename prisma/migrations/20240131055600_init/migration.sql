/*
  Warnings:

  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `verify_otps` table. All the data in the column will be lost.
  - You are about to drop the column `expireTime` on the `verify_otps` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `verify_otps` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `verify_otps` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `verify_otps` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `verify_otps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `verify_otps` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'inactive';

-- AlterTable
ALTER TABLE `verify_otps` DROP COLUMN `createdAt`,
    DROP COLUMN `expireTime`,
    DROP COLUMN `mobile`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `userId`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `expire_time` VARCHAR(191) NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;
