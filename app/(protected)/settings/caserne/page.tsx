"use server";
import { DeletButton } from "@/components/features/deleButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

interface Props {
  data: {
    id: string;
    groupement: string;
    name: string;
  }[];
}

const CaserneSettingsPage: React.FC<Props> = async () => {
  const prisma = new PrismaClient();
  const groupements = await prisma.groupements.findMany();
  const casernes = await prisma.casernes.findMany();

  return (
    <div>
      <h1 className="m-5">Casernes</h1>
      <div className=" flex flex-row m-5 gap-4">
        <Link href="/settings">
          <Button>Retour</Button>
        </Link>
        <Link href="/settings/caserne/new">
          <Button>
            <IoAddCircleOutline />
          </Button>
        </Link>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {groupements.map((docs, index) => (
              <SelectItem key={index} value={docs.groupement}>
                {docs.groupement}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Card className="m-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Groupement</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>detail</TableHead>
                <TableHead>Suppression</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {casernes.map((docs) => (
                <TableRow key={docs.id}>
                  <TableCell className="font-medium">{docs.id}</TableCell>
                  <TableCell>{docs.groupement}</TableCell>
                  <TableCell>{docs.name}</TableCell>
                  <TableCell>
                    <Button asChild>
                      <Link href={`/settings/caserne/${docs.id}`}>
                        <BiDetail />
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <DeletButton dataId={docs.id} />
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

export default CaserneSettingsPage;
