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
import { MdFireTruck } from "react-icons/md";

const RoutePage = async (
  props: PageParams<{
    vehiculeId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const vehicule = await prisma.vehicules.findUnique({
    where: { id: props.params.vehiculeId },
    include: { type: true, theme: true },
  });
  const casernes = await prisma.casernes.findMany({
    where: { name: vehicule?.affectation },
  });

  console.log(casernes[0]);

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/settings/vehicule">
        <Button>Retour</Button>
      </Link>
      <Card className="h-full">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="flex flex-row items-center text-xl font-bold">
            <MdFireTruck className=" w-10 h-10 text-orange-500" />
            {vehicule?.name}
          </CardTitle>
          <CardDescription className="flex flex-row items-center gap-4">
            <Button>Modifier</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className=" mb-2">ID :</h2>
          <p className=" mb-4">{vehicule?.id}</p>
          <h2 className=" mb-2">Affectation :</h2>
          <Link href={`/settings/caserne/${casernes[0].id}`}>
            <p id={casernes[0].id} className=" mb-4">
              {casernes[0].name}
            </p>
          </Link>
          <h2 className=" mb-2">Type :</h2>
          <p className=" mb-4">{vehicule?.type[0].type}</p>
        </CardContent>
        <CardFooter className=" flex flex-col gap-4">
          <h2>Themes :</h2>
          {vehicule?.theme.map((docs) => (
            <div key={docs.id}>
              <Card className=" w-48 h-10 flex justify-center items-center">
                {docs.theme}
              </Card>
            </div>
          ))}
          <div className=" w-full"></div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoutePage;
