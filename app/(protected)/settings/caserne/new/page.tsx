import { FormCaserneAdd } from "@/components/setting/caserne/formCaserneAdd";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

interface Props {
  data: {
    id: string;
    groupement: string;
  }[];
}

const CaserneSettingsPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const groupements = await prisma.groupements.findMany();

  return (
    <div className="m-4">
      <Link href="/settings/caserne">
        <Button>Retour</Button>
      </Link>
      <Card className=" mt-4  p-4">
        <FormCaserneAdd data={groupements} />
      </Card>
    </div>
  );
};

export default CaserneSettingsPage;
