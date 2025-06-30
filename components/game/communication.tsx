"use server";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PrismaClient } from "@prisma/client";
import { FaBackspace } from "react-icons/fa";
import { GiNothingToSay } from "react-icons/gi";
import { MdCall, MdCallEnd } from "react-icons/md";
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
          <div>
            <h2>Appel provenant du 18/112</h2>
            <div className=" w-full h-10 border-2 border-black rounded-sm flex justify-center items-center">
              <GiNothingToSay />
            </div>
          </div>
          <div>
            <h2>Appel provenant du samu</h2>
            <GenerationInter intervention={intervention} commune={commune} />
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
            <Radio generation={generation} />
          </div>
          <div>
            <h2>Telephone</h2>
            <div className=" w-full border-2 border-black rounded-sm">
              <div className="flex flex-row w-full justify-center h-10 pt-4 gap-4">
                <Input className="w-52" type="text" />
                <Button>
                  <FaBackspace />
                </Button>
              </div>
              <div className="flex justify-center mt-4">
                <div className="grid grid-cols-3 gap-4">
                  <Button className=" flex justify-center items-center w-16 h-8">
                    7
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    8
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    9
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    4
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    5
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    6
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    1
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    2
                  </Button>
                  <Button className=" flex justify-center items-center w-16 h-8">
                    3
                  </Button>
                </div>
              </div>
              <div className=" flex flex-row justify-center my-4 gap-4">
                <Button className=" flex justify-center items-center w-16 h-8">
                  0
                </Button>
                <Button className=" bg-green-500 flex justify-center items-center w-16 h-8">
                  <MdCall />
                </Button>
                <Button
                  variant="destructive"
                  className=" flex justify-center items-center w-16 h-8"
                >
                  <MdCallEnd />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Communication;
