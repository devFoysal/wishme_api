/*
  Warnings:

  - You are about to drop the `acadmic_department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `acadmic_faculty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `acadmic_semester` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `acadmic_department` DROP FOREIGN KEY `acadmic_department_acadmicFacultyId_fkey`;

-- DropForeignKey
ALTER TABLE `faculties` DROP FOREIGN KEY `faculties_acadmicDepartmentId_fkey`;

-- DropForeignKey
ALTER TABLE `faculties` DROP FOREIGN KEY `faculties_acadmicFacultyId_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_acadmicDepartmentId_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_acadmicFacultyId_fkey`;

-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_acadmicSemesterId_fkey`;

-- DropTable
DROP TABLE `acadmic_department`;

-- DropTable
DROP TABLE `acadmic_faculty`;

-- DropTable
DROP TABLE `acadmic_semester`;

-- DropTable
DROP TABLE `faculties`;

-- DropTable
DROP TABLE `students`;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `status` ENUM('active', 'inactive') NOT NULL,
    `work_status` VARCHAR(191) NOT NULL,
    `roll` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `profile_image` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
