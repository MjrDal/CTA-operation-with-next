"use server";

import { auth } from "@/auth";
import { ListDepart } from "@/components/game/list-depart";
import { PrismaClient } from "@prisma/client";

interface Props {
  intervention: {
    id: string;
    theme: string;
    dialogue: string;
    radio1: string | null;
    radio2: string | null;
    radio3: string | null;
    radio4: string | null;
  }[];
  commune: {
    id: string;
    name: string;
    code: string;
    premier: string;
    deuxieme: string;
    troisieme: string;
    quatrieme: string;
  }[];
}

const DashboardPage: React.FC<Props> = async () => {
  const session = await auth();
  const prisma = new PrismaClient();
  const intervention = await prisma.intervention.findMany();
  const commune = await prisma.communes.findMany();

  session?.user.id;

  return (
    <div>
      {JSON.stringify(session)}
      <ListDepart intervention={intervention} commune={commune} />
    </div>
  );
};

export default DashboardPage;
