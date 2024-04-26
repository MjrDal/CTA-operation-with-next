"use server";

import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { PrismaClient } from "@prisma/client";
import { ModaleAjoutVehicules } from "./modale_ajout_vehicules";
import { ModaleDescription } from "./modale_description";
import { ModaleMessages } from "./modale_message";

interface Props {
  id: string;
}

export const CardInter: React.FC<Props> = async ({ id }) => {
  const prisma = new PrismaClient();
  const intervention = await prisma?.generation.findMany({
    where: { id: id },
    include: { vehicules: true, messages: true },
  });
  const premierAppel = await prisma?.vehicules.findMany({
    where: { affectation: intervention[0].premier },
  });
  const deuxiemerAppel = await prisma?.vehicules.findMany({
    where: { affectation: intervention[0].deuxieme },
  });
  const troisiemeAppel = await prisma?.vehicules.findMany({
    where: { affectation: intervention[0].troisieme },
  });
  const quatriemeAppel = await prisma?.vehicules.findMany({
    where: { affectation: intervention[0].quatrieme },
  });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card>
            <div className=" flex flex-row h-5 items-center space-x-4 text-sm">
              <div>{intervention[0].numero}</div>
              <Separator orientation="vertical" />
              <div>{intervention[0].denomination}</div>
              <Separator orientation="vertical" />
              <div>
                {intervention[0].commune} {intervention[0].code}
              </div>
            </div>
            <Separator className="" />
            <div>
              <h5>Vehicules en intervention</h5>
              <div>
                {intervention[0].vehicules.map((doc) => (
                  <div key={doc.id}>{doc.name}</div>
                ))}
              </div>
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <ModaleDescription
            numero={intervention[0].numero}
            commune={intervention[0].commune}
            code={intervention[0].code}
            vehicules={intervention[0].vehicules}
            note={intervention[0].note}
          />
          <ModaleMessages
            id={intervention[0].id}
            messages={intervention[0].messages}
          />
          <ModaleAjoutVehicules
            premier={premierAppel}
            deuxieme={deuxiemerAppel}
            troisieme={troisiemeAppel}
            quatrieme={quatriemeAppel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
