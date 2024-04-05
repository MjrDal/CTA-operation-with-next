import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FormInterventionAdd } from "../[interventionId]/detail/interventionForm";

interface Props {
  casernes: {
    id: string;
    groupement: string;
    name: string;
  }[];
  type: {
    id: string;
    type: string;
  }[];
  theme: {
    id: string;
    theme: string;
  }[];
}

const InterventionFormPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findMany();
  const type = await prisma.typeVehicules.findMany();
  const theme = await prisma.themes.findMany();

  return (
    <div className="m-4">
      <Link href="/settings/intervention">
        <Button>Retour</Button>
      </Link>
      <Card className=" mt-4  p-4">
        <FormInterventionAdd />
      </Card>
    </div>
  );
};

export default InterventionFormPage;
