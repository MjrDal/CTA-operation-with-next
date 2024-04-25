"use server";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PrismaClient } from "@prisma/client";
import { CardInter } from "./card_inter";

interface Props {}

const ListInter: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const generation = await prisma.generation.findMany({
    include: { vehicules: true, messages: true },
  });

  return (
    <div>
      <ScrollArea className="h-72 w-[700px] rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Interventions en cours
          </h4>
          {generation.map((doc) => (
            <div key={doc.id}>
              <CardInter
                id={doc.id}
                numero={doc.numero}
                denomination={doc.denomination}
                commune={doc.commune}
                code={doc.code}
                vehicules={doc.vehicules}
                note={doc.note}
                messages={doc.messages}
                generation={doc.messages}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListInter;
