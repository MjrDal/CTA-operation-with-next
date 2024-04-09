"use server";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PrismaClient } from "@prisma/client";

interface Props {}

const ListInter: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const generation = await prisma.generation.findMany({
    include: { vehicules: true },
  });

  return (
    <div>
      <ScrollArea className="h-72 w-96 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Interventions en cours
          </h4>
          {generation.map((doc) => (
            <div key={doc.id}>
              <Card>
                <div>
                  <div>{doc.numero}</div>
                  <div>{doc.denomination}</div>
                  <div>
                    {doc.commune} {doc.code}
                  </div>
                </div>
                <div>
                  <h5>Vehicules en intervention</h5>
                  <div>{doc.vehicules[0].name}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListInter;
