import { PageParams } from "@/components/types/next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FormCaserneAdd } from "./caserneForm";

interface Props {
  casernes: {
    id: string;
    groupement: string;
    name: string;
  }[];
}

const CaserneFormPage = async (
  props: Props & PageParams<{ caserneId: string }>
) => {
  const prisma = new PrismaClient();
  const casernes = await prisma.casernes.findUnique({
    where: { id: props.params.caserneId },
  });

  if (!casernes) {
    return <div>La commune n&apos;existe pas</div>;
  }

  return (
    <div className="m-4">
      <Link href="/settings/caserne">
        <Button>Retour</Button>
      </Link>
      <Card className=" mt-4  p-4">
        <FormCaserneAdd casernes={casernes} />
      </Card>
    </div>
  );
};

export default CaserneFormPage;
