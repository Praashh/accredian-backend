/*
  Warnings:

  - You are about to drop the column `courseId` on the `Referral` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Referral" DROP CONSTRAINT "Referral_courseId_fkey";

-- AlterTable
ALTER TABLE "Referral" DROP COLUMN "courseId";
