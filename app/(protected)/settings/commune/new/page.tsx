import { AddCommunesButton } from "@/components/features/addCommunesButton";
import { PrismaClient } from "@prisma/client";

const CommuneSettingsPage = async () => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findMany();

  return (
    <div>
      <h2>Commune</h2>
      <AddCommunesButton casernes={casernes} />
    </div>
  );
};

export default CommuneSettingsPage;
