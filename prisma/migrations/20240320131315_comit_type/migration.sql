/*
  Warnings:

  - You are about to drop the column `type` on the `Vehicules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vehicules" DROP COLUMN "type";

-- CreateTable
CREATE TABLE "_TypeVehiculesToVehicules" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TypeVehiculesToVehicules_AB_unique" ON "_TypeVehiculesToVehicules"("A", "B");

-- CreateIndex
CREATE INDEX "_TypeVehiculesToVehicules_B_index" ON "_TypeVehiculesToVehicules"("B");

-- AddForeignKey
ALTER TABLE "_TypeVehiculesToVehicules" ADD CONSTRAINT "_TypeVehiculesToVehicules_A_fkey" FOREIGN KEY ("A") REFERENCES "TypeVehicules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TypeVehiculesToVehicules" ADD CONSTRAINT "_TypeVehiculesToVehicules_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
