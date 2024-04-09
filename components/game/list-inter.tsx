"use server";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PrismaClient } from "@prisma/client";

interface Props {}

const ListInter: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const generation = await prisma.generation.findMany();

  return (
    <div>
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            Interventions en cours
          </h4>
          {generation.map((doc) => (
            <div key={doc.id}>
              <Card>
                <CardHeader></CardHeader>
                <CardContent></CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListInter;
