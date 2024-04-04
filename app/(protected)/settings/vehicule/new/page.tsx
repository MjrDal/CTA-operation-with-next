import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FormVehiculeAdd } from "../[vehiculeId]/detail/vehiculeForm";

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

const VehiculeFormPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findMany();
  const type = await prisma.typeVehicules.findMany();
  const theme = await prisma.themes.findMany();

  return (
    <div className="m-4">
      <Link href="/settings/vehicule">
        <Button>Retour</Button>
      </Link>
      <Card className=" mt-4  p-4">
        <FormVehiculeAdd casernes={casernes} type={type} theme={theme} />
      </Card>
    </div>
  );
};

export default VehiculeFormPage;
