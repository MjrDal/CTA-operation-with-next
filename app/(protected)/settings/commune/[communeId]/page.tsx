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
import { FaCity } from "react-icons/fa";

const RoutePage = async (
  props: PageParams<{
    communeId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const commune = await prisma.communes.findUnique({
    where: { id: props.params.communeId },
  });

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/settings/commune">
        <Button>Retour</Button>
      </Link>
      <Card className="h-full">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="flex flex-row items-center text-xl font-bold">
            <FaCity className=" w-10 h-10 text-orange-500" />
            {commune?.name}
          </CardTitle>
          <CardDescription className="flex flex-row items-center gap-4">
            <Link href={`/settings/commune/${commune?.id}/detail`}>
              <Button>Modifier</Button>
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className=" mb-2">ID :</h2>
          <p className=" mb-4">{commune?.id}</p>
          <h2 className=" mb-2">Nom :</h2>
          <p className=" mb-4">{commune?.name}</p>
          <h2 className=" mb-2">Code postal :</h2>
          <p className=" mb-4">{commune?.code}</p>
          <h2 className=" mb-2">Code insee :</h2>
          <p className=" mb-4">{commune?.insee}</p>
          <h2 className=" mb-2">Longitude :</h2>
          <p className=" mb-4">{commune?.long}</p>
          <h2 className=" mb-2">Latitude :</h2>
          <p className=" mb-4">{commune?.lat}</p>
        </CardContent>
        <CardFooter className=" flex flex-col gap-4">
          <h2 className=" mb-2">Premier appel :</h2>
          <p className=" mb-4">{commune?.premier}</p>
          <h2 className=" mb-2">Deuxieme appel :</h2>
          <p className=" mb-4">{commune?.deuxieme}</p>
          <h2 className=" mb-2">Troiseme appel :</h2>
          <p className=" mb-4">{commune?.troisieme}</p>
          <h2 className=" mb-2">Quatrieme appel :</h2>
          <p className=" mb-4">{commune?.quatrieme}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoutePage;
