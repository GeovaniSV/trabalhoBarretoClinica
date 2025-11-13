-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paciente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(14) NOT NULL,
    `cep` VARCHAR(9) NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `Paciente_id_key`(`id`),
    UNIQUE INDEX `Paciente_usuarioId_key`(`usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Procedimentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Procedimentos_id_key`(`id`),
    UNIQUE INDEX `Procedimentos_nome_key`(`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(14) NOT NULL,
    `cep` VARCHAR(9) NOT NULL,
    `especialidade` VARCHAR(255) NOT NULL,
    `usuarioId` INTEGER NOT NULL,

    UNIQUE INDEX `Medico_id_key`(`id`),
    UNIQUE INDEX `Medico_usuarioId_key`(`usuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanoDeSaude` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `cobertura` INTEGER NOT NULL,

    UNIQUE INDEX `PlanoDeSaude_id_key`(`id`),
    UNIQUE INDEX `PlanoDeSaude_nome_key`(`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Paciente` ADD CONSTRAINT `Paciente_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medico` ADD CONSTRAINT `Medico_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
