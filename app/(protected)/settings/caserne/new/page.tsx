import { FormCaserneAdd } from "@/components/setting/caserne/formCaserneAdd";
import { Card } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";

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
    <div>
      <Card className=" m-4 p-4">
        <FormCaserneAdd data={groupements} />
      </Card>
    </div>
  );
};

export default CaserneSettingsPage;
