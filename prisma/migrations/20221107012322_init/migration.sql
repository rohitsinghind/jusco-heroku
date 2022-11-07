-- CreateTable
CREATE TABLE `invoice_table` (
    `id` VARCHAR(191) NOT NULL,
    `invoice_no` VARCHAR(191) NOT NULL,
    `hsn_code` VARCHAR(191) NOT NULL,
    `quantiy` VARCHAR(191) NOT NULL,
    `uom` VARCHAR(191) NOT NULL,
    `rate_per_unit` VARCHAR(191) NOT NULL,
    `discount` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `taxable` VARCHAR(191) NOT NULL,
    `cgst_rate` VARCHAR(191) NOT NULL,
    `cgst_amount` VARCHAR(191) NOT NULL,
    `sgst_rate` VARCHAR(191) NOT NULL,
    `sgst_amount` VARCHAR(191) NOT NULL,
    `igst_rate` VARCHAR(191) NOT NULL,
    `igst_amount` VARCHAR(191) NOT NULL,
    `total_value` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `invoice_table_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
