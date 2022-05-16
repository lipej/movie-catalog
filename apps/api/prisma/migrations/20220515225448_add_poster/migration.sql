/*
  Warnings:

  - Added the required column `poster` to the `MovieShow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovieShow" ADD COLUMN     "poster" TEXT NOT NULL;
