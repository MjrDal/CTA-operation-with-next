-- CreateTable
CREATE TABLE "Generation" (
    "id" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "premier" TEXT NOT NULL,
    "deuxieme" TEXT NOT NULL,
    "troisieme" TEXT NOT NULL,
    "quatrieme" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "denomination" TEXT NOT NULL,
    "dialogue" TEXT NOT NULL,
    "radio1" TEXT,
    "radio2" TEXT,
    "radio3" TEXT,
    "radio4" TEXT,
    "note" TEXT NOT NULL,

    CONSTRAINT "Generation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenerationToVehicules" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GenerationToMessage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenerationToVehicules_AB_unique" ON "_GenerationToVehicules"("A", "B");

-- CreateIndex
CREATE INDEX "_GenerationToVehicules_B_index" ON "_GenerationToVehicules"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GenerationToMessage_AB_unique" ON "_GenerationToMessage"("A", "B");

-- CreateIndex
CREATE INDEX "_GenerationToMessage_B_index" ON "_GenerationToMessage"("B");

-- AddForeignKey
ALTER TABLE "_GenerationToVehicules" ADD CONSTRAINT "_GenerationToVehicules_A_fkey" FOREIGN KEY ("A") REFERENCES "Generation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenerationToVehicules" ADD CONSTRAINT "_GenerationToVehicules_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicules"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenerationToMessage" ADD CONSTRAINT "_GenerationToMessage_A_fkey" FOREIGN KEY ("A") REFERENCES "Generation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenerationToMessage" ADD CONSTRAINT "_GenerationToMessage_B_fkey" FOREIGN KEY ("B") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
