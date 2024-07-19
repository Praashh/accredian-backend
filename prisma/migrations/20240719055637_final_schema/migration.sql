/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `refereeId` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `referralCode` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Referral` table. All the data in the column will be lost.
  - Added the required column `email` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Made the column `courseId` on table `Referral` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Referral` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Referral" DROP CONSTRAINT "Referral_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Referral" DROP CONSTRAINT "Referral_refereeId_fkey";

-- DropForeignKey
ALTER TABLE "Referral" DROP CONSTRAINT "Referral_referrerId_fkey";

-- DropIndex
DROP INDEX "Referral_refereeId_key";

-- DropIndex
DROP INDEX "Referral_referralCode_key";

-- AlterTable
ALTER TABLE "Referral" DROP COLUMN "createdAt",
DROP COLUMN "refereeId",
DROP COLUMN "referralCode",
DROP COLUMN "updatedAt",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "referredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "courseId" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
