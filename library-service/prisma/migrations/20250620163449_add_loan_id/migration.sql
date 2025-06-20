/*
  Warnings:

  - The primary key for the `Loan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ide` on the `Loan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_pkey",
DROP COLUMN "ide",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Loan_pkey" PRIMARY KEY ("id");
