-- CreateEnum
CREATE TYPE "VehiculeStatus" AS ENUM ('DISPONIBLE', 'INDISPONIBLE', 'TRAJET', 'ARRIVE', 'TRASPORT', 'HOPITAL');

-- AlterTable
ALTER TABLE "Casernes" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vehicules" ADD COLUMN     "status" "VehiculeStatus" NOT NULL DEFAULT 'DISPONIBLE';
