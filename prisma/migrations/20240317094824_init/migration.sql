-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Groupements" (
    "id" TEXT NOT NULL,
    "groupement" TEXT,

    CONSTRAINT "Groupements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeVehicules" (
    "id" TEXT NOT NULL,
    "type" TEXT,

    CONSTRAINT "TypeVehicules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Themes" (
    "id" TEXT NOT NULL,
    "theme" TEXT,

    CONSTRAINT "Themes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motifs" (
    "id" TEXT NOT NULL,
    "theme" TEXT,
    "motif" TEXT,

    CONSTRAINT "Motifs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moyens" (
    "id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "Moyens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intervention" (
    "id" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "denomination" TEXT NOT NULL,
    "dialogue" TEXT NOT NULL,
    "radio1" TEXT,
    "radio2" TEXT,
    "radio3" TEXT,
    "radio4" TEXT,

    CONSTRAINT "Intervention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Casernes" (
    "id" TEXT NOT NULL,
    "groupement" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Casernes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communes" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "code" TEXT,
    "premier" TEXT,
    "deuxieme" TEXT,
    "troisieme" TEXT,
    "quatrieme" TEXT,

    CONSTRAINT "Communes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicules" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "type" TEXT,
    "affectation" TEXT,

    CONSTRAINT "Vehicules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ThemesToVehicules" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MotifsToMoyens" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "_ThemesToVehicules_AB_unique" ON "_ThemesToVehicules"("A", "B");

-- CreateIndex
CREATE INDEX "_ThemesToVehicules_B_index" ON "_ThemesToVehicules"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MotifsToMoyens_AB_unique" ON "_MotifsToMoyens"("A", "B");

-- CreateIndex
CREATE INDEX "_MotifsToMoyens_B_index" ON "_MotifsToMoyens"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThemesToVehicules" ADD CONSTRAINT "_ThemesToVehicules_A_fkey" FOREIGN KEY ("A") REFERENCES "Themes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ThemesToVehicules" ADD CONSTRAINT "_ThemesToVehicules_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MotifsToMoyens" ADD CONSTRAINT "_MotifsToMoyens_A_fkey" FOREIGN KEY ("A") REFERENCES "Motifs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MotifsToMoyens" ADD CONSTRAINT "_MotifsToMoyens_B_fkey" FOREIGN KEY ("B") REFERENCES "Moyens"("id") ON DELETE CASCADE ON UPDATE CASCADE;
