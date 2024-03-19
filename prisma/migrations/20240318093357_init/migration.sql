/*
  Warnings:

  - Made the column `groupement` on table `Groupements` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Groupements" ALTER COLUMN "groupement" SET NOT NULL;
