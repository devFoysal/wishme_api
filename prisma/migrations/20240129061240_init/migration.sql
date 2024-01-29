-- CreateTable
CREATE TABLE `acadmic_semester` (
    `id` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `startMonth` VARCHAR(191) NOT NULL,
    `endMonth` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `acadmic_faculty` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `acadmic_department` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `acadmicFacultyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `students` (
    `id` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `middelName` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `contactNo` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `bloodGroup` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `acadmicSemesterId` VARCHAR(191) NOT NULL,
    `acadmicDepartmentId` VARCHAR(191) NULL,
    `acadmicFacultyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faculties` (
    `id` VARCHAR(191) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `middelName` VARCHAR(191) NOT NULL,
    `profileImage` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `contactNo` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `bloodGroup` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `acadmicDepartmentId` VARCHAR(191) NULL,
    `acadmicFacultyId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `acadmic_department` ADD CONSTRAINT `acadmic_department_acadmicFacultyId_fkey` FOREIGN KEY (`acadmicFacultyId`) REFERENCES `acadmic_faculty`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_acadmicSemesterId_fkey` FOREIGN KEY (`acadmicSemesterId`) REFERENCES `acadmic_semester`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_acadmicDepartmentId_fkey` FOREIGN KEY (`acadmicDepartmentId`) REFERENCES `acadmic_department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_acadmicFacultyId_fkey` FOREIGN KEY (`acadmicFacultyId`) REFERENCES `acadmic_faculty`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faculties` ADD CONSTRAINT `faculties_acadmicDepartmentId_fkey` FOREIGN KEY (`acadmicDepartmentId`) REFERENCES `acadmic_department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faculties` ADD CONSTRAINT `faculties_acadmicFacultyId_fkey` FOREIGN KEY (`acadmicFacultyId`) REFERENCES `acadmic_faculty`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
