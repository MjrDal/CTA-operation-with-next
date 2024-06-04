"use server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import { GenerationInter } from "./generation-inter";
import { Radio } from "./radio";

interface Props {}

const Communication: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const intervention = await prisma.intervention.findMany();
  const commune = await prisma.communes.findMany();
  const generation = await prisma.generation.findMany({
    include: { vehicules: true, messages: true },
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Comminication</CardTitle>
        </CardHeader>
        <CardContent className=" flex flex-col gap-6">
          <GenerationInter intervention={intervention} commune={commune} />
          <Radio generation={generation} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Communication;
