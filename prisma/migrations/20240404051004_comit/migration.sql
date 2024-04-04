/*
  Warnings:

  - Made the column `groupement` on table `Casernes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Casernes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Communes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `code` on table `Communes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `premier` on table `Communes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deuxieme` on table `Communes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `troisieme` on table `Communes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quatrieme` on table `Communes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `theme` on table `Motifs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `motif` on table `Motifs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `theme` on table `Themes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `TypeVehicules` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Vehicules` required. This step will fail if there are existing NULL values in that column.
  - Made the column `affectation` on table `Vehicules` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Casernes" ALTER COLUMN "groupement" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Communes" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "code" SET NOT NULL,
ALTER COLUMN "premier" SET NOT NULL,
ALTER COLUMN "deuxieme" SET NOT NULL,
ALTER COLUMN "troisieme" SET NOT NULL,
ALTER COLUMN "quatrieme" SET NOT NULL;

-- AlterTable
ALTER TABLE "Motifs" ALTER COLUMN "theme" SET NOT NULL,
ALTER COLUMN "motif" SET NOT NULL;

-- AlterTable
ALTER TABLE "Themes" ALTER COLUMN "theme" SET NOT NULL;

-- AlterTable
ALTER TABLE "TypeVehicules" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "Vehicules" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "affectation" SET NOT NULL;
