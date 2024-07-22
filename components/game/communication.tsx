"use server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaWalkieTalkie } from "react-icons/fa6";
import { GiNothingToSay } from "react-icons/gi";
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
          <div>
            <h2>Appel provenant du 18/112</h2>
            <div className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center">
              <GiNothingToSay />
            </div>
          </div>
          <div>
            <h2>Appel provenant du samu</h2>
            <div className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center bg-red-600">
              <BsFillTelephoneOutboundFill />
            </div>
          </div>
          <div>
            <h2>Appel provenant de la gendarmerie/police</h2>
            <div className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center">
              <GiNothingToSay />
            </div>
          </div>
          <div>
            <h2>Appel provenant d&apos;une caserne ou d&apos;un sapeur</h2>
            <div className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center">
              <GiNothingToSay />
            </div>
          </div>
          <div>
            <h2>Demande de parole radio</h2>
            <div className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center bg-red-600">
              <FaWalkieTalkie />
            </div>
          </div>
          <div>
            <h2>Telephone</h2>
            <div className=" w-full border-2 border-black rounded-sm">
              <div className="w-full h-10 border-2 border-gray-500 rounded-sm"></div>
              <div className=" grid grid-cols-3 gap-4">
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Communication;
