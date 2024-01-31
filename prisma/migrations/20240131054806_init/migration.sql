-- AlterTable
ALTER TABLE `users` ADD COLUMN `is_phone_number_verified` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `full_name` VARCHAR(191) NULL,
    MODIFY `work_status` VARCHAR(191) NULL,
    MODIFY `roll` VARCHAR(191) NOT NULL DEFAULT 'customer',
    MODIFY `profile_image` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `verify_otps` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `otp` VARCHAR(191) NOT NULL,
    `expireTime` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
