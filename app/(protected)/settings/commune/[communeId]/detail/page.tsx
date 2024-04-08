import { PageParams } from "@/components/types/next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FormCommuneAdd } from "./communeForm";

interface Props {
  casernes: {
    id: string;
    groupement: string;
    name: string;
  }[];
  commune: {
    id: string;
    name: string;
    code: string;
    premier: string;
    deuxieme: string;
    troisieme: string;
    quatrieme: string;
  };
}

const CommuneFormPage = async (
  props: Props & PageParams<{ communeId: string }>
) => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findMany();
  const commune = await prisma.communes.findUnique({
    where: { id: props.params.communeId },
  });

  if (!commune) {
    return <div>La commune n&apos;existe pas</div>;
  }

  return (
    <div className="m-4">
      <Link href="/settings/commune">
        <Button>Retour</Button>
      </Link>
      <Card className=" mt-4  p-4">
        <FormCommuneAdd casernes={casernes} commune={commune} />
      </Card>
    </div>
  );
};

export default CommuneFormPage;
