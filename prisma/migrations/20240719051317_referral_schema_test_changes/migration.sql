-- DropForeignKey
ALTER TABLE "Referral" DROP CONSTRAINT "Referral_courseId_fkey";

-- AlterTable
ALTER TABLE "Referral" ALTER COLUMN "courseId" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "referralCode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
