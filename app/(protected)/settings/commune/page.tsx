"use server";

import { DeletButton } from "@/components/features/deleButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { BiDetail } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";

const CommuneSettingsPage = async () => {
  const prisma = new PrismaClient();
  const communes = await prisma.communes.findMany();

  return (
    <div>
      <div>
        <h1 className="m-5">Communes</h1>
        <div className=" flex flex-row m-5 gap-4">
          <Link href="/settings">
            <Button>Retour</Button>
          </Link>
          <Link href="/settings/commune/new">
            <Button>
              <IoAddCircleOutline />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Card className="m-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Code postal</TableHead>
                <TableHead>detail</TableHead>
                <TableHead>Suppression</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communes.map((docs) => (
                <TableRow key={docs.id}>
                  <TableCell className="font-medium">{docs.id}</TableCell>
                  <TableCell>{docs.name}</TableCell>
                  <TableCell>{docs.code}</TableCell>
                  <TableCell>
                    <Button asChild>
                      <Link href={`/settings/commune/${docs.id}`}>
                        <BiDetail />
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <DeletButton dataId={docs.id} data="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default CommuneSettingsPage;
