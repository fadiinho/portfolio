-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `github` VARCHAR(191) NOT NULL,
    `screenshotUrl` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `liveDemo` VARCHAR(191) NULL,
    `stacks` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
