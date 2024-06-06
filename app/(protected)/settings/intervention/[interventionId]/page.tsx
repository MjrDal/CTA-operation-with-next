import { DeletAudioButton } from "@/components/features/deleAudioButton";
import AudioPlayer from "@/components/game/audioPlayer";
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
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { FaGripfire } from "react-icons/fa";

const RoutePage = async (
  props: PageParams<{
    interventionId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const intervention = await prisma.intervention.findUnique({
    where: { id: props.params.interventionId },
  });

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/settings/intervention">
        <Button>Retour</Button>
      </Link>
      <Card className="h-full">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="flex flex-row items-center text-xl font-bold">
            <FaGripfire className=" w-10 h-10 text-orange-500" />
            Intervention
          </CardTitle>
          <CardDescription className="flex flex-row items-center gap-4">
            <Button>Modifier</Button>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className=" mb-2">ID :</h2>
          <p className=" mb-4">{intervention?.id}</p>
        </CardContent>
        <CardFooter className=" flex flex-col gap-4">
          <h2 className="flex flex-row items-center">message :</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Message radio numéro 1
                </TableCell>
                <TableCell>
                  {!intervention?.radio1 ? (
                    <Button asChild>
                      <Link
                        href={{
                          pathname: `/settings/audio/${props.params.interventionId}`,
                          query: { extraParam: "radio1" },
                        }}
                      >
                        Enregistrer un message
                      </Link>
                    </Button>
                  ) : (
                    <AudioPlayer audioName={intervention.radio1} />
                  )}
                </TableCell>
                {intervention?.radio1 ? (
                  <TableCell>
                    {intervention?.radio1}
                    <DeletAudioButton
                      dataId={props.params.interventionId}
                      radio={"radio1"}
                      audioName={intervention.radio1}
                    />
                  </TableCell>
                ) : (
                  <TableCell>Aucun fichier</TableCell>
                )}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Message radio numéro 2
                </TableCell>
                <TableCell>
                  <Button asChild>
                    <Link
                      href={{
                        pathname: `/settings/audio/${props.params.interventionId}`,
                        query: { extraParam: "radio2" },
                      }}
                    >
                      Enregistrer un message
                    </Link>
                  </Button>
                </TableCell>
                {intervention?.radio2 ? (
                  <TableCell>
                    {intervention?.radio2}
                    <DeletAudioButton
                      dataId={props.params.interventionId}
                      radio={"radio2"}
                      audioName={intervention.radio2}
                    />
                  </TableCell>
                ) : (
                  <TableCell>Aucun fichier</TableCell>
                )}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Message radio numéro 3
                </TableCell>
                <TableCell>
                  <Button asChild>
                    <Link
                      href={{
                        pathname: `/settings/audio/${props.params.interventionId}`,
                        query: { extraParam: "radio3" },
                      }}
                    >
                      Enregistrer un message
                    </Link>
                  </Button>
                </TableCell>
                {intervention?.radio3 ? (
                  <TableCell>
                    {intervention?.radio3}
                    <DeletAudioButton
                      dataId={props.params.interventionId}
                      radio={"radio3"}
                      audioName={intervention.radio3}
                    />
                  </TableCell>
                ) : (
                  <TableCell>Aucun fichier</TableCell>
                )}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Message radio numéro 4
                </TableCell>
                <TableCell>
                  <Button asChild>
                    <Link
                      href={{
                        pathname: `/settings/audio/${props.params.interventionId}`,
                        query: { extraParam: "radio4" },
                      }}
                    >
                      Enregistrer un message
                    </Link>
                  </Button>
                </TableCell>
                {intervention?.radio4 ? (
                  <TableCell>
                    {intervention?.radio4}
                    <DeletAudioButton
                      dataId={props.params.interventionId}
                      radio={"radio4"}
                      audioName={intervention.radio4}
                    />
                  </TableCell>
                ) : (
                  <TableCell>Aucun fichier</TableCell>
                )}
              </TableRow>
            </TableBody>
          </Table>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoutePage;
