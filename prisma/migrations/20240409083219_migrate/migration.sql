/*
  Warnings:

  - Added the required column `numero` to the `Generation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Generation" ADD COLUMN     "numero" TEXT NOT NULL;
