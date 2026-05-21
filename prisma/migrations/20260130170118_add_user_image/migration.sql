/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerk_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerk_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "clerk_id" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_clerk_id_key" ON "User"("clerk_id");
