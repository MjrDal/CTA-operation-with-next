"use server";

import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { PrismaClient } from "@prisma/client";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { TbClockHour10, TbFiretruck } from "react-icons/tb";
import { ModaleAjoutVehicules } from "./modale_ajout_vehicules";
import { ModaleDescription } from "./modale_description";
import { ModaleMessages } from "./modale_message";
import { ModaleVehicules } from "./modale_vehicules";

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
  // const cinquiemeAppel = await prisma?.vehicules.findMany({
  //   where: { affectation: intervention[0].cinqieme },
  // });
  // const sixiemeAppel = await prisma?.vehicules.findMany({
  //   where: { affectation: intervention[0].sixieme },
  // });
  // const septiemeAppel = await prisma?.vehicules.findMany({
  //   where: { affectation: intervention[0].septieme },
  // });
  // const huitiemeAppel = await prisma?.vehicules.findMany({
  //   where: { affectation: intervention[0].huitieme },
  // });
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card>
            <div className=" flex flex-row h-5 items-center space-x-4 text-sm">
              <div className=" p-6">#{intervention[0].numero}</div>
              <Separator orientation="vertical" />
              <div className=" flex flex-row items-center gap-2">
                <TbClockHour10 className="" />
                <p>12h15 22/08/2024</p>
              </div>
              <Separator orientation="vertical" />
              <div className=" flex flex-row items-center gap-2">
                <FaFireFlameCurved />
                <p>{intervention[0].denomination}</p>
              </div>
              <Separator orientation="vertical" />
              <div className=" flex flex-row items-center gap-2">
                <MdLocationOn />
                <p>
                  {intervention[0].commune} {intervention[0].code}
                </p>
              </div>
            </div>
            <Separator className="" />
            <div>
              <div className=" flex flex-row items-center gap-3 p-2">
                <TbFiretruck />
                <h5>Vehicules en intervention :</h5>
              </div>
              <div>
                {intervention[0].vehicules.map((doc) => (
                  <div key={doc.id} className="flex flex-row p-2">
                    <h3>{doc.name.split(" ")[1]}:</h3>
                    <p className=" bg-red-600 w-24 mx-2 flex justify-center rounded-sm text-white">
                      {doc.name.split(" ")[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </DialogTrigger>
        <DialogContent className="w-full">
          <div className="flex flex-row w-full justify-center gap-10">
            <ModaleDescription
              numero={intervention[0].numero}
              commune={intervention[0].commune}
              code={intervention[0].code}
              note={intervention[0].note}
            />
            <ModaleVehicules
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
          </div>
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
