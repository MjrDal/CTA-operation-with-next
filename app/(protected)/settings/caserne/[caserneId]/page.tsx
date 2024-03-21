import { PageParams } from "@/components/types/next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FaGripfire } from "react-icons/fa";

const RoutePage = async (
  props: PageParams<{
    caserneId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const caserne = await prisma.casernes.findUnique({
    where: { id: props.params.caserneId },
  });
  const vehicules = await prisma.vehicules.findMany({
    where: { affectation: caserne?.name },
  });

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/settings/caserne">
        <Button>Retour</Button>
      </Link>
      <Card className="h-full">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="flex flex-row items-center text-xl font-bold">
            <FaGripfire className=" w-10 h-10 text-orange-500" />
            Casernes de {caserne?.name}
          </CardTitle>
          <CardDescription className="flex flex-row items-center gap-4">
            <Button>Modifier</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className=" mb-2">ID :</h2>
          <p className=" mb-4">{caserne?.id}</p>
          <h2 className=" mb-2">Groupement :</h2>
          <p className=" mb-4">{caserne?.groupement}</p>
        </CardContent>
        <CardFooter className=" flex flex-col gap-4">
          <h2 className="flex flex-row items-center">Vehicules :</h2>
          <div className=" w-full">
            {vehicules.map((docs) => (
              <div key={docs.id}>
                <Link href={`/settings/vehicule/${docs.id}`}>
                  <Card className=" bg-green-600 w-48 h-10 flex justify-center items-center">
                    {docs.name}
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoutePage;
